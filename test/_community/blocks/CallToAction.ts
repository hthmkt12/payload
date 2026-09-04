import type { Block } from 'payload'

export const CallToActionBlock: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
    },
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark Carbon', value: 'dark' },
        { label: 'Light Accent', value: 'light' },
        { label: 'Brand Gradient', value: 'gradient' },
      ],
    },
  ],
}
