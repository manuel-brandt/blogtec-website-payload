import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { FeatureSpotlightBlock as FeatureSpotlightBlockType } from '@/payload-types'

export const FeatureSpotlightBlockComponent: React.FC<FeatureSpotlightBlockType> = ({
  badge, headline, subheadline, description, highlightHeadline, highlightText, image, imagePosition, cta,
}) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className={`max-w-6xl mx-auto flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
        <div className="flex-1">
          {badge && (
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {badge}
            </span>
          )}
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{headline}</h2>
          {subheadline && <p className="text-xl text-indigo-600 font-medium mb-4">{subheadline}</p>}
          {description && <p className="text-gray-500 text-lg leading-relaxed mb-6">{description}</p>}
          {highlightHeadline && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8">
              <div className="font-bold text-gray-900 mb-1">{highlightHeadline}</div>
              {highlightText && <p className="text-gray-600 text-sm">{highlightText}</p>}
            </div>
          )}
          {cta?.label && (
            <Link href={cta.url} className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
              {cta.label}
            </Link>
          )}
        </div>
        <div className="flex-1">
          {typeof image === 'object' && image?.url && (
            <Image src={image.url} alt={image.alt || headline} width={600} height={400} className="w-full rounded-2xl shadow-lg" />
          )}
        </div>
      </div>
    </section>
  )
}
