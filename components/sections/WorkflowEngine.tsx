"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FloatingCard } from "@/components/motion/FloatingCards";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  FileText,
  CheckCircle,
  Zap,
  ArrowRight,
  ChevronRight,
  Eye,
  Brain,
  Shield,
  Cpu,
} from "lucide-react";

const stages = [
  {
    id: "capture",
    label: "CAPTURE",
    number: "01",
    icon: MessageSquare,
    color: "#25D366",
    bg: "rgba(37, 211, 102, 0.1)",
    border: "rgba(37, 211, 102, 0.2)",
    title: "Ingest from everywhere",
    description: "WhatsApp, email, PDFs, spreadsheets, APIs — Cadence captures unstructured data from every channel your business uses.",
    features: ["WhatsApp Business API", "Email parsing", "PDF/OCR ingestion", "API webhooks", "Manual upload"],
    details: [
      "Multi-format document parsing",
      "Real-time message capture",
      "Batch historical import",
      "Custom channel connectors",
    ],
  },
  {
    id: "understand",
    label: "UNDERSTAND",
    number: "02",
    icon: Brain,
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.1)",
    border: "rgba(59, 130, 246, 0.2)",
    title: "Extract meaning with AI",
    description: "LLM-powered extraction understands context, not just keywords. It reads invoices, messages, and documents like a human — but faster.",
    features: ["Layout-aware OCR", "Contextual NER", "Multi-language support", "Confidence scoring", "Custom field training"],
    details: [
      "Line-item extraction from invoices",
      "Intent detection from messages",
      "Currency & date normalization",
      "Validation rule generation",
    ],
  },
  {
    id: "validate",
    label: "VALIDATE",
    number: "03",
    icon: Shield,
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.1)",
    border: "rgba(245, 158, 11, 0.2)",
    title: "Verify before you trust",
    description: "Configurable rules engine catches discrepancies. Humans review only exceptions — not routine work.",
    features: ["Cross-document matching", "Business rule engine", "Exception routing", "Audit trail", "Approval workflows"],
    details: [
      "PO-to-invoice 3-way match",
      "Duplicate detection",
      "Amount tolerance rules",
      "Vendor master validation",
    ],
  },
  {
    id: "automate",
    label: "AUTOMATE",
    number: "04",
    icon: Zap,
    color: "#A855F7",
    bg: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.2)",
    title: "Execute end-to-end",
    description: "Push validated data to ERPs, trigger payments, update inventory — all without human intervention for the happy path.",
    features: ["ERP connectors (Tally, SAP, NetSuite)", "Payment initiation", "Inventory sync", "Report generation", "Webhook callbacks"],
    details: [
      "Journal entry creation",
      "Vendor payment scheduling",
      "Stock level updates",
      "Compliance reporting",
    ],
  },
];

function StageCard({ stage, index, isActive }: { stage: typeof stages[0]; index: number; isActive: boolean }) {
  return (
    <FloatingCard
      depth={2}
      speed={1}
      className={cn(
        "flex flex-col h-full relative overflow-hidden",
        isActive && "ring-1", { "ring-accent/50": isActive }
      )}
      style={{
        background: `linear-gradient(135deg, ${stage.bg}, transparent)`,
        borderColor: stage.border,
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: stage.bg, border: `1px solid ${stage.border}` }}>
            <stage.icon className="w-6 h-6" style={{ color: stage.color }} aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-xs text-text-subtle">{stage.number}</span>
            <span className="ml-2 font-heading font-semibold text-sm text-text" style={{ color: stage.color }}>{stage.label}</span>
          </div>
        </div>
        <div className="relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: stage.bg, border: `1px solid ${stage.border}` }}>
            {isActive ? (
              <CheckCircle className="w-5 h-5" style={{ color: stage.color }} aria-hidden="true" />
            ) : (
              <span className="font-mono text-xs text-text-subtle">{index + 1}</span>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-heading font-semibold text-lg text-text mb-2">{stage.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{stage.description}</p>
      </div>

      <div className="flex-1 mb-6">
        <ul className="space-y-2" role="list">
          {stage.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: stage.color }} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-subtle uppercase tracking-wide">Details</span>
          <motion.button
            className="flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: stage.color }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            View details
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </FloatingCard>
  );
}

function StageDetailPanel({ stage }: { stage: typeof stages[0] }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="stage-detail-title"
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative surface-card-elevated max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: stage.bg, border: `1px solid ${stage.border}` }}>
              <stage.icon className="w-5 h-5" style={{ color: stage.color }} aria-hidden="true" />
            </div>
            <div>
              <span className="font-mono text-xs text-text-subtle">{stage.number}</span>
              <h3 id="stage-detail-title" className="font-heading font-semibold text-text ml-2">{stage.label}</h3>
            </div>
          </div>
          <button
            className="p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-text-muted mb-6">{stage.details[0]}</p>
          <h4 className="font-heading font-medium text-text mb-3">Capabilities</h4>
          <ul className="space-y-2 mb-6" role="list">
            {stage.details.slice(1).map((detail, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: stage.color }} aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: stage.bg, border: `1px solid ${stage.border}` }}>
            <Eye className="w-5 h-5 flex-shrink-0" style={{ color: stage.color }} aria-hidden="true" />
            <span className="text-sm text-text">Live demo available — see {stage.label.toLowerCase()} in action</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorkflowEngine() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState<typeof stages[0] | null>(null);

  return (
    <section className="relative section overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="fade" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
              How it works
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-heading font-black leading-[1.1] text-text mb-4">
              How <span className="text-gradient-accent">Cadence thinks</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-text-muted">
              Four stages. One seamless flow. Every document, message, and payment moves through the same intelligent pipeline.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px lg:hidden" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} aria-hidden="true" />
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden lg:block">
            <div className="flex items-center justify-between">
              {stages.map((_, i) => (
                <motion.div
                  key={i}
                  className="relative flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {i < stages.length - 1 && (
                    <div className="absolute top-1/2 left-1/2 right-1/2 h-px -translate-y-1/2" style={{ background: "linear-gradient(90deg, var(--color-border), var(--color-accent/30), var(--color-border))" }} aria-hidden="true" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <StaggerContainer staggerDelay={0.1} className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => (
              <StaggerItem key={stage.id} direction="up" delay={index * 0.1}>
                <StageCard stage={stage} index={index} isActive={activeStage === index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal direction="fade" delay={0.5}>
            <MagneticButton variant="secondary" className="px-8 py-3.5 min-w-[240px]">
              <span>See technical architecture</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </MagneticButton>
          </ScrollReveal>
        </div>

        {showDetail && <StageDetailPanel stage={showDetail} />}
      </div>
    </section>
  );
}