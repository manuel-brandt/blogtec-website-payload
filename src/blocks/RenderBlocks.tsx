// @ts-nocheck
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

// Blogtec homepage blocks
import { HeroBlockComponent } from '@/blocks/Hero/Component'
import { ServicesGridBlockComponent } from '@/blocks/ServicesGrid/Component'
import { FeatureSpotlightBlockComponent } from '@/blocks/FeatureSpotlight/Component'
import { VideoSectionBlockComponent } from '@/blocks/VideoSection/Component'
import { BenefitsBlockComponent } from '@/blocks/Benefits/Component'
import { AudienceBlockComponent } from '@/blocks/Audience/Component'
import { ResultsBlockComponent } from '@/blocks/Results/Component'
import { ResourcesCarouselBlockComponent } from '@/blocks/ResourcesCarousel/Component'
import { TestimonialsBlockComponent } from '@/blocks/Testimonials/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroBlock: HeroBlockComponent,
  servicesGrid: ServicesGridBlockComponent,
  featureSpotlight: FeatureSpotlightBlockComponent,
  videoSection: VideoSectionBlockComponent,
  benefits: BenefitsBlockComponent,
  audience: AudienceBlockComponent,
  results: ResultsBlockComponent,
  resourcesCarousel: ResourcesCarouselBlockComponent,
  testimonials: TestimonialsBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
