'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

interface CaseDossier {
  id: string
  numeral: string
  industry: string
  title: string
  headline: string
  minimalCopy: string
  primaryMetric: string
  metricLabel: string
  secondaryMetrics: Array<{ value: string; label: string }>
  workflowSteps: string[]
  mockupType: 'distribution' | 'manufacturing' | 'logistics'
}

const dossiers: CaseDossier[] = [
  {
    id: 'wholesale',
    numeral: '01',
    industry: 'WHOLESALE & B2B DISTRIBUTION',
    title: 'Continental Food Distributors',
    headline: 'Autonomous WhatsApp-to-ERP Order Stream',
    minimalCopy:
      'Eliminated 4-hour daily backlogs by replacing manual WhatsApp copy-pasting with an autonomous neural ingestion pipeline connected directly to Oracle NetSuite.',
    primaryMetric: '< 120s',
    metricLabel: 'Message-to-ERP Latency',
    secondaryMetrics: [
      { value: '0.2%', label: 'Exception Rate (from 8%)' },
      { value: '3 FTEs', label: 'Operators Redeployed' },
      { value: '200+', label: 'Daily Orders Captured' },
    ],
    workflowSteps: ['WhatsApp Audio/Text', 'Cadence VLM Parser', 'NetSuite SalesOrder', 'Customer SMS ACK'],
    mockupType: 'distribution',
  },
  {
    id: 'manufacturing',
    numeral: '02',
    industry: 'ADVANCED INDUSTRIAL MANUFACTURING',
    title: 'Apex Precision Engineering',
    headline: 'Continuous Accounts Payable & Three-Way Reconciliation',
    minimalCopy:
      'Automated thousands of complex multi-line PDF vendor invoices with deterministic three-way matching against warehouse receipts and QuickBooks ledger.',
    primaryMetric: '3 DAYS',
    metricLabel: 'Settlement Cycle (from 14 days)',
    secondaryMetrics: [
      { value: '$0', label: 'Late Penalty Fees' },
      { value: '100%', label: 'Cryptographic Audit Trail' },
      { value: '99.4%', label: 'Header & Line Item Accuracy' },
    ],
    workflowSteps: ['PDF Invoice Ingest', 'Three-Way PO Match', 'ERP Payment Schedule', 'Audit Record'],
    mockupType: 'manufacturing',
  },
  {
    id: 'logistics',
    numeral: '03',
    industry: 'FREIGHT & MARITIME LOGISTICS',
    title: 'Vanguard Transcontinental Logistics',
    headline: 'Driver Telematics Bot & Real-Time Client Tracking',
    minimalCopy:
      'Replaced chaotic driver phone calls and Google Sheets with an automated conversational bot and client portal, scaling fleet volume without growing dispatch headcount.',
    primaryMetric: '75%',
    metricLabel: 'Dispatch Overhead Reduced',
    secondaryMetrics: [
      { value: '+15%', label: 'On-Time Delivery Gain' },
      { value: 'Instant', label: 'Customer Live Link' },
      { value: '24/7', label: 'Automated Exception Alerts' },
    ],
    workflowSteps: ['Driver Check-in Bot', 'Geofence Event Trigger', 'Fleet Dispatch Board', 'Self-Service Tracking'],
    mockupType: 'logistics',
  },
]

export function CaseStudies() {
  const [activeDossierId, setActiveDossierId] = useState('wholesale')

  return (
    <section id="work" className="editorial-section bg-background border-t border-border" aria-labelledby="work-heading">
      <div className="editorial-container">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-border mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="editorial-tag">Case Dossiers</span>
            </div>
            <h2
              id="work-heading"
              className="text-section-xl font-bold tracking-tight text-text text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Magazine Features: Proven Impact.
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-body text-text-muted max-w-[380px] text-balance">
            Real enterprise deployments with verified metrics. We measure value strictly in human hours saved and error rates eliminated.
          </p>
        </div>

        {/* DOSSIER SELECTOR TABS */}
        <div className="flex flex-wrap gap-3 pb-8 border-b border-border/80 mb-16">
          {dossiers.map((dossier) => {
            const isSelected = activeDossierId === dossier.id
            return (
              <button
                key={dossier.id}
                onClick={() => setActiveDossierId(dossier.id)}
                className={`flex items-center gap-3 px-5 py-2.5 rounded-pill font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0B1020] text-white shadow-elevated'
                    : 'bg-surface border border-border text-text-muted hover:text-text hover:border-text/20'
                }`}
              >
                <span className={isSelected ? 'text-accent' : 'text-text-light'}>{dossier.numeral}</span>
                <span className="font-sans font-semibold tracking-tight">{dossier.title}</span>
              </button>
            )
          })}
        </div>

        {/* MAGAZINE SPREADS */}
        {dossiers.map((dossier) => {
          if (dossier.id !== activeDossierId) return null

          return (
            <motion.div
              key={dossier.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Top Magazine Header & Oversized Metric Banner */}
              <div className="p-8 md:p-12 rounded-card bg-surface border border-border shadow-elevated">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-8">
                    <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3">
                      {dossier.industry}
                    </div>
                    <h3 className="text-display-lg font-bold tracking-tight text-text mb-4" style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}>
                      {dossier.headline}
                    </h3>
                    <p className="text-body-xl text-text-muted max-w-2xl leading-relaxed">
                      {dossier.minimalCopy}
                    </p>
                  </div>

                  {/* Giant Hero Metric */}
                  <div className="lg:col-span-4 p-8 rounded-card-sm bg-[#0B1020] text-white text-center lg:text-left flex flex-col justify-center border border-white/10 shadow-floating">
                    <div className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                      Primary Outcome
                    </div>
                    <div className="font-mono text-5xl md:text-6xl font-extrabold text-white tracking-tight my-2">
                      {dossier.primaryMetric}
                    </div>
                    <div className="font-mono text-xs text-white/60">
                      {dossier.metricLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Magazine Feature Split: Dashboard Mockup + Workflow Visualization */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: High-Density Dashboard Mockup */}
                <div className="lg:col-span-8">
                  <div className="p-6 md:p-8 rounded-card bg-surface border border-border shadow-elevated">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-border font-mono text-xs">
                      <span className="font-bold text-text">TELEMETRY_INSPECTOR // {dossier.title.toUpperCase()}</span>
                      <span className="text-accent flex items-center gap-1.5 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        AUDIT VERIFIED
                      </span>
                    </div>

                    {dossier.mockupType === 'distribution' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-4 rounded-card-sm bg-surface-subtle border border-border">
                          <div className="flex items-center justify-between text-text-light mb-2">
                            <span>Inbound Transmission #TX-94812</span>
                            <span className="text-accent">100% Parsed (42ms)</span>
                          </div>
                          <div className="font-sans font-bold text-sm text-text mb-1">
                            WhatsApp Audio Note: "400 crates of organic milk to Queens Depot"
                          </div>
                          <div className="text-[11px] text-text-muted">
                            Entity Match: SKU #MK-ORG-400 • Customer: Metro Grocery Group (#7721)
                          </div>
                        </div>

                        <div className="p-4 rounded-card-sm bg-emerald-50/60 border border-accent/30 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-accent">ERP Status</span>
                            <div className="font-sans font-semibold text-text">NetSuite Sales Order #SO-559281 Committed</div>
                          </div>
                          <span className="font-bold text-accent text-sm">$18,400.00</span>
                        </div>
                      </div>
                    )}

                    {dossier.mockupType === 'manufacturing' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-4 rounded-card-sm bg-surface-subtle border border-border">
                          <div className="flex items-center justify-between text-text-light mb-2">
                            <span>Vendor Invoice #INV-77291.pdf</span>
                            <span className="text-blue-600 font-semibold">OCR Bounding Verified</span>
                          </div>
                          <div className="font-sans font-bold text-sm text-text mb-1">
                            Three-Way Match: PO #8829 vs Inbound Dock Receipt #RC-1029
                          </div>
                          <div className="text-[11px] text-text-muted">
                            Variance: $0.00 (Zero Discrepancy) • Payment Terms: 2/10 Net 30
                          </div>
                        </div>

                        <div className="p-4 rounded-card-sm bg-emerald-50/60 border border-accent/30 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-accent">QuickBooks Batch</span>
                            <div className="font-sans font-semibold text-text">Scheduled for ACH Batch • Early Discount Captured (2%)</div>
                          </div>
                          <span className="font-bold text-accent text-sm">+$840 Saved</span>
                        </div>
                      </div>
                    )}

                    {dossier.mockupType === 'logistics' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-4 rounded-card-sm bg-surface-subtle border border-border">
                          <div className="flex items-center justify-between text-text-light mb-2">
                            <span>Fleet Bot Ping: Driver #DR-44 (Truck #88)</span>
                            <span className="text-accent font-semibold">Geofence Crossed: Port of NY</span>
                          </div>
                          <div className="font-sans font-bold text-sm text-text mb-1">
                            Automated Check-in: "Trailer sealed, gate pass #4491 scanned."
                          </div>
                          <div className="text-[11px] text-text-muted">
                            Live Customer Portal Link sent to 4 consignees automatically.
                          </div>
                        </div>

                        <div className="p-4 rounded-card-sm bg-emerald-50/60 border border-accent/30 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-accent">Dispatch Efficiency</span>
                            <div className="font-sans font-semibold text-text">0 Phone Calls Required • ETA Recalculated (-12m)</div>
                          </div>
                          <span className="font-bold text-accent text-sm">On-Time</span>
                        </div>
                      </div>
                    )}

                    {/* Workflow Visualization Line */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-text-light mb-4">
                        Handcrafted Workflow Topology
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
                        {dossier.workflowSteps.map((step, idx) => (
                          <div key={idx} className="p-3 rounded bg-surface-subtle border border-border text-center">
                            <div className="text-[10px] text-text-light mb-1">{`0${idx + 1}`}</div>
                            <div className="font-semibold text-text truncate">{step}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Secondary Metrics & Consultation Link */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="p-6 rounded-card bg-surface border border-border shadow-elevated">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-light mb-6">
                      Key Verification Metrics
                    </h4>
                    <div className="space-y-6">
                      {dossier.secondaryMetrics.map((sm, i) => (
                        <div key={i} className="pb-4 border-b border-border/80 last:border-b-0 last:pb-0">
                          <div className="font-mono text-2xl font-bold text-text">{sm.value}</div>
                          <div className="font-mono text-xs text-text-muted mt-0.5">{sm.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-card bg-surface-subtle border border-border">
                    <div className="font-mono text-xs font-bold text-text mb-2">Replicate This Architecture</div>
                    <p className="text-xs text-text-muted mb-4 font-normal">
                      We adapt this exact deterministic framework to your existing systems within 14 business days.
                    </p>
                    <Link
                      href="#brief"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-pill bg-[#0B1020] text-white font-mono text-xs font-semibold hover:bg-black transition-colors"
                    >
                      <span>Request Case Architecture</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}