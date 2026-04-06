import type { Block } from 'payload'

export const BenefitsBlock: Block = {
  slug: 'benefits',
  labels: { singular: 'Benefits', plural: 'Benefits' },
  fields: [
    { name: 'headline', type: 'text' },
    {
      name: 'tabs',
      type: 'array',
      label: 'Audience Tabs',
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlight Pills',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
}
