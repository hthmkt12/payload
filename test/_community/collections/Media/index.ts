import type { CollectionConfig } from 'payload'

export const mediaSlug = 'media'

export const MediaCollection: CollectionConfig = {
  slug: mediaSlug,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
  upload: {
    crop: true,
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        height: 200,
        width: 200,
      },
      {
        name: 'medium',
        height: 800,
        width: 800,
      },
      {
        name: 'large',
        height: 1200,
        width: 1200,
      },
    ],
    mimeTypes: ['image/*'],
  },
  versions: false,
}
