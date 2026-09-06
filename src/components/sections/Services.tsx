'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

export function Services() {
  const [activeTab, setActiveTab] = useState<'all' | 'live'>('live')
  const [mockApproved, setMockApproved] = useState(false)

  return (
    <section id="services" className="editorial-section bg-background overflow-hidden" aria-labelledby="services-heading">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-[-15%] w-[800px] h-[800px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(24, 198, 163, 0.04) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="editorial-container">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-border mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="editorial-tag">Core Capabilities</span>
            </div>
            <h2
              id="services-heading"
              className="text-section-xl font-bold tracking-tight text-text text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Architectural capabilities for zero-friction scale.
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-body text-text-muted max-w-[380px] text-balance">
            Every engagement is custom-architected. We replace legacy human friction with deterministic automated infrastructure.
          </p>
        </div>

        {/* 4 ALTERNATING EDITORIAL SPREADS */}
        <div className="space-y-32 md:space-y-40">

          {/* SPREAD 01: AUTONOMOUS WORKFLOW ENGINES (Text Left, Mockup Right) */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 relative">
              <span className="font-mono text-numeral-giant text-text/5 select-none absolute -top-20 -left-6 -z-10">
                01
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted mb-4">
                <span>01 // ENGINE ARCHITECTURE</span>
              </div>
              <h3 className="text-display-lg font-bold tracking-tight text-text mb-6" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
                Autonomous Workflow Engines
              </h3>
              <p className="text-body-lg text-text-muted font-normal leading-relaxed mb-8">
                We engineer event-driven pipelines that autonomously triage, normalize, validate, and commit mission-critical data across legacy software stacks with zero human intervention.
              </p>

              {/* Minimal specs & metrics */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/80 mb-8 font-mono text-xs">
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Execution Speed</div>
                  <div className="text-base font-bold text-text">&lt; 180ms Latency</div>
                </div>
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Throughput Capacity</div>
                  <div className="text-base font-bold text-accent">50,000+ ops/day</div>
                </div>
              </div>

              <Link
                href="#brief"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors group"
              >
                <span>Request Engine Specifications</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Mockup: Product-style Workflow Engine Visualizer */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-card bg-surface border border-border shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border text-xs font-mono">
                  <div className="flex items-center gap-2 text-text">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-bold">CADENCE_RUNTIME_CORE</span>
                    <span className="text-text-light">// active pipeline</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-accent font-semibold">
                    100% HEALTHY
                  </span>
                </div>

                {/* Workflow Illustration Diagram */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1020] text-white flex items-center justify-center font-mono text-xs font-bold">
                        IN
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-text">Inbound Webhook Trigger</div>
                        <div className="text-[11px] font-mono text-text-light">POST /api/v2/orders • Raw JSON / EDI</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-accent">0.02ms</span>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-6 bg-accent/40 relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-card-sm bg-accent-soft/40 border border-accent/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent text-[#0B1020] flex items-center justify-center font-mono text-xs font-bold">
                        AI
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-text">Deterministic Neural Validator</div>
                        <div className="text-[11px] font-mono text-text-muted">Entity extraction & SKU reconciliation</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-accent">99.9% CONF</span>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-6 bg-accent/40" />
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1020] text-white flex items-center justify-center font-mono text-xs font-bold">
                        OUT
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-text">Transactional ERP Commit</div>
                        <div className="text-[11px] font-mono text-text-light">NetSuite SalesOrder created & signed</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-blue-600 font-semibold">STATUS: 201</span>
                  </div>
                </div>

                {/* Sub-panel terminal snippet */}
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>Batch #9084: 1,420 records processed</span>
                  <span className="text-accent font-semibold">0 Exceptions</span>
                </div>
              </div>
            </div>
          </div>


          {/* SPREAD 02: CONVERSATIONAL COMMERCE & WHATSAPP (Mockup Left, Text Right) */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Mockup: WhatsApp Business API Conversational Terminal */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="p-6 md:p-8 rounded-card bg-surface border border-border shadow-elevated relative overflow-hidden">
                {/* Header of Chat Mockup */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text">Cadence WhatsApp Commercial Agent</div>
                      <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Meta Verified Enterprise API
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-pill bg-surface-subtle border border-border text-text-muted">
                    Session #8839-B
                  </span>
                </div>

                {/* Chat Stream Messages */}
                <div className="space-y-4 text-xs">
                  {/* Customer Inbound */}
                  <div className="flex flex-col items-start max-w-[85%]">
                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-surface-subtle border border-border text-text">
                      <p className="font-medium">
                        "Hey team, need 400 cases of 500ml glass flasks delivered to Warehouse B by Thursday morning. Account #US-7712."
                      </p>
                      <span className="text-[10px] font-mono text-text-light mt-1 block">10:41 AM • Inbound Voice & Text</span>
                    </div>
                  </div>

                  {/* AI Parsing Chip Overlay */}
                  <div className="p-3 rounded-card-sm bg-accent-soft border border-accent/30 text-text font-mono text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-accent font-bold">
                      <span>✓ INGESTION VERIFIED</span>
                      <span>124ms</span>
                    </div>
                    <div className="text-text-muted">
                      SKU: GL-500-FLK (Qty: 400) • Destination: WH-B • Credit Status: APPROVED
                    </div>
                  </div>

                  {/* Automated Agent Outbound Response */}
                  <div className="flex flex-col items-end ml-auto max-w-[85%]">
                    <div className="p-3.5 rounded-2xl rounded-tr-sm bg-[#0B1020] text-white">
                      <p className="font-normal">
                        "Order confirmed, Dave. SO #99412 generated. Stock allocated at Newark depot. Scheduled delivery: Thursday, 09:00 AM."
                      </p>
                      <span className="text-[10px] font-mono text-white/50 mt-1 block text-right">
                        10:41 AM • Cadence Automated Agent
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live ERP sync status bar */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between font-mono text-[11px]">
                  <span className="text-text-light">ERP Write: NetSuite API (200 OK)</span>
                  <span className="text-accent font-semibold">Zero Manual Touch</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <span className="font-mono text-numeral-giant text-text/5 select-none absolute -top-20 -left-6 -z-10">
                02
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted mb-4">
                <span>02 // CONVERSATIONAL COMMERCE</span>
              </div>
              <h3 className="text-display-lg font-bold tracking-tight text-text mb-6" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
                Omnichannel WhatsApp & Conversational AI
              </h3>
              <p className="text-body-lg text-text-muted font-normal leading-relaxed mb-8">
                Turn unstructured chat and voice messages into structured transactions. We deploy proprietary WhatsApp Business API pipelines that capture orders, answer inventory questions, and bind directly to your backend.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/80 mb-8 font-mono text-xs">
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Availability</div>
                  <div className="text-base font-bold text-text">24/7 / 365 Unattended</div>
                </div>
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Order Intake Rate</div>
                  <div className="text-base font-bold text-accent">100% Captured</div>
                </div>
              </div>

              <Link
                href="#brief"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors group"
              >
                <span>Examine WhatsApp Architecture</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>


          {/* SPREAD 03: BESPOKE INTERNAL TELEMETRY & COMMAND CENTERS (Text Left, Mockup Right) */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 relative">
              <span className="font-mono text-numeral-giant text-text/5 select-none absolute -top-20 -left-6 -z-10">
                03
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted mb-4">
                <span>03 // OPERATIONAL COCKPITS</span>
              </div>
              <h3 className="text-display-lg font-bold tracking-tight text-text mb-6" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
                Mission Control & Internal Tooling
              </h3>
              <p className="text-body-lg text-text-muted font-normal leading-relaxed mb-8">
                Eliminate spreadsheet drift and messy email approvals. We construct bespoke, high-density operations dashboards, exception queues, and rapid approval interfaces configured precisely to your team's SOPs.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/80 mb-8 font-mono text-xs">
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Audit Traceability</div>
                  <div className="text-base font-bold text-text">100% Cryptographic</div>
                </div>
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Approval Speed</div>
                  <div className="text-base font-bold text-accent">1-Click Dispatch</div>
                </div>
              </div>

              <Link
                href="#brief"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors group"
              >
                <span>Inspect Tooling Framework</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Mockup: Mission Control Dashboard Interface */}
            <div className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-card bg-surface border border-border shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-text">OPERATIONS_COMMAND // DISPATCH</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-600">LIVE FEED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('live')}
                      className={`font-mono text-[11px] px-3 py-1 rounded-pill transition-colors ${
                        activeTab === 'live' ? 'bg-[#0B1020] text-white' : 'text-text-muted'
                      }`}
                    >
                      Real-Time
                    </button>
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`font-mono text-[11px] px-3 py-1 rounded-pill transition-colors ${
                        activeTab === 'all' ? 'bg-[#0B1020] text-white' : 'text-text-muted'
                      }`}
                    >
                      Audit
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-card-sm bg-surface-subtle border border-border">
                    <div className="text-[10px] font-mono text-text-light uppercase">In Flight</div>
                    <div className="text-xl font-bold font-mono text-text mt-1">128 Shipments</div>
                  </div>
                  <div className="p-3.5 rounded-card-sm bg-surface-subtle border border-border">
                    <div className="text-[10px] font-mono text-text-light uppercase">Auto-Reconciled</div>
                    <div className="text-xl font-bold font-mono text-accent mt-1">98.4%</div>
                  </div>
                  <div className="p-3.5 rounded-card-sm bg-surface-subtle border border-border">
                    <div className="text-[10px] font-mono text-text-light uppercase">Pending Approval</div>
                    <div className="text-xl font-bold font-mono text-text mt-1">{mockApproved ? '0' : '1'}</div>
                  </div>
                </div>

                {/* Interactive Action Card */}
                <div className="p-4 rounded-card-sm bg-surface border border-border/80 shadow-subtle mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="font-mono text-xs font-bold text-text">HIGH-VALUE EXCEPTION #EX-304</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-text">$84,200.00</span>
                  </div>
                  <p className="text-xs text-text-muted mb-4 font-mono">
                    Vendor: Precision Forgings Ltd • Auto-matched 3-way match: PO #771 vs Inbound Freight Bol
                  </p>
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => setMockApproved(!mockApproved)}
                      className={`px-4 py-2 rounded-btn font-mono text-xs font-semibold transition-all ${
                        mockApproved
                          ? 'bg-emerald-50 text-accent border border-accent/40'
                          : 'bg-[#0B1020] text-white hover:bg-black'
                      }`}
                    >
                      {mockApproved ? '✓ EXCEPTION CLEARED & SYNCED' : 'Authorize Release (1-Click)'}
                    </button>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-text-light flex items-center justify-between pt-2">
                  <span>Authorized by: Operator Admin • 2-Factor Enforced</span>
                  <span>Encryption: AES-256 GCM</span>
                </div>
              </div>
            </div>
          </div>


          {/* SPREAD 04: ENTERPRISE DATA MESH & ERP INTEGRATION (Mockup Left, Text Right) */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Mockup: Distributed Data Mesh Visualizer */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="p-6 md:p-8 rounded-card bg-surface border border-border shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="font-mono text-xs font-bold text-text">DISTRIBUTED_MESH_TOPOLOGY</div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-soft text-accent font-semibold">
                    BI-DIRECTIONAL SYNC
                  </span>
                </div>

                {/* Mesh Visualizer with Connected System Nodes */}
                <div className="grid grid-cols-2 gap-4 my-2">
                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-text">Oracle NetSuite</span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">GL Ledger & Inventory</div>
                    <div className="text-[10px] font-mono text-accent">Synced 2s ago (Delta: 0)</div>
                  </div>

                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-text">Salesforce CRM</span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">Accounts & Opportunities</div>
                    <div className="text-[10px] font-mono text-accent">Webhook Stream Active</div>
                  </div>

                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-text">QuickBooks Online</span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">Payables & Invoicing</div>
                    <div className="text-[10px] font-mono text-accent">Continuous Reconciliation</div>
                  </div>

                  <div className="p-4 rounded-card-sm bg-surface-subtle border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-text">Warehouse WMS / SAP</span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">Bin Telematics & Pick Lists</div>
                    <div className="text-[10px] font-mono text-accent">Sub-second ACK</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between font-mono text-[11px]">
                  <span className="text-text-muted">Schema Version: GraphQL Federated v2.4</span>
                  <span className="text-text font-bold">100% Data Parity</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <span className="font-mono text-numeral-giant text-text/5 select-none absolute -top-20 -left-6 -z-10">
                04
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface border border-border text-[11px] font-mono tracking-wider text-text-muted mb-4">
                <span>04 // DATA MESH UNIFICATION</span>
              </div>
              <h3 className="text-display-lg font-bold tracking-tight text-text mb-6" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
                Enterprise ERP, CRM & Accounting Data Mesh
              </h3>
              <p className="text-body-lg text-text-muted font-normal leading-relaxed mb-8">
                Connect disconnected enterprise platforms into a unified, self-healing nervous system. We architect bidirectional integrations with intelligent conflict resolution, ensuring your finance, sales, and supply chain live in true parity.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/80 mb-8 font-mono text-xs">
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Sync Architecture</div>
                  <div className="text-base font-bold text-text">Bidirectional Live</div>
                </div>
                <div>
                  <div className="text-text-light uppercase tracking-wider mb-1">Schema Drift Guard</div>
                  <div className="text-base font-bold text-accent">Zero Data Loss</div>
                </div>
              </div>

              <Link
                href="#brief"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors group"
              >
                <span>Consult On ERP Integration</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}