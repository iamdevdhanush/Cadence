"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { DataFlow } from "@/components/motion/DataFlow";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden pt-6 lg:pt-10 pb-16">
      {/* Atmosphere layers */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
          {/* 55% Text Column */}
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <StaggerContainer staggerDelay={0.08} delayChildren={0.05}>
              <StaggerItem direction="fade" duration={0.5}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Free Automation Audit • 30-Min Analysis</span>
                </div>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.7} delay={0.08}>
                <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[3.75rem] tracking-tight leading-[1.03] text-text text-balance">
                  Your operations are already digital.
                  <br />
                  <span className="text-gradient-slow">They&apos;re just not connected.</span>
                </h1>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.7} delay={0.16}>
                <p className="mt-6 text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-xl text-balance">
                  Cadence unifies WhatsApp chats, supplier invoices, PDFs, spreadsheets, and bank reconciliations into a single, autonomous pipeline without replacing your ERP.
                </p>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.6} delay={0.24}>
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <MagneticButton
                    variant="primary"
                    className="group px-7 py-3.5 min-w-[220px] shadow-elevation-2"
                  >
                    <span className="flex items-center justify-center gap-2 font-medium">
                      Start Automation Audit
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </MagneticButton>

                  <a
                    href="#chaos-to-control"
                    className="btn-secondary group px-7 py-3.5 min-w-[200px]"
                  >
                    <span className="flex items-center justify-center gap-2 font-medium text-text">
                      See the Workflow
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
                    </span>
                    <span className="grow-underline" aria-hidden="true" />
                  </a>
                </div>
              </StaggerItem>

              {/* Truthful microcopy replacing fake enterprise claims */}
              <StaggerItem direction="fade" duration={0.8} delay={0.35}>
                <div className="mt-12 pt-8 border-t border-border/50 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-text-subtle font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="text-text-muted">No new software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                    <span className="text-text-muted">Built around your workflow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                    <span className="text-text-muted">Free automation audit</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* 45% Visual Column: Integrated Connected System & Signature Moment */}
          <div className="relative w-full lg:pl-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              <DataFlow speed={1} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-text-subtle flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}