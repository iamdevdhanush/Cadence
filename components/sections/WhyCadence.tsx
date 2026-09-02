"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingCard } from "@/components/motion/FloatingCards";
import { cn } from "@/lib/utils";
import { CheckCircle, TrendingDown, Shield, Zap, Clock, BarChart3, Users, Lock, Globe } from "lucide-react";

const benefits = [
  {
    id: "less-manual",
    icon: TrendingDown,
    color: "#22C55E",
    title: "Less manual work",
    description: "Eliminate copy-paste between WhatsApp, email, PDFs, spreadsheets, and ERPs. Data flows once, enters everywhere.",
    metric: "87% reduction in manual entry",
    details: [
      "Auto-capture from 10+ channels",
      "One-click historical import",
      "Scheduled batch processing",
    ],
  },
  {
    id: "fewer-mistakes",
    icon: Shield,
    color: "#3B82F6",
    title: "Fewer mistakes",
    description: "AI extraction with confidence scoring + rules engine catches what humans miss. 3-way matching prevents overpayments.",
    metric: "99.2% extraction accuracy",
    details: [
      "Cross-document validation",
      "Duplicate detection",
      "Tolerance-based auto-approval",
    ],
  },
  {
    id: "faster-ops",
    icon: Zap,
    color: "#F59E0B",
    title: "Faster operations",
    description: "What took hours now takes minutes. Invoice-to-pay in 15 min vs 3 days. Order-to-cash in 1 hour vs 2 days.",
    metric: "15x faster processing",
    details: [
      "Real-time WhatsApp capture",
      "Parallel validation streams",
      "Instant ERP sync",
    ],
  },
  {
    id: "more-control",
    icon: BarChart3,
    color: "#A855F7",
    title: "More control",
    description: "Full audit trail, real-time dashboards, exception analytics. You always know what's processed, what's pending, and why.",
    metric: "100% audit coverage",
    details: [
      "Immutable processing logs",
      "Live exception dashboard",
      "Vendor performance analytics",
    ],
  },
];

const trustSignals = [
  { icon: Lock, label: "SOC 2 Type II", desc: "Certified security & availability" },
  { icon: Globe, label: "99.9% uptime SLA", desc: "Enterprise-grade reliability" },
  { icon: Users, label: "On-premise option", desc: "Deploy in your VPC or cloud" },
  { icon: Clock, label: "2-week implementation", desc: "Not months. Weeks to value." },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  return (
    <FloatingCard depth={1} speed={1} className="flex flex-col h-full p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}30` }}>
          <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} aria-hidden="true" />
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(110, 231, 183, 0.1)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
          <span className="font-mono text-xs text-accent">{index + 1}</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-heading font-semibold text-xl text-text mb-2">{benefit.title}</h3>
        <p className="text-text-muted leading-relaxed">{benefit.description}</p>
      </div>

      <div className="mb-6 p-4 rounded-xl" style={{ background: `${benefit.color}08`, border: `1px solid ${benefit.color}20` }}>
        <p className="font-heading font-medium text-text" style={{ color: benefit.color }}>{benefit.metric}</p>
      </div>

      <ul className="space-y-2 mt-auto" role="list">
        {benefit.details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: benefit.color }} aria-hidden="true" />
            {detail}
          </li>
        ))}
      </ul>
    </FloatingCard>
  );
}

function TrustSignal({ signal }: { signal: typeof trustSignals[0] }) {
  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-xl"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)" }}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ x: 8, background: "rgba(110, 231, 183, 0.05)", borderColor: "rgba(110, 231, 183, 0.3)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(110, 231, 183, 0.1)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
        <signal.icon className="w-5 h-5 text-accent" aria-hidden="true" />
      </div>
      <div>
        <p className="font-heading font-medium text-text">{signal.label}</p>
        <p className="text-xs text-text-muted">{signal.desc}</p>
      </div>
    </motion.div>
  );
}

export function WhyCadence() {
  return (
    <section className="relative section overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="fade" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
              Why Cadence
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-heading font-black leading-[1.1] text-text mb-4">
              Four reasons operations teams <span className="text-gradient-accent">choose Cadence</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-text-muted">
              We don't sell features. We sell outcomes your finance and ops teams will feel every day.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <StaggerItem key={benefit.id} direction="up" delay={index * 0.1}>
              <BenefitCard benefit={benefit} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} aria-hidden="true" />
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <ScrollReveal direction="fade" delay={0.4}>
              <span className="text-xs text-text-subtle uppercase tracking-widest px-4 py-2 relative z-10" style={{ background: "var(--color-background)" }}>Trusted by operations teams</span>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.08}>
              {trustSignals.map((signal, index) => (
                <StaggerItem key={index} direction="scale">
                  <TrustSignal signal={signal} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}