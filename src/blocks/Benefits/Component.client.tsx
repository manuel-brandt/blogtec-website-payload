// @ts-nocheck
'use client'
import React, { useState } from 'react'
import type { BenefitsBlock as BenefitsBlockType } from '@/payload-types'

export const BenefitsComponent: React.FC<BenefitsBlockType> = ({ headline, tabs, highlights }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {headline && <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">{headline}</h2>}
        {tabs && tabs.length > 1 && (
          <div className="flex gap-2 justify-center mb-8">
            {tabs.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${activeTab === i ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {tabs?.[activeTab]?.features?.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4">
              <span className="text-indigo-500 text-xl">✓</span>
              <span className="text-gray-700 font-medium">{f.text}</span>
            </div>
          ))}
        </div>
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center">
            {highlights.map((h, i) => (
              <span key={i} className="bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full border border-indigo-100">
                {h.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
