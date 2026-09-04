import type { Block } from 'payload'

import { mediaSlug } from '../collections/Media/index.js'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'text',
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: mediaSlug,
    },
  ],
}
