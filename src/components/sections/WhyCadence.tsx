'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const tenets = [
  {
    numeral: '01',
    headline: 'Zero throwaway demos. Only production-grade plumbing.',
    body: 'We do not build toy prototypes or proof-of-concepts that stall in boardrooms. Every script, agent, and schema pipeline we construct is designed to withstand enterprise volume and run deterministically on day one.',
    accent: 'PRODUCTION DISCIPLINE',
  },
  {
    numeral: '02',
    headline: 'Deterministic reliability over hallucinatory magic.',
    body: 'Generative AI without boundaries is an operational liability. We combine modern language models with strict schema validators, programmatic fallbacks, and human escalation gates to ensure 99.8%+ accuracy.',
    accent: 'MATHEMATICAL CERTAINTY',
  },
  {
    numeral: '03',
    headline: 'In-the-trenches operator shadowing, not remote speculation.',
    body: 'True operational friction is messy and hidden in spreadsheets, private WhatsApp groups, and dock receipts. We embed directly with your operators to diagnose real friction before writing a single line of architecture.',
    accent: 'GROUND-TRUTH DISCOVERY',
  },
]

export function WhyCadence() {
  return (
    <section id="manifesto" className="editorial-section bg-background border-t border-border overflow-hidden" aria-labelledby="manifesto-heading">
      {/* Background soft blue ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-[-10%] w-[700px] h-[700px] rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.09) 0%, rgba(24, 198, 163, 0.05) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="editorial-container">
        {/* Broken Grid Section Top */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-border mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="editorial-tag">The Cadence Manifesto</span>
            </div>
            <h2
              id="manifesto-heading"
              className="text-display-lg font-bold tracking-tight text-text leading-[0.98] text-balance"
              style={{ fontSize: 'clamp(40px, 5.2vw, 76px)' }}
            >
              "Most enterprise AI fails because it tries to think instead of execute."
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-body-lg text-text-muted leading-relaxed text-balance">
              Cadence was founded on a simple architectural conviction: businesses do not need more chat windows. They need autonomous nervous systems that move data with zero human lag.
            </p>
          </div>
        </div>

        {/* Broken Asymmetrical Editorial Tenet Columns */}
        <div className="space-y-16 lg:space-y-24">
          {tenets.map((tenet, idx) => {
            const isEven = idx % 2 === 1

            return (
              <div
                key={tenet.numeral}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                  isEven ? 'lg:pl-20' : 'lg:pr-20'
                }`}
              >
                {/* Numeral and Badge Column */}
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-5xl lg:text-6xl font-extrabold text-text/20 tracking-tighter">
                      {tenet.numeral}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-accent font-bold">
                      {tenet.accent}
                    </span>
                  </div>
                </div>

                {/* Headline Column */}
                <div className="lg:col-span-5">
                  <h3 className="text-card-title font-bold tracking-tight text-text leading-snug">
                    {tenet.headline}
                  </h3>
                </div>

                {/* Description Column */}
                <div className="lg:col-span-4">
                  <p className="text-body text-text-muted leading-relaxed">
                    {tenet.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pull Quote Box */}
        <div className="mt-28 p-8 md:p-14 rounded-card bg-[#0B1020] text-white border border-white/10 relative overflow-hidden shadow-floating">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4 block">
              Architectural Standard // 2024–2025
            </span>
            <p className="text-display-lg font-medium tracking-tight text-white/95 leading-snug mb-8" style={{ fontSize: 'clamp(24px, 3.2vw, 42px)' }}>
              "We take operations that take four hours of manual keyboard entry and turn them into 120-second background events. That is the only benchmark that matters."
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/15">
              <div className="w-10 h-10 rounded-full bg-accent text-[#0B1020] flex items-center justify-center font-bold text-sm">
                CD
              </div>
              <div>
                <div className="font-sans font-bold text-sm text-white">Cadence Systems Council</div>
                <div className="font-mono text-xs text-white/60">New York • San Francisco</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}