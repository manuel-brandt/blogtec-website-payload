'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'

export const TestimonialsComponent: React.FC<TestimonialsBlockType> = ({ headline, badge, testimonials }) => {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{headline}</h2>
          {typeof badge === 'object' && badge?.url && (
            <Image src={badge.url} alt={badge.alt || 'Review badge'} width={140} height={40} className="h-10 w-auto" />
          )}
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-4 mb-6">
            {typeof testimonials?.[active]?.avatar === 'object' && testimonials[active].avatar?.url && (
              <Image src={testimonials[active].avatar.url} alt={testimonials[active].name} width={60} height={60} className="w-14 h-14 rounded-full object-cover" />
            )}
            <div>
              <div className="font-bold text-gray-900">{testimonials?.[active]?.name}</div>
              <div className="text-sm text-gray-500">{testimonials?.[active]?.role} — {testimonials?.[active]?.company}</div>
            </div>
            {typeof testimonials?.[active]?.companyLogo === 'object' && testimonials[active].companyLogo?.url && (
              <div className="ml-auto">
                <Image src={testimonials[active].companyLogo.url} alt={testimonials[active].company} width={80} height={30} className="h-7 w-auto object-contain" />
              </div>
            )}
          </div>
          <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}</div>
          <p className="text-gray-600 text-lg leading-relaxed">"{testimonials?.[active]?.quote}"</p>
        </div>
        <div className="flex justify-center gap-2">
          {testimonials?.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${active === i ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
