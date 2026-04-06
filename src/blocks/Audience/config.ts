import type { Block } from 'payload'

export const AudienceBlock: Block = {
  slug: 'audience',
  labels: { singular: 'Audience Section', plural: 'Audience Sections' },
  fields: [
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'headline', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
