import React from 'react'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'
import { TestimonialsComponent } from './Component.client'

export const TestimonialsBlockComponent: React.FC<TestimonialsBlockType> = (props) => {
  return <TestimonialsComponent {...props} />
}
