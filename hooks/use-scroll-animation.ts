'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px',
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, triggerOnce, rootMargin])

  return { ref, isInView }
}
