import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    { name: 'headline', type: 'text', required: true, defaultValue: 'What Other Customers Say' },
    { name: 'badge', type: 'upload', relationTo: 'media', label: 'Review Platform Badge' },
    {
      name: 'testimonials',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'company', type: 'text', required: true },
        { name: 'avatar', type: 'upload', relationTo: 'media' },
        { name: 'companyLogo', type: 'upload', relationTo: 'media' },
        { name: 'quote', type: 'textarea', required: true },
      ],
    },
  ],
}
