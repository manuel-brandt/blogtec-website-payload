import React from 'react'
import type { BenefitsBlock as BenefitsBlockType } from '@/payload-types'
import { BenefitsComponent } from './Component.client'

export const BenefitsBlockComponent: React.FC<BenefitsBlockType> = (props) => {
  return <BenefitsComponent {...props} />
}
