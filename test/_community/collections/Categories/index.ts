import type { CollectionConfig } from 'payload'

export const categoriesSlug = 'categories'

export const CategoriesCollection: CollectionConfig = {
  slug: categoriesSlug,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'parent', 'updatedAt'],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
      index: true,
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: categoriesSlug,
      admin: {
        position: 'sidebar',
      },
      filterOptions: ({ id }) => {
        if (id) {
          return {
            id: {
              not_equals: id,
            },
          }
        }
        return true
      },
    },
  ],
}
