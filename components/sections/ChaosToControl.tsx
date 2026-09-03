"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ScrollProgress, ScrollTransform } from "@/components/motion/ParallaxGrid";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  FileText,
  Table,
  CreditCard,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const chaosItems = [
  { id: "whatsapp", label: "WhatsApp Orders", icon: MessageSquare, color: "#25D366", bg: "rgba(37, 211, 102, 0.1)", border: "rgba(37, 211, 102, 0.2)", content: "📱 New order: 2x Widget Pro\n📍 Delivery: Mumbai\n💰 ₹4,500 COD\n⏰ Needed by Friday" },
  { id: "invoice", label: "Supplier Invoice", icon: FileText, color: "#EF4444", bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.2)", content: "INV-2024-8921\nAcme Supplies Ltd.\n₹48,500.00\nDue: 15th March 2024\nGSTIN: 27AAACA1234F1Z5" },
  { id: "spreadsheet", label: "Inventory Sheet", icon: Table, color: "#217346", bg: "rgba(33, 115, 70, 0.1)", border: "rgba(33, 115, 70, 0.2)", content: "SKU | QTY | LOC | REORDER\nWID-PRO | 12 | A-3 | 20\nWID-STD | 45 | B-1 | 30\nGAD-XL | 8 | C-2 | 15" },
  { id: "payment", label: "Payment Screenshot", icon: CreditCard, color: "#6366F1", bg: "rgba(99, 102, 241, 0.1)", border: "rgba(99, 102, 241, 0.2)", content: "UPI Transaction\n₹48,500 ✓\nRef: UPI1234567890\nFrom: Rajesh Kumar\nDate: 14 Mar 2024 14:32" },
];

const organizedItems = [
  { id: "capture", label: "CAPTURE", icon: MessageSquare, color: "#25D366", description: "WhatsApp, Email, PDF, API" },
  { id: "understand", label: "UNDERSTAND", icon: FileText, color: "#3B82F6", description: "OCR + LLM extraction" },
  { id: "validate", label: "VALIDATE", icon: Table, color: "#F59E0B", description: "Rules engine + human review" },
  { id: "automate", label: "AUTOMATE", icon: CreditCard, color: "#A855F7", description: "ERP sync + payment match" },
];

function ChaosCard({ item, index, progress }: { item: typeof chaosItems[0]; index: number; progress: number }) {
  const initialX = (index % 2 === 0 ? -1 : 1) * (100 + index * 30);
  const initialY = (index < 2 ? -1 : 1) * (80 + index * 20);
  const initialRotate = (index % 3 - 1) * 15;

  const x = initialX * (1 - progress);
  const y = initialY * (1 - progress);
  const rotate = initialRotate * (1 - progress);
  const opacity = 0.3 + 0.7 * progress;
  const scale = 0.8 + 0.2 * progress;

  return (
    <motion.div
      className={cn(
        "relative flex flex-col p-5 rounded-xl",
        "transition-colors duration-500",
        "surface-card"
      )}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
        opacity,
        background: item.bg,
        borderColor: item.border,
        willChange: "transform, opacity",
        zIndex: 10 - index,
      }}
      transition={{ duration: 0 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${item.color}20` }}>
          <item.icon className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
          <span className="font-medium text-sm text-text" style={{ color: item.color }}>{item.label}</span>
        </div>
        <span className="text-xs text-text-subtle uppercase tracking-wide">Unstructured</span>
      </div>
      <pre className="text-xs font-mono text-text-muted whitespace-pre-wrap leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
        {item.content}
      </pre>
      <motion.div
        className="absolute bottom-4 right-4"
        animate={{ opacity: progress, x: progress > 0.8 ? 0 : 20 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <ArrowRight className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}

function OrganizedCard({ item, index, progress }: { item: typeof organizedItems[0]; index: number; progress: number }) {
  const delay = index * 0.08;
  const cardProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay * organizedItems.length)));

  return (
    <motion.div
      className={cn(
        "relative flex flex-col p-6 rounded-xl h-full",
        "surface-card overflow-hidden group"
      )}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{
        opacity: cardProgress,
        y: 0,
        scale: 1,
      }}
      transition={{ duration: 0.6, delay: delay * 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
        <item.icon className="w-6 h-6" style={{ color: item.color }} aria-hidden="true" />
        <span className="font-heading font-semibold text-text">{item.label}</span>
      </div>
      <p className="text-text-muted text-sm mb-6 flex-1">{item.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-text-subtle uppercase tracking-wide">Structured</span>
        <CheckCircle className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
      </div>
    </motion.div>
  );
}

function FlowArrow({ progress, index }: { progress: number; index: number }) {
  const arrowProgress = Math.max(0, Math.min(1, (progress - index * 0.15) / 0.7));
  return (
    <motion.div
      className="flex items-center justify-center h-full px-2"
      animate={{ opacity: arrowProgress }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-border" style={{ transform: `rotate(${index === 1 ? 90 : 0}deg)` }}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </motion.div>
  );
}

export function ChaosToControl() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      const section = document.getElementById("chaos-to-control");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = 1 - (rect.bottom / (rect.height + viewportHeight));
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="chaos-to-control" className="relative section overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container">
        <ScrollReveal direction="fade" delay={0.1} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
            Scroll to transform
          </span>
          <h2 className="font-heading font-black leading-[1.1] text-text mb-4">
            From <span className="text-gradient-accent">chaos</span> to control
          </h2>
          <p className="text-lg text-text-muted">
            Your data exists everywhere. Cadence brings it into one place, structured and actionable.
          </p>
        </ScrollReveal>

        <div className="relative h-[70vh] min-h-[500px] lg:h-[80vh]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translateY(${scrollProgress * -100}px)`,
              willChange: "transform",
            }}
          >
            <div className="relative w-full max-w-5xl px-4">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 relative">
                {chaosItems.map((item, index) => (
                  <ChaosCard key={item.id} item={item} index={index} progress={scrollProgress} />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden">
                <div className="flex flex-col items-center gap-2 text-text-subtle">
                  <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
                  <span className="text-xs">Scroll</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${100 * (1 - scrollProgress)}px)`,
              willChange: "opacity, transform",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div className="w-full max-w-5xl px-4">
              <div className="flex items-center gap-4 lg:gap-8">
                {organizedItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <OrganizedCard item={item} index={index} progress={scrollProgress} />
                    {index < organizedItems.length - 1 && (
                      <FlowArrow progress={scrollProgress} index={index} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 rounded-xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(110, 231, 183, 0.1), rgba(90, 200, 250, 0.1))",
                  border: "1px solid rgba(110, 231, 183, 0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: scrollProgress > 0.7 ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-heading font-medium text-text mb-2">One connected operational flow</p>
                <p className="text-text-muted text-sm">No more copy-pasting. No more missed details. Just work that flows.</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <ScrollProgress start="top bottom" end="bottom top">
            {(progress) => (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                  opacity: progress,
                }}
                animate={{ scaleX: progress }}
                transition={{ duration: 0 }}
              />
            )}
          </ScrollProgress>
        </div>
      </div>
    </section>
  );
}