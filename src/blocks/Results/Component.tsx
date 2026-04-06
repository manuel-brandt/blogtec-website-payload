import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ResultsBlock as ResultsBlockType } from '@/payload-types'

export const ResultsBlockComponent: React.FC<ResultsBlockType> = ({ headline, description, features, cta, testimonial }) => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{headline}</h2>
          {description && <p className="text-gray-500 text-lg mb-6">{description}</p>}
          {features && features.length > 0 && (
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-indigo-500 font-bold text-lg">✓</span>
                  {f.text}
                </li>
              ))}
            </ul>
          )}
          {cta?.label && (
            <Link href={cta.url} className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
              {cta.label}
            </Link>
          )}
        </div>
        {testimonial?.name && (
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-5">
              {typeof testimonial.avatar === 'object' && testimonial.avatar?.url && (
                <Image src={testimonial.avatar.url} alt={testimonial.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
              )}
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role} — {testimonial.company}</div>
              </div>
            </div>
            <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}</div>
            <p className="text-gray-600 leading-relaxed italic">"{testimonial.quote}"</p>
            {typeof testimonial.companyLogo === 'object' && testimonial.companyLogo?.url && (
              <div className="mt-5 pt-5 border-t border-gray-100">
                <Image src={testimonial.companyLogo.url} alt={testimonial.company} width={120} height={40} className="h-8 w-auto object-contain" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
