"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  UserCheck,
  FileSearch,
  Check,
  ChevronDown,
} from "lucide-react";

const exceptionSequence = [
  {
    id: "payment",
    step: "01",
    label: "Payment Received",
    amount: "₹48,500",
    color: "#38BDF8",
    detail: "UPI payment received from customer",
    meta: "Bank Reference: UPI/4567891230",
  },
  {
    id: "invoice",
    step: "02",
    label: "Invoice Expected",
    amount: "₹49,000",
    color: "#10B981",
    detail: "Supplier Tax Invoice #INV-8921",
    meta: "PO Ref: PO-2024-0456 (3-Way Match)",
  },
  {
    id: "mismatch",
    step: "03",
    label: "Variance Detected",
    amount: "₹500 SHORT",
    color: "#F59E0B",
    detail: "1.02% variance exceeds 0.5% auto-tolerance",
    meta: "Auto-escalation rule triggered",
    isFocal: true,
  },
  {
    id: "review",
    step: "04",
    label: "Routed to Human",
    amount: "Priya Sharma (AP Lead)",
    color: "#A855F7",
    detail: "One-click approval with full context pre-attached",
    meta: "Context: PO + Invoice + Bank ref attached",
  },
];

export function BuiltForExceptions() {
  const [activeStep, setActiveStep] = useState(2); // default focused on Mismatch
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % exceptionSequence.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="relative section overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12 max-w-5xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="fade">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>The Operational Differentiator</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-text mb-5">
              Built for <span className="text-amber-400">exceptions</span>, not just the happy path
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Any tool can automate standard orders. True reliability is knowing what happens when numbers don&apos;t match. Cadence isolates anomalies, routes them with complete context, and protects your ledger.
            </p>
          </ScrollReveal>
        </div>

        {/* Cinematic Step Progress (Centered) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12">
          {exceptionSequence.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={`btn-step-${item.id}`}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all",
                  isActive
                    ? "bg-surface-elevated text-text border border-amber-400/40 shadow-elevation-2 scale-105"
                    : "text-text-subtle hover:text-text-muted bg-surface/50 border border-border"
                )}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="hidden sm:inline font-medium">{item.label}</span>
                <span className="sm:hidden">{item.step}</span>
              </button>
            );
          })}
        </div>

        {/* Center Stage: The ₹500 Mismatch Emotional Focal Point */}
        <div className="relative rounded-2xl bg-surface/80 border border-border/80 p-6 sm:p-10 backdrop-blur-2xl shadow-elevation-4 overflow-hidden max-w-3xl mx-auto">
          {/* Subtle ambient focal glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none -z-0 opacity-20"
            style={{
              background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
            }}
          />

          {/* 4 Steps Timeline Flow */}
          <div className="relative z-10 space-y-4">
            {exceptionSequence.map((item, index) => {
              const isCurrent = activeStep === index;
              const isFocal = item.isFocal;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false);
                  }}
                  animate={{
                    scale: isCurrent ? 1.01 : 1,
                    opacity: isCurrent ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "p-4 sm:p-5 rounded-xl border transition-all cursor-pointer",
                    isCurrent && isFocal
                      ? "bg-amber-950/20 border-amber-500/50 shadow-elevation-3 ring-1 ring-amber-500/30"
                      : isCurrent
                      ? "bg-surface-elevated border-text-muted/40 shadow-elevation-2"
                      : "bg-surface/40 border-border/60 hover:border-border-hover"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="flex items-center justify-center w-9 h-9 rounded-lg font-mono text-xs font-bold"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.step}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-text-subtle">
                            {item.label}
                          </span>
                          {isCurrent && isFocal && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                              ANOMALY ISOLATED
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-heading font-semibold text-text mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-mono flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-border/40">
                      <span
                        className={cn(
                          "font-bold text-base sm:text-lg",
                          isFocal ? "text-amber-400 font-extrabold" : "text-text"
                        )}
                      >
                        {item.amount}
                      </span>
                      <span className="text-[11px] text-text-subtle">{item.meta}</span>
                    </div>
                  </div>

                  {/* Contextual Action Drawer for the Mismatch Focal Point */}
                  {isCurrent && isFocal && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-amber-500/20 overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                        <span className="text-text-muted flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>Variance of ₹500 held. PO & Invoice records attached to ticket.</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-medium">
                            1-Click Resolve
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3 Grounded Operational Pillars (No fake stats) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl p-6 bg-surface/80 border border-border text-center">
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-text mb-1.5">
              Automate the Happy Path
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Standard orders and matching bills flow through without human intervention or delay.
            </p>
          </div>

          <div className="rounded-xl p-6 bg-surface/80 border border-border text-center">
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-text mb-1.5">
              Smart Exception Routing
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Variances arrive directly in front of the right decision-maker with complete audit context pre-filled.
            </p>
          </div>

          <div className="rounded-xl p-6 bg-surface/80 border border-border text-center">
            <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-text mb-1.5">
              Continuous Ledger Integrity
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Every decision updates rules and builds an airtight, immutable history for monthly financial close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}