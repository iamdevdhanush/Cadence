'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface Phase {
  number: string
  label: string
  title: string
  duration: string
  deliverable: string
  synopsis: string
  bullets: string[]
  codeSnippet: string
}

const phases: Phase[] = [
  {
    number: '01',
    label: 'DISCOVERY',
    title: 'Operator Shadowing & Friction Audit',
    duration: 'Week 1',
    deliverable: 'Bottleneck Topology & ROI Ledger',
    synopsis:
      'We do not accept assumptions. Our engineers embed alongside your operators, observe manual handoffs, log every spreadsheet and WhatsApp transfer, and identify the highest-leverage automation targets.',
    bullets: [
      'Time-and-motion studies across all operator shifts',
      'API, database, and webhook audit across current stack',
      'Definitive ROI and latency prioritization matrix',
    ],
    codeSnippet: `// Phase 01: Friction Audit Result
const auditMetrics = {
  manualHoursWeekly: 142,
  errorRatePreAutomation: "7.8%",
  primaryBottleneck: "WhatsApp-to-NetSuite PO Entry",
  estimatedAnnualSavings: "$184,000"
};`,
  },
  {
    number: '02',
    label: 'ARCHITECTURE',
    title: 'Deterministic Logic & Schema Blueprint',
    duration: 'Week 2',
    deliverable: 'System Architecture Specification (SAS)',
    synopsis:
      'Before writing production code, we architect the deterministic pipeline: schema schemas, LLM prompt guardrails, fallback cascades, and human-in-the-loop escalation criteria.',
    bullets: [
      'Bidirectional schema mapping and data models',
      'Edge-case contingency and retry topology',
      'Role-based permissions & audit compliance review',
    ],
    codeSnippet: `// Phase 02: Verification Guardrail
export const OrderIngestSchema = z.object({
  customerId: z.string().uuid(),
  skus: z.array(SkuValidationRule).min(1),
  creditVerified: z.boolean(),
  slaTimeoutMs: z.literal(180)
});`,
  },
  {
    number: '03',
    label: 'ENGINEERING',
    title: 'Production Build & Parallel Sandbox',
    duration: 'Weeks 3–4',
    deliverable: 'Live Production Engine & Test Suite',
    synopsis:
      'We build the solution inside your environment. We test the new automation against live mirrored production data to guarantee 100% data parity and zero regression.',
    bullets: [
      'Bespoke runtime connectors & custom webhooks',
      'Dual-run validation comparing human vs AI outputs',
      'Automated error boundary alerting via Slack / PagerDuty',
    ],
    codeSnippet: `// Phase 03: Parallel Testing Engine
async function verifyParallelRun(order: Order) {
  const [humanResult, engineResult] = await Promise.all([
    fetchHumanProcessedQueue(order.id),
    CadenceEngine.execute(order)
  ]);
  assertParity(humanResult, engineResult); // 99.8% match
}`,
  },
  {
    number: '04',
    label: 'DEPLOYMENT',
    title: 'Zero-Downtime Phased Cutover',
    duration: 'Week 5',
    deliverable: 'Turnkey Handover & Runbook Library',
    synopsis:
      'We roll out traffic incrementally. Operators transition from manual data entry to supervisory exception review. Full user training and zero operational interruption.',
    bullets: [
      'Gradual 10% → 50% → 100% traffic migration',
      'Live team training and operator console runbooks',
      'Instant rollback safeguards and continuous logging',
    ],
    codeSnippet: `// Phase 04: Production Switch
const deploymentConfig = {
  activeTraffic: "100%",
  operatorMode: "SUPERVISORY_EXCEPTION_ONLY",
  autoReconcile: true,
  healthStatus: "HEALTHY_OPTIMAL"
};`,
  },
  {
    number: '05',
    label: 'OPTIMIZATION',
    title: 'Autonomous Drift Guard & Evolution',
    duration: 'Ongoing SLA',
    deliverable: 'Continuous System Expansion & Monitoring',
    synopsis:
      'Enterprise software evolves. We maintain your AI systems with monthly evaluations, latency optimizations, and continuous expansion into adjacent workflows.',
    bullets: [
      'Continuous prompt drift & token efficiency tuning',
      'New vendor and upstream API adapter updates',
      'Dedicated engineering escalation channel (Slack/Teams)',
    ],
    codeSnippet: `// Phase 05: Continuous Drift Guard
monitoringService.on("anomaly_detected", async (event) => {
  await CadenceSLA.autoRemediate(event);
  logToExecutiveLedger(event);
});`,
  },
]

export function Process() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0)
  const currentPhase = phases[activePhaseIndex]

  return (
    <section id="process" className="editorial-section bg-background border-t border-border" aria-labelledby="process-heading">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-border mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="editorial-tag">Methodology</span>
            </div>
            <h2
              id="process-heading"
              className="text-section-xl font-bold tracking-tight text-text text-balance"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Sticky Storytelling: How We Deploy.
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-body text-text-muted max-w-[380px] text-balance">
            A battle-tested 5-phase engineering protocol engineered to eliminate downtime and ensure absolute client buy-in.
          </p>
        </div>

        {/* STICKY STORYTELLING EXPERIENCE */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* PINNED TIMELINE COLUMN (Giant Numbers & Progress Track) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-text-light mb-6 flex items-center justify-between">
                <span>Phase Navigation</span>
                <span>{`0${activePhaseIndex + 1}`} / 05</span>
              </div>

              {phases.map((phase, index) => {
                const isActive = index === activePhaseIndex

                return (
                  <button
                    key={phase.number}
                    onClick={() => setActivePhaseIndex(index)}
                    className={`w-full text-left p-4 rounded-card-sm transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-surface border border-border shadow-elevated'
                        : 'hover:bg-surface/50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Giant vertical number */}
                      <span
                        className={`font-mono text-3xl font-extrabold tracking-tight transition-colors ${
                          isActive
                            ? 'text-accent'
                            : 'text-text-light/40 group-hover:text-text-muted'
                        }`}
                      >
                        {phase.number}
                      </span>
                      <div>
                        <div
                          className={`text-xs font-mono tracking-wider uppercase transition-colors ${
                            isActive ? 'text-accent font-bold' : 'text-text-light'
                          }`}
                        >
                          {phase.label}
                        </div>
                        <div
                          className={`text-sm font-semibold transition-colors truncate max-w-[200px] ${
                            isActive ? 'text-text' : 'text-text-muted'
                          }`}
                        >
                          {phase.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-text-light">{phase.duration}</span>
                      <div
                        className={`w-2 h-2 rounded-full transition-transform ${
                          isActive ? 'bg-accent scale-125' : 'bg-border-strong group-hover:bg-text-light'
                        }`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* DYNAMIC EXPANDING STORYTELLING CONTENT CONTAINER */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-card bg-surface border border-border shadow-floating relative overflow-hidden"
              >
                {/* Massive Watermark Numeral */}
                <div
                  className="font-mono text-numeral-giant text-text/5 select-none absolute -top-12 -right-8 pointer-events-none"
                  aria-hidden="true"
                >
                  {currentPhase.number}
                </div>

                {/* Phase Eyebrow */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-pill bg-accent-soft text-accent font-mono text-xs font-bold">
                      PHASE {currentPhase.number} // {currentPhase.label}
                    </span>
                    <span className="font-mono text-xs text-text-light">
                      Duration: {currentPhase.duration}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-text-muted bg-surface-subtle px-3 py-1 rounded-pill border border-border">
                    Deliverable: <strong className="text-text">{currentPhase.deliverable}</strong>
                  </div>
                </div>

                {/* Main Headline */}
                <h3 className="text-display-lg font-bold tracking-tight text-text mb-6" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
                  {currentPhase.title}
                </h3>

                <p className="text-body-xl text-text-muted leading-relaxed mb-8">
                  {currentPhase.synopsis}
                </p>

                {/* Core Specifications / Key Activities */}
                <div className="mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-text-light mb-4">
                    Key Architectural Activities
                  </h4>
                  <ul className="space-y-3">
                    {currentPhase.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Technical Artifact Snippet */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-text-light">
                    <span>Artifact Preview // Production Telemetry</span>
                    <span className="text-accent">VERIFIED SPECIFICATION</span>
                  </div>
                  <pre className="p-4 rounded-card-sm bg-[#0B1020] text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-white/10">
                    <code>{currentPhase.codeSnippet}</code>
                  </pre>
                </div>

                {/* Quick Next Phase Control */}
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-mono text-xs text-text-light">
                    Continuous Handover Protocol
                  </span>
                  {activePhaseIndex < phases.length - 1 ? (
                    <button
                      onClick={() => setActivePhaseIndex(activePhaseIndex + 1)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text hover:text-accent transition-colors"
                    >
                      <span>Proceed to Phase 0{activePhaseIndex + 2}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <span className="font-mono text-xs text-accent font-semibold">
                      Full Protocol Completed ✓
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}