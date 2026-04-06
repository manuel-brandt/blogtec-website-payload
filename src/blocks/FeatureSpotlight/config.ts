import type { Block } from 'payload'

export const FeatureSpotlightBlock: Block = {
  slug: 'featureSpotlight',
  labels: { singular: 'Feature Spotlight', plural: 'Feature Spotlights' },
  fields: [
    { name: 'badge', type: 'text', label: 'Badge' },
    { name: 'headline', type: 'text', required: true },
    { name: 'subheadline', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'highlightHeadline', type: 'text', label: 'Highlight Box Headline' },
    { name: 'highlightText', type: 'text', label: 'Highlight Box Text' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Button',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
