'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Footer() {
  const [timeNY, setTimeNY] = useState('')
  const [timeSF, setTimeSF] = useState('')
  const [timeLDN, setTimeLDN] = useState('')

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date()
      setTimeNY(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
      setTimeSF(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
      setTimeLDN(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/London',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }

    updateClocks()
    const interval = setInterval(updateClocks, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-[#0B1020] text-white pt-24 pb-16 overflow-hidden relative border-t border-white/10" role="contentinfo">
      {/* Ambient lighting inside footer */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(24, 198, 163, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10">
        {/* Massive Editorial Statement */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Studio Colophon // Autonomous Infrastructure</span>
          </div>

          <h2
            className="font-bold tracking-[-0.04em] text-white/95 leading-[0.92] text-balance"
            style={{ fontSize: 'clamp(44px, 7vw, 108px)' }}
          >
            Let&apos;s build the autonomous enterprise.
          </h2>
        </div>

        {/* Studio Timezones & Locations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/10 mb-16 font-mono text-xs">
          <div>
            <div className="text-white/40 uppercase tracking-wider mb-1">New York // Headquarters</div>
            <div className="text-lg font-bold text-white font-mono">{timeNY || '12:00:00'} EST</div>
            <div className="text-white/60 text-[11px] mt-1">450 Lexington Ave, Manhattan</div>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-wider mb-1">San Francisco // Lab</div>
            <div className="text-lg font-bold text-white font-mono">{timeSF || '09:00:00'} PST</div>
            <div className="text-white/60 text-[11px] mt-1">555 Mission St, SOMA</div>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-wider mb-1">London // European Desk</div>
            <div className="text-lg font-bold text-white font-mono">{timeLDN || '17:00:00'} GMT</div>
            <div className="text-white/60 text-[11px] mt-1">100 Bishopsgate, City</div>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-wider mb-1">Direct Inquiries</div>
            <div className="text-lg font-bold text-accent font-mono">partners@cadence.ai</div>
            <div className="text-white/60 text-[11px] mt-1">SLA Guarantee // 12h Reply</div>
          </div>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-4">
          <div className="flex flex-wrap items-center gap-8 font-mono text-xs">
            <Link href="#services" className="text-white/70 hover:text-accent transition-colors">
              01 // Capabilities
            </Link>
            <Link href="#process" className="text-white/70 hover:text-accent transition-colors">
              02 // Methodology
            </Link>
            <Link href="#work" className="text-white/70 hover:text-accent transition-colors">
              03 // Dossiers
            </Link>
            <Link href="#manifesto" className="text-white/70 hover:text-accent transition-colors">
              04 // Manifesto
            </Link>
            <Link href="#brief" className="text-accent hover:underline">
              05 // Initiate Brief
            </Link>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-white/40">
            <span>© {new Date().getFullYear()} Cadence Systems Inc.</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}