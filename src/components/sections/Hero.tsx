'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { HeroWorkflow3D } from '@/components/motion/HeroWorkflow3D'

export function Hero() {
  const headlineWords = ['We', 'engineer', 'the', 'autonomous', 'enterprise.']

  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-background"
      aria-labelledby="hero-title"
    >
      {/* Background light originating from top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[900px] h-[900px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.14) 0%, rgba(24, 198, 163, 0.09) 35%, rgba(252, 252, 253, 0) 70%)',
        }}
      />

      {/* Subtle secondary ambient glow at bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(24, 198, 163, 0.04) 40%, transparent 70%)',
        }}
      />

      <div className="editorial-container relative z-10 w-full">
        {/* Editorial Eyebrow & Studio Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/80 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-text font-medium">
              Cadence // Creative AI Systems Agency
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] text-text-light uppercase tracking-wider">
            <span>Spec: AI Systems & Automations</span>
            <span className="text-border-strong">•</span>
            <span>Index 2024</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Massive Oversized Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              id="hero-title"
              className="font-bold text-text tracking-[-0.04em] leading-[0.93] text-balance mb-8"
              style={{ fontSize: 'clamp(48px, 6.2vw, 92px)' }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block mr-[0.24em] ${
                    word === 'autonomous'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-text via-text to-accent'
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-body-xl text-text-muted font-normal max-w-[620px] leading-relaxed mb-10 text-balance"
            >
              We design, build, and deploy bespoke AI engines that replace manual operational friction with deterministic speed. Built for wholesale, logistics, and high-volume operations.
            </motion.p>

            {/* Actions & Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-5 w-full sm:w-auto"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                strength={0.25}
                asChild
              >
                <Link href="#brief" className="group">
                  <span>Initiate Discovery Brief</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="lg"
                strength={0.2}
                asChild
              >
                <Link href="#work">
                  <span>Inspect Dossiers</span>
                  <span className="font-mono text-xs text-text-light ml-1">(03)</span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Studio Guarantee Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-14 pt-8 border-t border-border/80 grid grid-cols-3 gap-6 text-left w-full max-w-[560px]"
            >
              <div>
                <div className="font-mono text-base font-bold text-text">14 DAYS</div>
                <div className="font-mono text-[11px] text-text-light uppercase tracking-wider mt-0.5">
                  Production Pilot
                </div>
              </div>
              <div>
                <div className="font-mono text-base font-bold text-accent">99.8%</div>
                <div className="font-mono text-[11px] text-text-light uppercase tracking-wider mt-0.5">
                  Extraction Precision
                </div>
              </div>
              <div>
                <div className="font-mono text-base font-bold text-text">ZERO RISK</div>
                <div className="font-mono text-[11px] text-text-light uppercase tracking-wider mt-0.5">
                  SLA Architecture
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Handcrafted 3D Workflow Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <HeroWorkflow3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}