"use client"

import React, { useState } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string
}

export default function ImageWithLoader({ src, alt, className, skeletonClassName, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className || ''}`}>
      {!loaded && (
        <div className={skeletonClassName || 'absolute inset-0 flex items-center justify-center bg-muted'}>
          <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...rest}
      />
    </div>
  )
}
