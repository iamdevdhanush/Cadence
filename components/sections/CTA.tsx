"use client";

import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, CheckCircle, MessageSquare, FileText, CreditCard, Zap } from "lucide-react";

const auditSteps = [
  { icon: MessageSquare, label: "Share one workflow", desc: "WhatsApp, email, PDF — whatever you have" },
  { icon: FileText, label: "We map the automation", desc: "See exactly what we'd automate first" },
  { icon: Zap, label: "Get a pilot plan", desc: "Timeline, effort, and expected ROI" },
];

export function CTA() {
  return (
    <section className="relative section overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
        <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="relative container">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem direction="fade">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                Free Automation Audit
              </span>
            </StaggerItem>

            <StaggerItem direction="up">
              <h2 className="font-heading font-black leading-[1.05] text-text mb-6">
                Find your first <span className="text-gradient-accent">automation</span>
              </h2>
            </StaggerItem>

            <StaggerItem direction="up">
              <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                Show us one repetitive workflow. We'll show you what we'd automate first — no commitment, no sales pitch, just a clear path forward.
              </p>
            </StaggerItem>

            <StaggerItem direction="up">
              <MagneticButton variant="primary" className="group w-full sm:w-auto min-w-[280px] px-6 py-4 text-base">
                <span className="flex items-center gap-3">
                  <span>Start Automation Audit</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </MagneticButton>
            </StaggerItem>

            <StaggerItem direction="fade" delay={0.2}>
              <p className="mt-8 text-sm text-text-subtle">No credit card · 30-min call · Actionable report in 48 hours</p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.08} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {auditSteps.map((step, index) => (
              <StaggerItem key={index} direction="up">
                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl text-left"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -4, borderColor: "rgba(110, 231, 183, 0.3)", background: "rgba(110, 231, 183, 0.03)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(110, 231, 183, 0.1)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
                    <step.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-text">{step.label}</p>
                    <p className="text-sm text-text-muted mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.1} className="mt-20 flex flex-wrap items-center justify-center gap-8">
            <StaggerItem direction="fade">
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#22C55E" }} aria-hidden="true" />
                <span className="text-sm text-text">Zero setup to start</span>
              </div>
            </StaggerItem>
            <StaggerItem direction="fade" delay={0.1}>
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#3B82F6" }} aria-hidden="true" />
                <span className="text-sm text-text">Your data stays yours</span>
              </div>
            </StaggerItem>
            <StaggerItem direction="fade" delay={0.2}>
              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.2)" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#A855F7" }} aria-hidden="true" />
                <span className="text-sm text-text">Cancel anytime</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}