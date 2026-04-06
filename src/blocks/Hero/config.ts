import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      admin: { description: 'Small label above headline e.g. "New: Design & Development"' },
    },
    { name: 'headline', type: 'text', label: 'Headline', required: true },
    { name: 'subheadline', type: 'text', label: 'Subheadline', required: true },
    {
      name: 'primaryCTA',
      type: 'group',
      label: 'Primary Button',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      label: 'Secondary Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value e.g. "300+"' },
        { name: 'label', type: 'text', required: true, label: 'Label e.g. "Agencies & Teams"' },
      ],
    },
  ],
}
