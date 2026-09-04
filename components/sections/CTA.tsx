"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowRight, Sparkles, CheckCircle2, MessageSquare, FileCode, Check } from "lucide-react";

const auditMilestones = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Share One Workflow",
    desc: "Send us a sample WhatsApp thread, an invoice PDF, or a messy spreadsheet. No system access needed.",
  },
  {
    step: "02",
    icon: FileCode,
    title: "We Map the Pipeline",
    desc: "Our engineers architect the automated intake, validation logic, and ERP connectors for your exact case.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Get Your Blueprint",
    desc: "Receive an end-to-end automation blueprint, ROI estimate, and live sandbox demonstration in 48 hours.",
  },
];

export function CTA() {
  return (
    <section id="audit" className="relative section overflow-hidden py-28 lg:py-40">
      {/* Soft ambient central illumination & background layers */}
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      {/* Luminous Central Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(110, 231, 183, 0.12) 0%, rgba(90, 200, 250, 0.05) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* SVG Converging Fading Conduits (Conclusion of the journey) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-0 opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          <linearGradient id="ctaConduitGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ctaConduitGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 0 180 C 300 220, 400 300, 500 300"
          fill="none"
          stroke="url(#ctaConduitGradLeft)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          animate={{ strokeDashoffset: [-40, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1000 180 C 700 220, 600 300, 500 300"
          fill="none"
          stroke="url(#ctaConduitGradRight)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative container px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <StaggerContainer staggerDelay={0.08}>
          <StaggerItem direction="fade">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-8 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Begin Your Automation Journey</span>
            </div>
          </StaggerItem>

          <StaggerItem direction="up" delay={0.08}>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.04] text-text mb-6 text-balance max-w-3xl mx-auto">
              Ready to automate the{" "}
              <span className="text-gradient-slow">work behind the work?</span>
            </h2>
          </StaggerItem>

          <StaggerItem direction="up" delay={0.16}>
            <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
              Give us 30 minutes and one repetitive operational bottleneck. We&apos;ll show you how Cadence handles it end-to-end — without migrating your software.
            </p>
          </StaggerItem>

          {/* The Brightest Element on Screen: Tactical Magnetic Button */}
          <StaggerItem direction="up" delay={0.24}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                variant="primary"
                className="group px-9 py-4 text-base font-semibold shadow-[0_0_50px_-8px_rgba(110,231,183,0.45)] hover:shadow-[0_0_60px_-4px_rgba(110,231,183,0.7)] transition-shadow"
              >
                <span className="flex items-center gap-2.5 font-heading">
                  <span>Start Free Automation Audit</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
              </MagneticButton>
            </div>
          </StaggerItem>

          <StaggerItem direction="fade" delay={0.32}>
            <p className="mt-6 text-xs sm:text-sm font-mono text-text-subtle">
              No credit card required • 30-min call • Actionable blueprint within 48 hours
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* 3 Step Milestone Cards */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {auditMilestones.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-surface/80 border border-border/80 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-text-subtle">{m.step}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-text mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}