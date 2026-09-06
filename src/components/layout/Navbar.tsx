'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { MagneticButton } from '@/components/motion/MagneticButton'

const navItems = [
  { href: '#services', label: 'Capabilities', index: '01' },
  { href: '#process', label: 'Methodology', index: '02' },
  { href: '#work', label: 'Dossiers', index: '03' },
  { href: '#manifesto', label: 'Manifesto', index: '04' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-background/80 backdrop-blur-xl border-b border-border shadow-subtle'
          : 'py-6 bg-transparent'
      }`}
      role="banner"
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-text focus-visible:outline-none"
            aria-label="Cadence - Creative AI Systems Agency"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125 shadow-glow-emerald" />
            <span className="text-xl font-bold tracking-[-0.04em] text-text font-sans">
              CADENCE
            </span>
          </Link>

          {/* Operational pill */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted shadow-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>SYSTEM ACTIVE // CLIENT ADMISSIONS OPEN</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          role="navigation"
          aria-label="Primary agency navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors duration-200"
            >
              <span className="font-mono text-[10px] text-text-light group-hover:text-accent transition-colors">
                {item.index}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <MagneticButton
            variant="primary"
            size="md"
            strength={0.2}
            asChild
          >
            <Link href="#brief">
              <span>Initiate Brief</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden p-2 text-text hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" strokeLinecap="round" />
                <line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-8 shadow-floating"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-xs uppercase tracking-widest text-text-light pb-2 border-b border-border">
                Agency Directory
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-2xl font-bold tracking-tight text-text hover:text-accent transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-text-light">{item.index}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="#brief"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-pill bg-[#0B1020] text-white font-medium text-sm shadow-elevated"
                >
                  Initiate Brief
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}