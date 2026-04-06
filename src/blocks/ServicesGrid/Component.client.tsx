'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ServicesGridBlock as ServicesGridBlockType } from '@/payload-types'

export const ServicesGridComponent: React.FC<ServicesGridBlockType> = ({ headline, tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">{headline}</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs?.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                activeTab === i
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tabs?.[activeTab]?.services?.map((service, i) => (
            <Link
              key={i}
              href={service.url}
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              {typeof service.icon === 'object' && service.icon?.url && (
                <Image
                  src={service.icon.url}
                  alt={service.icon.alt || service.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              )}
              <span className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {service.name}
              </span>
              <span className="text-xs text-indigo-500 font-medium">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
