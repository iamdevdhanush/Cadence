'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const queries = [
  {
    numeral: '01',
    question: 'How does Cadence integrate with legacy ERPs and non-API systems?',
    answer:
      'We do not force rip-and-replace migrations. If your platform exposes an API, we build direct webhooks and event listeners. If your system is legacy on-prem (e.g., AS400, older SAP, or custom SQL databases), we build secure tunnel adapters and headless bridge services with cryptographic audit trails.',
  },
  {
    numeral: '02',
    question: 'What is the production deployment timeline for a custom AI pipeline?',
    answer:
      'A production pilot typically runs within 14 to 21 calendar days. This includes real-world shadow auditing, schema design, dual-run testing against live production traffic, and safe phased rollout with zero downtime.',
  },
  {
    numeral: '03',
    question: 'How do you prevent hallucination in business-critical financial workflows?',
    answer:
      'We never deploy unconstrained probabilistic models into transactional paths. We architect deterministic state machines where AI is strictly used for extraction and vector mapping, bounded by mathematical assertions, schema enforcement (Zod/TypeScript), and automated fallback loops.',
  },
  {
    numeral: '04',
    question: 'What are the technical prerequisites for Meta WhatsApp Business API integration?',
    answer:
      'Cadence manages the end-to-end Meta Business verification, official phone number provisioning, HSM message template approvals, and webhook routing. We hand you a turnkey conversational gateway configured directly to your CRM and ERP.',
  },
  {
    numeral: '05',
    question: 'What does post-deployment governance and SLA entail?',
    answer:
      'All enterprise deployments include a dedicated engineering SLA with continuous drift monitoring, automated token efficiency audits, upstream API deprecation fixes, and monthly executive reviews of operational hours reclaimed.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="advisory" className="editorial-section bg-background border-t border-border" aria-labelledby="faq-heading">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 pb-12 border-b border-border mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="editorial-tag">Technical Advisory</span>
            </div>
            <h2
              id="faq-heading"
              className="text-section-xl font-bold tracking-tight text-text text-balance"
              style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}
            >
              Architectural & Engagement Inquiries.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-text-muted">
              Direct technical answers to the most common questions raised by CTOs, VPs of Operations, and Managing Directors prior to initiating a discovery brief.
            </p>
          </div>
        </div>

        {/* Minimalist Editorial Q&A List (Hairline rules, zero cards) */}
        <div className="divide-y divide-border/80 border-y border-border/80">
          {queries.map((q, idx) => {
            const isOpen = openIndex === idx

            return (
              <div key={q.numeral} className="py-8 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base font-bold text-accent">
                      {q.numeral}
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-text group-hover:text-accent transition-colors">
                      {q.question}
                    </h3>
                  </div>

                  <div className="font-mono text-xl text-text-light group-hover:text-text transition-transform duration-200">
                    {isOpen ? '—' : '+'}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-12 sm:pl-16 pr-8 max-w-3xl">
                        <p className="text-body-lg text-text-muted font-normal leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}