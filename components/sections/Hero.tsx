"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { DataFlow } from "@/components/motion/DataFlow";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[calc(100vh-72px)]">
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 lg:max-w-none pt-8 lg:pt-0">
            <StaggerContainer staggerDelay={0.08} delayChildren={0.1}>
              <StaggerItem direction="fade" duration={0.6}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  New: Automation Audit
                </span>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.7} delay={0.1}>
                <h1 className="font-heading font-black leading-[0.95] text-text text-balance">
                  Your operations are already digital.
                  <br />
                  <span className="text-gradient-accent">They&apos;re just not connected.</span>
                </h1>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.7} delay={0.2}>
                <p className="mt-8 text-lg max-w-xl text-text-muted leading-relaxed">
                  Cadence connects WhatsApp messages, documents, spreadsheets and payments into one automated workflow.
                </p>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.6} delay={0.3}>
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <MagneticButton variant="primary" className="group px-8 py-3.5 min-w-[200px]">
                    <span className="flex items-center gap-2">
                      Start an Automation Audit
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </MagneticButton>
                  <MagneticButton variant="secondary" className="group px-8 py-3.5 min-w-[200px]">
                    <span className="flex items-center gap-2">
                      See the Workflow
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </MagneticButton>
                </div>
              </StaggerItem>

              <StaggerItem direction="fade" duration={0.8} delay={0.5}>
                <div className="mt-16 flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-text-subtle">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#6EE7B7" }} aria-hidden="true" />
                    Zero manual entry
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#5AC8FA" }} aria-hidden="true" />
                    99.2% accuracy
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#A855F7" }} aria-hidden="true" />
                    SOC 2 certified
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem direction="up" duration={0.7} delay={0.6}>
                <motion.div
                  className="mt-12 p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(110, 231, 183, 0.08), rgba(90, 200, 250, 0.05))",
                    border: "1px solid rgba(110, 231, 183, 0.15)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "rgba(110, 231, 183, 0.15)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
                      <Sparkles className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-text">Automation Audit</p>
                      <p className="text-sm text-text-muted">We analyze one workflow free — no commitment</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative aspect-[4/3] w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <DataFlow speed={1} />
            </div>

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs lg:absolute lg:left-auto lg:right-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:w-80 lg:-right-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="surface-card-elevated p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" aria-hidden="true" />
                <div className="relative flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={{ background: "rgba(110, 231, 183, 0.15)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
                    <Sparkles className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text">Automation Audit</p>
                    <p className="text-sm text-text-muted">We analyze one workflow free</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-text-subtle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}