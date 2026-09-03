"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingCard } from "@/components/motion/FloatingCards";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, RotateCcw, Eye, MessageSquare } from "lucide-react";

const exceptionSteps = [
  {
    id: "payment",
    label: "Payment Received",
    amount: "₹48,500",
    icon: "💳",
    color: "#3B82F6",
    description: "UPI payment auto-matched to invoice",
    status: "matched",
  },
  {
    id: "invoice",
    label: "Invoice #8921",
    amount: "₹49,000",
    icon: "📄",
    color: "#22C55E",
    description: "PO-matched, GST validated, approved",
    status: "matched",
  },
  {
    id: "mismatch",
    label: "Variance Detected",
    amount: "₹500 short",
    icon: "⚠️",
    color: "#F59E0B",
    description: "Payment ₹500 less than invoice total",
    status: "exception",
  },
  {
    id: "review",
    label: "Review Required",
    amount: "Human decision",
    icon: "👤",
    color: "#A855F7",
    description: "Route to AP team with context",
    status: "pending",
  },
];

function ExceptionFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "flow" | "highlight" | "resolve">("idle");

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase("flow");
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % exceptionSteps.length);
        setAnimationPhase("highlight");
      }, 800);
      setTimeout(() => {
        setAnimationPhase("idle");
      }, 2000);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 relative z-10">
        {exceptionSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col lg:flex-1 items-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <motion.div
              className="relative flex flex-col items-center group"
              style={{ zIndex: 10 - index }}
            >
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-2xl mb-4 relative overflow-hidden"
                style={{
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  boxShadow: activeStep === index && animationPhase === "highlight"
                    ? `0 0 40px -5px ${step.color}80, 0 0 0 4px ${step.color}30`
                    : "none",
                }}
                animate={{
                  scale: activeStep === index && animationPhase === "highlight" ? 1.1 : 1,
                  rotate: activeStep === index && animationPhase === "flow" ? [0, -3, 3, 0] : 0,
                }}
                transition={{
                  duration: animationPhase === "flow" ? 0.5 : 0.3,
                  repeat: animationPhase === "flow" ? 1 : 0,
                }}
              >
                <span className="text-3xl relative z-10">{step.icon}</span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${step.color}30, transparent)` }}
                  animate={{ opacity: activeStep === index && animationPhase === "highlight" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="text-center w-full max-w-xs">
                <p className="font-heading font-semibold text-text mb-1">{step.label}</p>
                <p className="text-2xl font-heading font-bold mb-2" style={{ color: step.color }}>{step.amount}</p>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: step.status === "matched" ? "rgba(34, 197, 94, 0.2)" : step.status === "exception" ? "rgba(245, 158, 11, 0.2)" : "rgba(168, 85, 247, 0.2)",
                  color: step.status === "matched" ? "#22C55E" : step.status === "exception" ? "#F59E0B" : "#A855F7",
                  border: step.status === "matched" ? "1px solid rgba(34, 197, 94, 0.3)" : step.status === "exception" ? "1px solid rgba(245, 158, 11, 0.3)" : "1px solid rgba(168, 85, 247, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: activeStep >= index ? 1 : 0, scale: activeStep >= index ? 1 : 0.8 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
              >
                {step.status === "matched" && <CheckCircle className="w-3 h-3" aria-hidden="true" />}
                {step.status === "exception" && <AlertTriangle className="w-3 h-3" aria-hidden="true" />}
                {step.status === "pending" && <RotateCcw className="w-3 h-3 animate-spin" aria-hidden="true" />}
                <span>{step.status === "matched" ? "Matched" : step.status === "exception" ? "Exception" : "Pending"}</span>
              </motion.div>
            </motion.div>

            {index < exceptionSteps.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-[70px] left-1/2 w-full h-px -translate-x-1/2"
                style={{ background: "linear-gradient(90deg, var(--color-border), var(--color-accent/30), var(--color-border))" }}
                aria-hidden="true"
              >
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${exceptionSteps[index].color}, ${exceptionSteps[index + 1].color})` }}
                  initial={{ width: 0 }}
                  animate={{ width: activeStep > index ? "100%" : activeStep === index && animationPhase === "flow" ? "50%" : "0%" }}
                  transition={{ duration: animationPhase === "flow" ? 1.5 : 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col gap-3 mt-8">
        {exceptionSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-center gap-4 p-4 rounded-xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
              <span className="text-xl">{step.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-text">{step.label}</p>
              <p className="text-sm text-text-muted">{step.amount}</p>
            </div>
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
              style={{
                background: step.status === "matched" ? "rgba(34, 197, 94, 0.2)" : step.status === "exception" ? "rgba(245, 158, 11, 0.2)" : "rgba(168, 85, 247, 0.2)",
                color: step.status === "matched" ? "#22C55E" : step.status === "exception" ? "#F59E0B" : "#A855F7",
              }}
              animate={{ opacity: activeStep >= index ? 1 : 0.4 }}
            >
              {step.status === "matched" && <CheckCircle className="w-3 h-3" aria-hidden="true" />}
              {step.status === "exception" && <AlertTriangle className="w-3 h-3" aria-hidden="true" />}
              {step.status === "pending" && <RotateCcw className="w-3 h-3 animate-spin" aria-hidden="true" />}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExceptionDetail() {
  const [expanded, setExpanded] = useState(false);

  return (
    <FloatingCard depth={3} className="max-w-2xl mx-auto mt-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(168, 85, 247, 0.08))", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl" style={{ background: "rgba(245, 158, 11, 0.2)", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
              <AlertTriangle className="w-6 h-6" style={{ color: "#F59E0B" }} aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading font-semibold text-text">Exception Detected</p>
              <p className="text-sm text-text-muted">Automation handles routine work. People handle important decisions.</p>
            </div>
          </div>
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg hover:bg-surface-elevated transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={expanded ? "Collapse details" : "Expand details"}
            aria-expanded={expanded}
          >
            <RotateCcw className="w-5 h-5 text-text-muted" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden="true" />
          </motion.button>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="space-y-4 pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                <p className="text-xs text-text-subtle uppercase tracking-wide mb-1">Payment Received</p>
                <p className="font-heading font-bold text-2xl text-text" style={{ color: "#3B82F6" }}>₹48,500</p>
                <p className="text-xs text-text-muted mt-1">UPI • 14 Mar 2024 • Ref: UPI456789</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                <p className="text-xs text-text-subtle uppercase tracking-wide mb-1">Invoice Amount</p>
                <p className="font-heading font-bold text-2xl text-text" style={{ color: "#22C55E" }}>₹49,000</p>
                <p className="text-xs text-text-muted mt-1">INV-2024-008921 • PO-2024-0456</p>
              </div>
            </div>

            <div className="p-4 rounded-xl relative" style={{ background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-text-subtle uppercase tracking-wide">Variance</span>
                <span className="font-heading font-bold text-lg" style={{ color: "#F59E0B" }}>₹500 short (1.02%)</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(245, 158, 11, 0.2)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #F59E0B, #EF4444)", width: "1.02%" }}
                  initial={{ width: 0 }}
                  animate={{ width: "1.02%" }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              <p className="text-xs text-text-muted mt-2">Tolerance threshold: 0.5% — Auto-approved within tolerance, flagged outside</p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.2)" }}>
              <MessageSquare className="w-5 h-5 flex-shrink-0" style={{ color: "#A855F7" }} aria-hidden="true" />
              <div className="flex-1">
                <p className="font-medium text-text">Routed to Accounts Payable</p>
                <p className="text-sm text-text-muted">Priya Sharma • AP Lead • Context: Full invoice + payment + PO attached</p>
              </div>
              <Eye className="w-5 h-5" style={{ color: "#A855F7" }} aria-hidden="true" />
            </div>

            <div className="flex gap-3 pt-2">
              <button className="btn-primary flex-1">Approve & Post</button>
              <button className="btn-secondary flex-1">Request Clarification</button>
            </div>
          </div>
        </motion.div>
      </div>
    </FloatingCard>
  );
}

export function BuiltForExceptions() {
  return (
    <section className="relative section overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="fade" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{ background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
              The differentiator
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-heading font-black leading-[1.1] text-text mb-4">
              Built for <span className="text-gradient-accent">exceptions</span>, not just the happy path
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-text-muted">
              Most automation fails at edge cases. Cadence is designed to catch them, route them, and learn from them.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3} className="max-w-4xl mx-auto">
          <ExceptionFlow />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <ExceptionDetail />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StaggerContainer staggerDelay={0.1}>
            {[
              { icon: CheckCircle, color: "#22C55E", title: "99.2% straight-through", desc: "Routine work flows without human touch" },
              { icon: AlertTriangle, color: "#F59E0B", title: "Smart exception routing", desc: "Right person, full context, every time" },
              { icon: RotateCcw, color: "#3B82F6", title: "Continuous learning", desc: "Each exception trains the next automation" },
            ].map((item, index) => (
              <StaggerItem key={index} direction="up">
                <FloatingCard depth={1} className="p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} aria-hidden="true" />
                  </div>
                  <h4 className="font-heading font-semibold text-text mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </FloatingCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}