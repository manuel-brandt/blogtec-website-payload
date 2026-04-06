import type { Block } from 'payload'

export const ServicesGridBlock: Block = {
  slug: 'servicesGrid',
  labels: { singular: 'Services Grid', plural: 'Services Grids' },
  fields: [
    { name: 'headline', type: 'text', required: true, defaultValue: 'We Offer A Wide Range of Services' },
    {
      name: 'tabs',
      type: 'array',
      label: 'Service Tabs',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'services',
          type: 'array',
          label: 'Services',
          minRows: 1,
          fields: [
            { name: 'icon', type: 'upload', relationTo: 'media', required: true },
            { name: 'name', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
