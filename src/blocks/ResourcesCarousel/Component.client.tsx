'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ResourcesCarouselBlock as ResourcesCarouselBlockType } from '@/payload-types'

const TYPE_LABELS: Record<string, string> = {
  caseStudy: 'Case Study', guide: 'Guide', video: 'Video', blogArticle: 'Blog Article',
}
const TYPE_COLORS: Record<string, string> = {
  caseStudy: 'bg-green-100 text-green-700', guide: 'bg-blue-100 text-blue-700',
  video: 'bg-red-100 text-red-700', blogArticle: 'bg-purple-100 text-purple-700',
}

export const ResourcesCarouselComponent: React.FC<ResourcesCarouselBlockType> = ({ headline, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">{headline}</h2>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {items?.map((item, i) => (
            <Link key={i} href={item.url}
              className="flex-none w-64 snap-start bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all group">
              {typeof item.image === 'object' && item.image?.url && (
                <div className="aspect-square overflow-hidden">
                  <Image src={item.image.url} alt={item.image.alt || item.title} width={256} height={256} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div className="p-4">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${TYPE_COLORS[item.type] || 'bg-gray-100 text-gray-600'}`}>
                  {TYPE_LABELS[item.type] || item.type}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                <span className="text-xs text-indigo-500 font-medium mt-2 inline-block">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
