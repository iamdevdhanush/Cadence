"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  FileText,
  Table,
  CreditCard,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface WorkflowPair {
  id: string;
  source: string;
  sourceType: string;
  sourceContent: string;
  sourceMeta: string;
  sourceIcon: React.ElementType;
  sourceColor: string;
  targetStage: string;
  targetAction: string;
  targetOutput: string;
  targetMeta: string;
  scatteredX: number;
  scatteredY: number;
  scatteredRotate: number;
}

const workflowPairs: WorkflowPair[] = [
  {
    id: "whatsapp",
    source: "WhatsApp Chat",
    sourceType: "Unstructured Chat",
    sourceContent: "📱 Rajesh: Need 50x Widget Pro by Friday. COD to Bangalore warehouse. Urgent!",
    sourceMeta: "Raw text • 14:32",
    sourceIcon: MessageSquare,
    sourceColor: "#25D366",
    targetStage: "01 CAPTURE",
    targetAction: "Auto-Ingest Webhook",
    targetOutput: "ORDER #8921 • 50 Units • ₹225,000",
    targetMeta: "Parsed & Confirmed",
    scatteredX: -140,
    scatteredY: -50,
    scatteredRotate: -8,
  },
  {
    id: "invoice",
    source: "Supplier PDF",
    sourceType: "Scanned Invoice",
    sourceContent: "📄 Acme Supplies INV-2024-8921. Total ₹71,980. PO Ref: PO-0456.",
    sourceMeta: "Multi-page OCR • 14:30",
    sourceIcon: FileText,
    sourceColor: "#EF4444",
    targetStage: "02 UNDERSTAND",
    targetAction: "Layout-Aware OCR",
    targetOutput: "3-Way Match Passed • Line Items Extracted",
    targetMeta: "GST Validated",
    scatteredX: -50,
    scatteredY: 70,
    scatteredRotate: 6,
  },
  {
    id: "spreadsheet",
    source: "Inventory Sheet",
    sourceType: "Raw XLSX Dump",
    sourceContent: "📊 SKU: WP-100 | QTY: 12 | REORDER: 20 | Stock Alert Triggered",
    sourceMeta: "Manual sheet • 14:28",
    sourceIcon: Table,
    sourceColor: "#10B981",
    targetStage: "03 VALIDATE",
    targetAction: "Rules Validation",
    targetOutput: "Inventory Synced • PO Dispatched",
    targetMeta: "Real-time Update",
    scatteredX: 60,
    scatteredY: -65,
    scatteredRotate: -5,
  },
  {
    id: "payment",
    source: "UPI Receipt",
    sourceType: "Bank Screenshot",
    sourceContent: "💳 UPI Ref: 4567891230. ₹71,480 received from Acme Corp.",
    sourceMeta: "Bank statement API • 14:25",
    sourceIcon: CreditCard,
    sourceColor: "#6366F1",
    targetStage: "04 AUTOMATE",
    targetAction: "Auto-Reconcile",
    targetOutput: "Journal Entry Created • Tally/SAP Synced",
    targetMeta: "Audit Trail Logged",
    scatteredX: 150,
    scatteredY: 55,
    scatteredRotate: 7,
  },
];

export function ChaosToControl() {
  const sectionRef = useRef<HTMLElement>(null);
  const [manualProgress, setManualProgress] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      // Map the middle 50% of the section to 0 -> 1 progress
      const mapped = Math.max(0, Math.min(1, (latest - 0.25) / 0.5));
      setScrollProgress(mapped);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Use manual slider if interacted, otherwise scroll
  const effectiveProgress = manualProgress !== null ? manualProgress : scrollProgress;

  return (
    <section
      id="chaos-to-control"
      ref={sectionRef}
      className="relative section overflow-hidden py-24 lg:py-32"
    >
      {/* Background illumination */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <ScrollReveal direction="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Scroll or Scrub To Transform</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-text mb-4">
              From <span className="text-rose-400">scattered chaos</span> to{" "}
              <span className="text-gradient-slow">aligned control</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Your company&apos;s data doesn&apos;t arrive in clean tables. Watch Cadence transform fragmented messages, scans, and spreadsheets into structured, audit-ready operational records.
            </p>
          </ScrollReveal>

          {/* Interactive Scrub Control */}
          <div className="mt-8 flex flex-col items-center gap-2 max-w-md mx-auto">
            <div className="w-full flex items-center justify-between text-xs font-mono text-text-subtle">
              <span className={cn(effectiveProgress < 0.3 && "text-rose-400 font-semibold")}>
                01 Scattered
              </span>
              <span className={cn(effectiveProgress >= 0.3 && effectiveProgress < 0.7 && "text-amber-400 font-semibold")}>
                02 Connecting
              </span>
              <span className={cn(effectiveProgress >= 0.7 && "text-emerald-400 font-semibold")}>
                03 Locked & Structured
              </span>
            </div>

            <div className="relative w-full h-2 rounded-full bg-surface-elevated border border-border overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400"
                style={{ width: `${effectiveProgress * 100}%` }}
              />
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={effectiveProgress}
              onChange={(e) => setManualProgress(parseFloat(e.target.value))}
              className="w-full opacity-0 absolute cursor-pointer h-6"
              aria-label="Scrub transformation progress"
            />
          </div>
        </div>

        {/* Dynamic Canvas Container */}
        <div className="relative min-h-[580px] lg:min-h-[500px] w-full max-w-5xl mx-auto rounded-2xl bg-surface/70 border border-border/70 p-6 lg:p-8 backdrop-blur-xl overflow-hidden shadow-elevation-4">
          {/* SVG Connection Lines dynamically drawn based on progress */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0"
            preserveAspectRatio="none"
            viewBox="0 0 800 450"
          >
            <defs>
              <linearGradient id="chaosToControlLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Connecting Conduits that manifest as cards align */}
            {workflowPairs.map((pair, index) => {
              const startY = 80 + index * 90;
              const endY = 80 + index * 90;
              const pathOpacity = Math.max(0, Math.min(1, (effectiveProgress - 0.2) / 0.5));

              return (
                <g key={`conduit-${pair.id}`}>
                  {/* Faint baseline conduit */}
                  <path
                    d={`M 150 ${startY} C 350 ${startY}, 450 ${endY}, 650 ${endY}`}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.04)"
                    strokeWidth="1.5"
                  />
                  {/* Dynamic luminous path */}
                  <motion.path
                    d={`M 150 ${startY} C 350 ${startY}, 450 ${endY}, 650 ${endY}`}
                    fill="none"
                    stroke="url(#chaosToControlLine)"
                    strokeWidth={effectiveProgress > 0.7 ? "2" : "1"}
                    strokeDasharray="6 8"
                    strokeDashoffset={-effectiveProgress * 60}
                    style={{
                      opacity: pathOpacity,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Cards Layout: Transforms smoothly from scattered into aligned grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch h-full">
            {workflowPairs.map((pair, index) => {
              // Interpolate translation, rotation, and interior contrast
              const curX = pair.scatteredX * (1 - effectiveProgress);
              const curY = pair.scatteredY * (1 - effectiveProgress);
              const curRotate = pair.scatteredRotate * (1 - effectiveProgress);
              const isAligned = effectiveProgress > 0.75;

              return (
                <motion.div
                  key={pair.id}
                  style={{
                    transform: `translate3d(${curX}px, ${curY}px, 0) rotate(${curRotate}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className={cn(
                    "flex flex-col justify-between rounded-xl p-5 border transition-all duration-300",
                    isAligned
                      ? "bg-surface-elevated/95 border-emerald-500/40 shadow-elevation-2"
                      : "bg-surface/90 border-border/80 shadow-elevation-1"
                  )}
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-lg"
                        style={{
                          background: `${pair.sourceColor}18`,
                          border: `1px solid ${pair.sourceColor}30`,
                          color: pair.sourceColor,
                        }}
                      >
                        <pair.sourceIcon className="w-4 h-4" />
                      </div>

                      <span
                        className={cn(
                          "text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider",
                          isAligned
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-surface text-text-subtle border border-border"
                        )}
                      >
                        {isAligned ? "Structured" : pair.sourceType}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-sm text-text mb-2">
                      {isAligned ? pair.targetStage : pair.source}
                    </h3>

                    <div
                      className={cn(
                        "p-3 rounded-lg text-xs font-mono mb-3 leading-relaxed transition-colors",
                        isAligned
                          ? "bg-black/50 text-emerald-300 border border-emerald-500/20"
                          : "bg-black/30 text-text-muted border border-border/50"
                      )}
                    >
                      {isAligned ? pair.targetOutput : pair.sourceContent}
                    </div>
                  </div>

                  {/* Bottom Resolution Bar */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[11px] text-text-subtle">
                      {isAligned ? pair.targetMeta : pair.sourceMeta}
                    </span>

                    {isAligned ? (
                      <div className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium">Synced</span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-rose-400">Pending</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Payoff Banner */}
          <motion.div
            className="mt-8 p-4 rounded-xl text-center border transition-all"
            style={{
              background:
                effectiveProgress > 0.7
                  ? "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(56, 189, 248, 0.08))"
                  : "rgba(255, 255, 255, 0.02)",
              borderColor:
                effectiveProgress > 0.7 ? "rgba(16, 185, 129, 0.3)" : "var(--color-border)",
            }}
          >
            <p className="font-heading font-semibold text-sm sm:text-base text-text">
              {effectiveProgress > 0.7 ? (
                <span className="text-emerald-400 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  All 4 streams verified, linked, and posted to your ledger
                </span>
              ) : (
                "Unstructured inputs create silent operational bottlenecks"
              )}
            </p>
            <p className="text-xs text-text-muted mt-1 font-mono">
              {effectiveProgress > 0.7
                ? "Zero manual transcription • Instant 3-way validation • Complete contextual audit trail"
                : "Scroll down to see the end-to-end processing pipeline"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}