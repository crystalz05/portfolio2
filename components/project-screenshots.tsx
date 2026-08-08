'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectScreenshotsProps {
  images: string[]
  title: string
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
        <h2 className="text-2xl font-bold text-white">Screenshots</h2>

        {/* Left / Right Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2.5 rounded-xl border border-white/10 bg-white/[0.05] text-white hover:bg-white/15 hover:border-white/20 active:scale-95 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2.5 rounded-xl border border-white/10 bg-white/[0.05] text-white hover:bg-white/15 hover:border-white/20 active:scale-95 transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory rounded-xl scrollbar-custom"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative shrink-0 h-[550px] sm:h-[650px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] p-3 snap-center transition-transform hover:scale-[1.01]"
          >
            <img
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              className="h-full w-auto object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
