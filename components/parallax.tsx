'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
}

export function Parallax({ children, speed = 0.5 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const elementOffset = rect.top + window.scrollY
        const distance = scrolled - (elementOffset - window.innerHeight)
        setOffset(distance * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
