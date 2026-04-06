import type { Block } from 'payload'

export const ResultsBlock: Block = {
  slug: 'results',
  labels: { singular: 'Results Section', plural: 'Results Sections' },
  fields: [
    { name: 'headline', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'features', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      label: 'Featured Testimonial',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'role', type: 'text' },
        { name: 'company', type: 'text' },
        { name: 'avatar', type: 'upload', relationTo: 'media' },
        { name: 'quote', type: 'textarea' },
        { name: 'companyLogo', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
