import React from 'react'
import type { ServicesGridBlock as ServicesGridBlockType } from '@/payload-types'
import { ServicesGridComponent } from './Component.client'

export const ServicesGridBlockComponent: React.FC<ServicesGridBlockType> = (props) => {
  return <ServicesGridComponent {...props} />
}
