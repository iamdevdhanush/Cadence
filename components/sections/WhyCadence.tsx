"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Workflow,
  FileSpreadsheet,
  UserCheck,
  Zap,
  CheckCircle2,
  Lock,
  Database,
  ArrowUpRight,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

interface Benefit {
  id: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  title: string;
  description: string;
  quoteOrPill: string;
  bullets: string[];
  isTall?: boolean;
}

const benefits: Benefit[] = [
  {
    id: "existing-workflow",
    icon: Workflow,
    color: "#10B981",
    badge: "Zero Migration",
    title: "Built around your existing workflow",
    description: "You don't need to replace your ERP, retrain your staff, or force customers into a clunky web portal. Cadence integrates underneath the apps you already use.",
    quoteOrPill: "No ERP migration required • Works with Tally, SAP, & Zoho",
    bullets: [
      "Keep existing vendor relationships untouched",
      "No change to staff day-to-day habits",
      "Zero downtime during deployment",
    ],
    isTall: true,
  },
  {
    id: "omni-intake",
    icon: MessagesSquare,
    color: "#38BDF8",
    badge: "Native Channels",
    title: "Works with WhatsApp, PDFs & spreadsheets",
    description: "Indian business runs on WhatsApp voice notes, scanned PDFs, and messy Excel sheets. Cadence was engineered specifically for these formats.",
    quoteOrPill: "Accepts raw WhatsApp chats, PDFs, and XLSX exports",
    bullets: [
      "Voice note parsing with colloquial context",
      "Scanned invoice OCR with GSTIN cross-checks",
    ],
    isTall: false,
  },
  {
    id: "human-loop",
    icon: UserCheck,
    color: "#F59E0B",
    badge: "Full Control",
    title: "Human review for every exception",
    description: "We don't believe in dangerous black-box automation. Standard workflows clear automatically; any discrepancy or variance is routed to your team.",
    quoteOrPill: "You define tolerances • People make the final call",
    bullets: [
      "Instant 1-click approvals on mobile",
      "Complete audit trail on every decision",
    ],
    isTall: false,
  },
  {
    id: "rapid-pilot",
    icon: Zap,
    color: "#A855F7",
    badge: "Fast Ramp",
    title: "Value in weeks, not quarters",
    description: "Enterprise software deployments that drag on for six months fail. We audit one high-volume operational bottleneck and have it live in your staging environment in 14 days.",
    quoteOrPill: "Start with one high-impact workflow • Expand when proven",
    bullets: [
      "Free 30-minute initial workflow audit",
      "Live pilot deployed in 14 working days",
      "Transparent operational return on investment",
    ],
    isTall: true,
  },
];

const believableTrustSignals = [
  {
    icon: Database,
    title: "No ERP Migration Required",
    desc: "Plugs directly into Tally Prime, SAP, Zoho Books, or custom SQL databases.",
  },
  {
    icon: MessagesSquare,
    title: "Works with WhatsApp & PDFs",
    desc: "Direct integration with WhatsApp Business API and email inboxes.",
  },
  {
    icon: UserCheck,
    title: "Human Review for Exceptions",
    desc: "Strict tolerance thresholds keep your AP & Ops teams in total command.",
  },
  {
    icon: Lock,
    title: "Isolated VPC Deployment",
    desc: "Enterprise tenancy with zero cross-tenant data training.",
  },
];

export function WhyCadence() {
  return (
    <section id="why-cadence" className="relative section overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="fade">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4">
              <span>Why Operations Teams Choose Cadence</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-text mb-4">
              Ground-truth clarity, <span className="text-gradient-slow">not enterprise theater</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              We don&apos;t invent marketing metrics. We give your operations and finance teams the exact leverage they need to scale revenue without scaling headcount.
            </p>
          </ScrollReveal>
        </div>

        {/* Intentionally Asymmetric Grid (Alternating Heights & Rhythms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start mb-20">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Tall Card 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-7 lg:p-8 bg-surface/90 border border-border/80 hover:border-emerald-500/30 transition-all shadow-elevation-2 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {benefits[0].badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl lg:text-2xl text-text mb-3">
                  {benefits[0].title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {benefits[0].description}
                </p>

                <div className="p-3.5 rounded-xl bg-black/40 border border-border/60 text-xs font-mono text-emerald-300 mb-6">
                  {benefits[0].quoteOrPill}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border/60 text-xs font-mono text-text-muted">
                {benefits[0].bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Compact Card 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-7 lg:p-8 bg-surface/90 border border-border/80 hover:border-sky-500/30 transition-all shadow-elevation-2 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <MessagesSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                    {benefits[1].badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg lg:text-xl text-text mb-2">
                  {benefits[1].title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {benefits[1].description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-border/60 text-xs font-mono text-sky-300">
                {benefits[1].quoteOrPill}
              </div>
            </motion.div>
          </div>

          {/* Column 2 (Offset / Asymmetric) */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:pt-8">
            {/* Compact Card 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-7 lg:p-8 bg-surface/90 border border-border/80 hover:border-amber-500/30 transition-all shadow-elevation-2 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {benefits[2].badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg lg:text-xl text-text mb-2">
                  {benefits[2].title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {benefits[2].description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-border/60 text-xs font-mono text-amber-300">
                {benefits[2].quoteOrPill}
              </div>
            </motion.div>

            {/* Tall Card 4 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-7 lg:p-8 bg-surface/90 border border-border/80 hover:border-violet-500/30 transition-all shadow-elevation-2 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                    {benefits[3].badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl lg:text-2xl text-text mb-3">
                  {benefits[3].title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {benefits[3].description}
                </p>

                <div className="p-3.5 rounded-xl bg-black/40 border border-border/60 text-xs font-mono text-violet-300 mb-6">
                  {benefits[3].quoteOrPill}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border/60 text-xs font-mono text-text-muted">
                {benefits[3].bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Believable Trust Bar (Replacing fake enterprise signals) */}
        <div className="pt-12 border-t border-border/70">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-text-subtle">
              Authentic Operational Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {believableTrustSignals.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface/60 border border-border/60 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-2 text-text font-medium text-sm font-heading">
                  <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}