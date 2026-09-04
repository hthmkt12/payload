import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import type { Category } from '../../../../test/_community/payload-types.js'
import { RenderBlocks } from '../../components/blocks/index.js'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          _status: {
            equals: 'published',
          },
        },
      ],
    },
    limit: 1,
  })

  const post = posts[0]

  if (!post) {
    return notFound()
  }

  const categoryTitles = Array.isArray(post.categories)
    ? post.categories
        .map((cat: number | Category) => (typeof cat === 'object' && cat !== null ? cat.title : ''))
        .filter(Boolean)
    : []

  return (
    <article
      style={{
        backgroundColor: '#08090a',
        color: '#f7f8f8',
        minHeight: '100vh',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Header bar */}
      <header
        style={{
          borderBottom: '1px solid #232528',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="/admin"
          style={{
            color: '#8a8f98',
            textDecoration: 'none',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>← Back to Admin</span>
        </a>
        <div style={{ display: 'flex', gap: '8px' }}>
          {categoryTitles.map((title: string, index: number) => (
            <span
              key={index}
              style={{
                fontSize: '12px',
                padding: '3px 8px',
                backgroundColor: '#16181d',
                border: '1px solid #282a2e',
                borderRadius: '4px',
                color: '#8a8f98',
              }}
            >
              {title}
            </span>
          ))}
          {post._status && (
            <span
              style={{
                fontSize: '12px',
                padding: '3px 8px',
                backgroundColor: post._status === 'published' ? '#0d2818' : '#2d2305',
                border: `1px solid ${post._status === 'published' ? '#1b4d2e' : '#54430a'}`,
                borderRadius: '4px',
                color: post._status === 'published' ? '#4ade80' : '#facc15',
                textTransform: 'capitalize',
              }}
            >
              {post._status}
            </span>
          )}
        </div>
      </header>

      {/* Main Post Header */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '64px 24px 32px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          {post.title}
        </h1>
        <div style={{ color: '#62666d', fontSize: '14px' }}>
          Slug: <code style={{ color: '#8a8f98' }}>/{post.slug}</code> • Last updated:{' '}
          {new Date(post.updatedAt).toLocaleDateString()}
        </div>
      </div>

      {/* Modular Layout Blocks */}
      {post.layout && post.layout.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <RenderBlocks blocks={post.layout} />
        </div>
      )}
    </article>
  )
}
