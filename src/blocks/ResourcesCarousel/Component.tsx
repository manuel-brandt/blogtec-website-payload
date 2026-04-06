import React from 'react'
import type { ResourcesCarouselBlock as ResourcesCarouselBlockType } from '@/payload-types'
import { ResourcesCarouselComponent } from './Component.client'

export const ResourcesCarouselBlockComponent: React.FC<ResourcesCarouselBlockType> = (props) => {
  return <ResourcesCarouselComponent {...props} />
}
