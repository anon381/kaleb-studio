'use client'

import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ThemeContext } from './theme-provider'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Navigation Bar - Hidden on extra small screens */}
      <nav className="hidden sm:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">KS</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:inline">Kaleb Studio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground/70 hover:text-primary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu and Theme Toggle for tablets */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer - For tablets and small screens */}
        {isOpen && (
          <div className="hidden sm:block md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-top">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-colors font-medium animate-fade-in"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {isOpen && (
          <div
            className="hidden sm:block md:hidden fixed inset-0 top-16 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* Bottom Navigation Bar - Mobile only (extra small screens) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {!isOpen && (
              <Link href="/" className="flex items-center gap-1 group">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-xs">KS</span>
                </div>
                <span className="text-sm font-bold text-foreground">Studio</span>
              </Link>
            )}

            <div className="flex gap-2 items-center ml-auto">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-md transition-colors flex-shrink-0"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-secondary rounded-md transition-colors flex-shrink-0"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer - Below bottom nav */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border animate-slide-in-bottom">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-colors font-medium animate-fade-in"
                  style={{
                    animationDelay: `${index * 40}ms`,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {isOpen && (
          <div
            className="fixed inset-0 bottom-16 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      <div className="sm:pt-16" />
      <div className="sm:hidden pt-0 pb-20" />
    </>
  )
}
