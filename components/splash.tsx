"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  timeout?: number
}

export default function Splash({ timeout = 1400 }: Props) {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Don't show splash if already shown before (persisted across sessions)
    try {
      if (localStorage.getItem('splashShown')) {
        setVisible(false)
        return
      }
    } catch (e) {
      // ignore storage errors
    }

    let finished = false

    const hide = () => {
      if (finished) return
      finished = true
      // start fade-out animation
      setExiting(true)
      setTimeout(() => {
        try {
          localStorage.setItem('splashShown', '1')
        } catch (e) {}
        setVisible(false)
      }, 300) // match fade-out duration
    }

    const onLoad = () => hide()

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        hide()
      } else {
        window.addEventListener('load', onLoad)
      }
    }

    const fallback = setTimeout(hide, timeout)

    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(fallback)
    }
  }, [timeout])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-300 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <div className="text-2xl font-bold text-foreground">Kaleb Studio</div>
      </div>
    </div>
  )
}
