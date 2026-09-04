"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  FileText,
  ShieldAlert,
  Zap,
  ArrowRight,
  ChevronRight,
  Brain,
  ShieldCheck,
  Cpu,
  Check,
  Layers,
} from "lucide-react";

interface Stage {
  id: string;
  label: string;
  number: string;
  icon: React.ElementType;
  color: string;
  accentClass: string;
  borderClass: string;
  bgGlow: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  systemPreview: {
    label: string;
    value: string;
  };
}

const stages: Stage[] = [
  {
    id: "capture",
    label: "CAPTURE",
    number: "01",
    icon: MessageSquare,
    color: "#10B981",
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/30",
    bgGlow: "rgba(16, 185, 129, 0.08)",
    title: "Ingest from everywhere",
    tagline: "Omni-channel listener",
    description: "Captures unformatted text, voice notes, PDFs, Excel sheets, and email attachments the second they hit your accounts.",
    capabilities: [
      "WhatsApp Business API webhooks",
      "Headless inbox parser (PDF, XLSX)",
      "Continuous photo & scan intake",
    ],
    systemPreview: {
      label: "INBOUND PAYLOAD",
      value: "WhatsApp #98765: 'Need 50x Widget Pro by Friday'",
    },
  },
  {
    id: "understand",
    label: "UNDERSTAND",
    number: "02",
    icon: Brain,
    color: "#3B82F6",
    accentClass: "text-sky-400",
    borderClass: "border-sky-500/30",
    bgGlow: "rgba(59, 130, 246, 0.08)",
    title: "Extract meaning with AI",
    tagline: "Layout-aware context engine",
    description: "Understands tabular relationships, handwriting variations, and intent. Converts chaotic documents into structured JSON.",
    capabilities: [
      "Multi-lingual extraction (Hindi, English, regional)",
      "Line-item table reconstruction",
      "Zero-shot entity normalization",
    ],
    systemPreview: {
      label: "STRUCTURED JSON",
      value: "SKU: WP-100 | Qty: 50 | Due: 15-Mar | COD: Yes",
    },
  },
  {
    id: "validate",
    label: "VALIDATE",
    number: "03",
    icon: ShieldCheck,
    color: "#F59E0B",
    accentClass: "text-amber-400",
    borderClass: "border-amber-500/30",
    bgGlow: "rgba(245, 158, 11, 0.08)",
    title: "Verify before trusting",
    tagline: "Configurable business rules",
    description: "Runs 3-way cross matches against existing Purchase Orders, vendor master data, and tax rules. Humans review exceptions only.",
    capabilities: [
      "3-way PO & bank statement match",
      "GSTIN & vendor duplicate verification",
      "Automated tolerance thresholds (0.5%)",
    ],
    systemPreview: {
      label: "VALIDATION PASS",
      value: "PO-2024-0456 matched • 0.00% variance",
    },
  },
  {
    id: "automate",
    label: "AUTOMATE",
    number: "04",
    icon: Zap,
    color: "#8B5CF6",
    accentClass: "text-violet-400",
    borderClass: "border-violet-500/30",
    bgGlow: "rgba(139, 92, 246, 0.08)",
    title: "Execute end-to-end",
    tagline: "Zero-touch ledger sync",
    description: "Directly creates journal entries, triggers supplier payment batches, updates warehouse inventory, and notifies stakeholders.",
    capabilities: [
      "Native sync (Tally, SAP, Zoho, NetSuite)",
      "Automated WhatsApp delivery receipts",
      "Full immutable audit trail log",
    ],
    systemPreview: {
      label: "LEDGER SYNCED",
      value: "Receipt #REC-8921 posted • Inventory reserved",
    },
  },
];

export function WorkflowEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  // Progressive live pipeline step transition
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="workflow" className="relative section overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="fade">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4">
              <span>The Intelligent Pipeline</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-text mb-4">
              How <span className="text-gradient-slow">Cadence thinks</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Four specialized stages. One continuous operational conduit. Unstructured inputs enter on the left; clean, reconciled business records emerge on the right.
            </p>
          </ScrollReveal>
        </div>

        {/* Progression Progress Bar (1 ↓ 2 ↓ 3 ↓ 4) */}
        <div className="relative mb-10 max-w-4xl mx-auto hidden lg:block">
          <div className="flex items-center justify-between relative z-10">
            {stages.map((stage, idx) => {
              const isCurrent = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={`step-btn-${stage.id}`}
                  onClick={() => setActiveStep(idx)}
                  className="flex items-center gap-2 text-xs font-mono group focus:outline-none"
                >
                  <span
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center font-bold border transition-all duration-300",
                      isCurrent
                        ? "bg-white text-black border-white scale-110 shadow-elevation-2"
                        : isPassed
                        ? "bg-surface-elevated text-emerald-400 border-emerald-500/40"
                        : "bg-surface text-text-subtle border-border group-hover:border-text-muted/40"
                    )}
                  >
                    {isPassed ? <Check className="w-3.5 h-3.5" /> : stage.number}
                  </span>
                  <span
                    className={cn(
                      "font-heading font-semibold uppercase tracking-wider transition-colors",
                      isCurrent
                        ? "text-text"
                        : isPassed
                        ? "text-emerald-400"
                        : "text-text-subtle group-hover:text-text-muted"
                    )}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Animated Connective Energy Bar */}
          <div className="absolute top-3.5 left-6 right-6 h-0.5 bg-border -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 via-sky-400 via-amber-400 to-violet-400"
              animate={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* 4 Distinct Cards with Unique Identity & Rich Interior Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stages.map((stage, index) => {
            const isCurrent = activeStep === index;

            return (
              <motion.div
                key={stage.id}
                onClick={() => setActiveStep(index)}
                animate={{
                  y: isCurrent ? -4 : 0,
                  scale: isCurrent ? 1.01 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl p-6 border cursor-pointer transition-all duration-300",
                  "bg-surface/90 hover:bg-surface-elevated/95",
                  isCurrent
                    ? `${stage.borderClass} shadow-elevation-3 bg-surface-elevated`
                    : "border-border/80 shadow-elevation-1 hover:border-text-muted/30"
                )}
                style={{
                  background: isCurrent
                    ? `linear-gradient(180deg, ${stage.bgGlow} 0%, rgba(17, 17, 22, 0.95) 40%)`
                    : undefined,
                }}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl"
                      style={{
                        background: `${stage.color}15`,
                        border: `1px solid ${stage.color}35`,
                        color: stage.color,
                      }}
                    >
                      <stage.icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-text-subtle">{stage.number}</span>
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          isCurrent ? "animate-pulse" : "opacity-40"
                        )}
                        style={{ background: stage.color }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span
                      className="text-[11px] font-mono tracking-wider uppercase font-semibold block mb-1"
                      style={{ color: stage.color }}
                    >
                      {stage.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-text">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div>
                  <div className="space-y-2 mb-6 pt-4 border-t border-border/60">
                    {stage.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-text-muted">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: stage.color }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interior Contrast System Preview */}
                  <div className="rounded-xl p-3 bg-black/60 border border-border/80 font-mono text-xs">
                    <div className="text-[10px] text-text-subtle uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>{stage.systemPreview.label}</span>
                      <span className="text-[9px]" style={{ color: stage.color }}>Live</span>
                    </div>
                    <p className="text-text-muted text-[11px] truncate font-mono">
                      {stage.systemPreview.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-16 text-center">
          <ScrollReveal direction="fade" delay={0.3}>
            <a
              href="#real-examples"
              className="btn-secondary group inline-flex items-center gap-2 px-8 py-3.5"
            >
              <span className="font-medium text-text">Explore Real-World Operations</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span className="grow-underline" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}