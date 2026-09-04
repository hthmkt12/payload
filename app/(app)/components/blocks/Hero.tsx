import React from 'react'

export interface HeroProps {
  headline: string
  subheadline?: string | null
  ctaText?: string | null
  ctaLink?: string | null
}

export const HeroBlockComponent: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, #14161a 0%, #08090a 100%)',
        borderBottom: '1px solid #232528',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#f7f8f8',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            style={{
              fontSize: '18px',
              color: '#8a8f98',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            {subheadline}
          </p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#ffffff',
              background: '#5e6ad2',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'background 0.15s ease',
            }}
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
