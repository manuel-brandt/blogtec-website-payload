// @ts-nocheck
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import type { AudienceBlock as AudienceBlockType } from '@/payload-types'

export const AudienceComponent: React.FC<AudienceBlockType> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const active = tabs?.[activeTab]

  return (
    <section className="bg-indigo-600 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-2 justify-center mb-12">
          {tabs?.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === i ? 'bg-white text-indigo-600' : 'bg-indigo-500/50 text-white hover:bg-indigo-500'}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <h2 className="text-4xl font-bold text-center mb-6">{active?.headline}</h2>
        <p className="text-indigo-100 text-lg text-center max-w-2xl mx-auto mb-8">{active?.description}</p>
        {active?.features && active.features.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-2xl mx-auto">
            {active.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-indigo-500/40 rounded-xl px-4 py-3">
                <span className="text-indigo-200">✓</span>
                <span className="text-white text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        )}
        <div className="text-center">
          <Link href={active?.cta?.url || '#'} className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
            {active?.cta?.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
