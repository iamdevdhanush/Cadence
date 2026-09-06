'use client'

import { useState, useEffect } from 'react'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const comparisons = [
  {
    category: 'Order Processing',
    before: ['Manual WhatsApp → spreadsheet entry', 'Copy-paste errors daily', 'Orders missed after hours', 'No tracking or visibility'],
    after: ['Automated order capture from WhatsApp', 'Structured data synced to CRM', '24/7 intake with confirmations', 'Real-time dashboard for ops team'],
  },
  {
    category: 'Invoice Handling',
    before: ['PDFs downloaded manually', 'Data entry into accounting', 'Missed payment deadlines', 'Reconciliation takes days'],
    after: ['Auto-extract from email/Drive', 'Push to QuickBooks/NetSuite', 'Automated payment scheduling', 'Reconciliation in hours'],
  },
  {
    category: 'Internal Approvals',
    before: ['Slack/email chains for approval', 'No audit trail', 'Bottlenecks on key people', 'Slow turnaround'],
    after: ['Structured approval workflows', 'Full audit trail & timestamps', 'Parallel routing & escalation', 'Decisions in minutes, not days'],
  },
  {
    category: 'Reporting & Ops',
    before: ['Manual Excel reports weekly', 'Stale data by the time seen', 'Inconsistent metrics', 'Reactive firefighting'],
    after: ['Automated daily dashboards', 'Real-time KPI visibility', 'Standardized metrics', 'Proactive bottleneck detection'],
  },
]

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % comparisons.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="before-after" className="section" aria-labelledby="beforeafter-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-[48px]">
          <SectionHeading
            eyebrow="Before vs After"
            title="What changes when you automate"
            description="Real transformations from our client work. No cherry-picked metrics—just the operational reality before and after."
            align="center"
          />
        </div>

        <div className="relative">
          <div
            className={cn(
              'grid lg:grid-cols-2 gap-[24px] lg:gap-[32px] items-start',
              isAnimating && 'opacity-50 pointer-events-none'
            )}
            style={{ transition: 'opacity 0.3s ease' }}
            role="region"
            aria-live="polite"
            aria-label="Before and after comparison"
          >
            <div className="relative">
              <div className="rounded-card border border-red-border bg-red-soft p-6" aria-hidden="true" />
              <div className="relative p-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-pill text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                  BEFORE
                </div>
                <h3 className="text-2xl font-semibold text-text mb-6">{comparisons[activeIndex].category}</h3>
                <ul className="space-y-4" role="list">
                  {comparisons[activeIndex].before.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-body text-text-muted">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-card border border-accent/20 bg-accent-soft p-6" aria-hidden="true" />
              <div className="relative p-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft text-accent rounded-pill text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                  AFTER
                </div>
                <h3 className="text-2xl font-semibold text-text mb-6">{comparisons[activeIndex].category}</h3>
                <ul className="space-y-4" role="list">
                  {comparisons[activeIndex].after.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-body text-text">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3" role="tablist" aria-label="Comparison categories">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setActiveIndex(index)
                    setIsAnimating(false)
                  }, 300)
                }}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-medium',
                  index === activeIndex
                    ? 'bg-accent w-10'
                    : 'bg-text-light hover:bg-text-muted'
                )}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`${comparisons[index].category} comparison`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}