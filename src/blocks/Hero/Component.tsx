import React from 'react'
import Link from 'next/link'
import type { HeroBlock as HeroBlockType } from '@/payload-types'

export const HeroBlockComponent: React.FC<HeroBlockType> = ({
  badge,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  stats,
}) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {badge && (
          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-100">
            {badge}
          </span>
        )}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
          {headline}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">{subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {primaryCTA?.label && (
            <Link
              href={primaryCTA.url}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors"
            >
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA?.label && (
            <Link
              href={secondaryCTA.url}
              className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-10 justify-center">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
