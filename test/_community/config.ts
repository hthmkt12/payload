import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'node:url'
import path from 'path'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { devUser } from '../credentials.js'
import { CategoriesCollection } from './collections/Categories/index.js'
import { MediaCollection } from './collections/Media/index.js'
import { PostsCollection, postsSlug } from './collections/Posts/index.js'
import { MenuGlobal } from './globals/Menu/index.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [PostsCollection, MediaCollection, CategoriesCollection],
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  globals: [
    // ...add more globals here
    MenuGlobal,
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    await payload.create({
      collection: postsSlug,
      data: {
        title: 'example post',
        slug: 'example-post',
        _status: 'published',
        layout: [
          {
            blockType: 'hero',
            headline: 'Experience Next-Gen Content with Payload & Linear Style',
            subheadline:
              'A minimal, high-contrast headless CMS starter with modular page builder blocks.',
            ctaText: 'Explore Blocks',
            ctaLink: '#features',
          },
          {
            blockType: 'featureGrid',
            sectionTitle: 'Core Capabilities',
            sectionDescription:
              'Engineered for performance, strict type safety, and seamless editor workflows.',
            features: [
              {
                title: 'Modular Layout Blocks',
                description:
                  'Compose dynamic landing pages with re-usable schema blocks without touching frontend code.',
                icon: 'cube',
              },
              {
                title: 'Drafts & Versioning',
                description:
                  'Iterate safely with built-in draft states, revision rollback, and live preview.',
                icon: 'layers',
              },
              {
                title: 'Linear & Vercel Aesthetic',
                description:
                  'Sleek dark carbon palettes, hairline borders, and 6px border radiuses across all UI controls.',
                icon: 'palette',
              },
            ],
          },
          {
            blockType: 'callToAction',
            title: 'Build faster with Payload 3.x',
            description:
              'Ready to deploy your modern CMS stack? Clone the repo and start shipping today.',
            buttonText: 'Get Started Now',
            buttonLink: 'https://github.com/hthmkt12/payload',
            theme: 'dark',
          },
        ],
      },
    })
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
