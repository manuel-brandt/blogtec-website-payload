import type { Block } from 'payload'

export const ResourcesCarouselBlock: Block = {
  slug: 'resourcesCarousel',
  labels: { singular: 'Resources Carousel', plural: 'Resources Carousels' },
  fields: [
    { name: 'headline', type: 'text', required: true, defaultValue: 'Discover Our Resources' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Case Study', value: 'caseStudy' },
            { label: 'Guide', value: 'guide' },
            { label: 'Video', value: 'video' },
            { label: 'Blog Article', value: 'blogArticle' },
          ],
        },
        { name: 'title', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
