'use client'

import { motion } from 'motion/react'

const integrations = [
  { name: 'Oracle NetSuite', spec: 'ERP & Inventory Sync', category: 'Enterprise Ledger' },
  { name: 'WhatsApp Business API', spec: 'Meta Tier-1 Pipeline', category: 'Conversational' },
  { name: 'Salesforce CRM', spec: 'Bidirectional Stream', category: 'Customer Record' },
  { name: 'QuickBooks Online', spec: 'AP / AR Auto-Reconciliation', category: 'Financials' },
  { name: 'OpenAI / GPT-4o', spec: 'Deterministic Extraction', category: 'Intelligence' },
  { name: 'Anthropic Claude 3.5', spec: 'Complex Doc Reasoning', category: 'VLM & Logic' },
  { name: 'PostgreSQL & Redis', spec: 'Zero-Latency State Store', category: 'Infrastructure' },
]

export function TrustBar() {
  return (
    <section className="py-16 border-y border-border bg-surface/50 overflow-hidden" aria-labelledby="ecosystem-heading">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-border/80 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span id="ecosystem-heading" className="font-mono text-xs uppercase tracking-widest text-text font-bold">
              Engineering Integrations & Enterprise Standards
            </span>
          </div>
          <div className="font-mono text-[11px] text-text-light uppercase tracking-wider">
            Deterministic Connectors • 99.99% Up-time SLA
          </div>
        </div>

        {/* Editorial Technology Node Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-4 rounded-card-sm bg-surface border border-border hover:border-accent/40 transition-colors shadow-subtle group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-light group-hover:text-accent transition-colors">
                  {item.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </div>
              <div className="font-sans font-bold text-sm text-text mb-0.5">{item.name}</div>
              <div className="font-mono text-[11px] text-text-muted">{item.spec}</div>
            </motion.div>
          ))}
          <div className="p-4 rounded-card-sm bg-accent-soft/30 border border-accent/20 flex flex-col justify-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-bold mb-1">
              Custom Connectors
            </div>
            <div className="font-sans font-semibold text-xs text-text">
              Proprietary internal APIs & legacy databases supported
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}