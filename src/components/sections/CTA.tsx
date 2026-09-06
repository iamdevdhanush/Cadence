'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { MagneticButton } from '@/components/motion/MagneticButton'

const operationalScopes = [
  'WhatsApp & Order Ingest',
  'Accounts Payable & Invoices',
  'ERP / NetSuite Data Mesh',
  'Logistics & Dispatch Bot',
  'Internal Operations Cockpit',
  'Enterprise Custom Architecture',
]

export function CTA() {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([operationalScopes[0]])
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      setSelectedScopes(selectedScopes.filter((s) => s !== scope))
    } else {
      setSelectedScopes([...selectedScopes, scope])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="brief" className="editorial-section bg-background border-t border-border overflow-hidden" aria-labelledby="cta-heading">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, rgba(24, 198, 163, 0.06) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>DISCOVERY PROTOCOL // CLIENT ADMISSIONS</span>
            </div>

            <h2
              id="cta-heading"
              className="text-hero font-bold tracking-tight text-text leading-[0.96] text-balance mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}
            >
              Initiate your architecture brief.
            </h2>

            <p className="text-body-xl text-text-muted max-w-2xl mx-auto leading-relaxed text-balance">
              We accept a limited number of enterprise pilots each quarter to ensure direct partner involvement. Select your bottlenecks to begin.
            </p>
          </div>

          {/* Interactive Intake Module */}
          <div className="p-8 md:p-12 rounded-card bg-surface border border-border shadow-floating">
            <div className="font-mono text-xs uppercase tracking-widest text-text-light mb-4">
              Step 01: Select High-Friction Workflows
            </div>

            {/* Scope Pill Selectors */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {operationalScopes.map((scope) => {
                const isSelected = selectedScopes.includes(scope)
                return (
                  <button
                    key={scope}
                    type="button"
                    onClick={() => toggleScope(scope)}
                    className={`px-4 py-2.5 rounded-pill font-mono text-xs transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#0B1020] text-white shadow-subtle'
                        : 'bg-surface-subtle border border-border text-text-muted hover:border-text/30 hover:text-text'
                    }`}
                  >
                    <span className="mr-1.5">{isSelected ? '✓' : '+'}</span>
                    {scope}
                  </button>
                )
              })}
            </div>

            {/* Step 02: Direct Submission */}
            <div className="font-mono text-xs uppercase tracking-widest text-text-light mb-4">
              Step 02: Principal Architect Dispatch
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-card-sm bg-emerald-50 border border-accent/30 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-[#0B1020] flex items-center justify-center font-bold text-base mx-auto mb-3">
                  ✓
                </div>
                <h3 className="font-sans font-bold text-lg text-text mb-1">Brief Transmitted to Architecture Council</h3>
                <p className="font-mono text-xs text-text-muted">
                  A principal systems engineer will contact you at <strong className="text-text">{email}</strong> within 12 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-8">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="corporate.email@company.com"
                      className="w-full px-5 py-4 rounded-btn font-mono text-sm bg-surface-subtle border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all text-text placeholder:text-text-light"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <button
                      type="submit"
                      className="w-full h-full py-4 px-6 rounded-btn bg-[#0B1020] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-black transition-colors shadow-elevated"
                    >
                      Transmit Brief →
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-text-light pt-2">
                  <span>Direct Channel: partners@cadence.ai</span>
                  <span>NDA & Security Protocols Honored</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}