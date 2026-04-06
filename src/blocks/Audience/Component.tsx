import React from 'react'
import type { AudienceBlock as AudienceBlockType } from '@/payload-types'
import { AudienceComponent } from './Component.client'

export const AudienceBlockComponent: React.FC<AudienceBlockType> = (props) => {
  return <AudienceComponent {...props} />
}
