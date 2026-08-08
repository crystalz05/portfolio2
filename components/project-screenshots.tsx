'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectScreenshotsProps {
  images: string[]
  title: string
}

function ScreenshotItem({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative shrink-0 h-[550px] sm:h-[650px] rounded-2xl overflow-hidden snap-center transition-transform hover:scale-[1.01]">
      {/* Shimmer skeleton shown until image loads */}
      {!loaded && !errored && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="h-full w-[280px] sm:w-[320px] bg-foreground/[0.06] rounded-2xl shimmer" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setErrored(true) }}
        className={`h-full w-auto object-contain rounded-2xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export function ProjectScreenshots({ images, title }: ProjectScreenshotsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Screenshots</h2>

        {/* Left / Right Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2.5 rounded-xl border border-foreground/10 bg-foreground/[0.05] text-foreground hover:bg-foreground/15 hover:border-foreground/20 active:scale-95 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2.5 rounded-xl border border-foreground/10 bg-foreground/[0.05] text-foreground hover:bg-foreground/15 hover:border-foreground/20 active:scale-95 transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-custom"
      >
        {images.map((img, idx) => (
          <ScreenshotItem
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
