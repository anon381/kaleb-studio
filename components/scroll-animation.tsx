'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up'
  delay?: number
}

export function ScrollAnimation({
  children,
  direction = 'up',
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (entry.target instanceof HTMLElement) {
              if (direction === 'left') {
                entry.target.classList.add('animate-slide-in-left')
              } else if (direction === 'right') {
                entry.target.classList.add('animate-slide-in-right')
              } else {
                entry.target.classList.add('animate-slide-in-top')
              }
              entry.target.classList.remove('opacity-0')
            }
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [direction, delay])

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  )
}
