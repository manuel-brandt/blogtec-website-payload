import type { Block } from 'payload'

export const VideoSectionBlock: Block = {
  slug: 'videoSection',
  labels: { singular: 'Video Section', plural: 'Video Sections' },
  fields: [
    { name: 'headline', type: 'text', required: true },
    { name: 'videoUrl', type: 'text', label: 'Video URL (YouTube/Vimeo)' },
    { name: 'fallbackImage', type: 'upload', relationTo: 'media' },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
