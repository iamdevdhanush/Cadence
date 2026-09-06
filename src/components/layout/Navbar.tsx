'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navItems = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-medium',
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-border shadow-nav'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="container h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-text flex items-center gap-2"
          aria-label="Cadence - Home"
          style={{ letterSpacing: '-0.03em' }}
        >
          <span>CADENCE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body-sm font-medium text-text-muted hover:text-text transition-colors duration-fast relative"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="md" asChild>
            <Link href="/#contact">Book Audit</Link>
          </Button>
          <Button size="md" asChild>
            <Link href="/#contact">Book Free Strategy Call</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden py-6 border-t border-border animate-in bg-surface">
          <nav className="flex flex-col gap-4" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body font-medium text-text-muted hover:text-text transition-colors duration-fast px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Book Audit</Link>
              </Button>
              <Button size="lg" className="w-full" asChild>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Book Free Strategy Call</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}