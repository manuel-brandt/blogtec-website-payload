import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { VideoSectionBlock as VideoSectionBlockType } from '@/payload-types'

const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com/watch?v=')) {
    const id = new URL(url).searchParams.get('v')
    return `https://www.youtube.com/embed/${id}`
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0]
    return `https://www.youtube.com/embed/${id}`
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${id}`
  }
  return url
}

export const VideoSectionBlockComponent: React.FC<VideoSectionBlockType> = ({ headline, videoUrl, fallbackImage, cta }) => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">{headline}</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
          {videoUrl ? (
            <div className="relative aspect-video">
              <iframe
                src={getEmbedUrl(videoUrl)}
                title={headline}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : typeof fallbackImage === 'object' && fallbackImage?.url ? (
            <Image src={fallbackImage.url} alt={fallbackImage.alt || headline} width={800} height={450} className="w-full" />
          ) : null}
        </div>
        {cta?.label && (
          <Link href={cta.url} className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
