"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  FileCode2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  stage: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
  mockup: {
    header: string;
    badge: string;
    details: { label: string; val: string }[];
  };
}

const steps: WorkflowStep[] = [
  {
    id: "capture",
    stage: "Capture",
    stepNumber: "01",
    title: "Ingest from every source",
    description:
      "Direct webhooks for WhatsApp Business, headless mailbox parsers for supplier invoices, and secure folders for Excel drops.",
    icon: MessageSquare,
    mockup: {
      header: "Inbound Stream",
      badge: "Webhook Active",
      details: [
        { label: "Source", val: "WhatsApp Business API" },
        { label: "Payload", val: "Text & Image attachments" },
        { label: "Status", val: "Ingested without delay" },
      ],
    },
  },
  {
    id: "understand",
    stage: "Understand",
    stepNumber: "02",
    title: "Structure raw inputs",
    description:
      "Layout-aware extraction isolates line items, quantities, tax breakdowns, and payment references into standard schemas.",
    icon: FileCode2,
    mockup: {
      header: "Schema Normalization",
      badge: "JSON Valid",
      details: [
        { label: "Document", val: "Tax Invoice PDF" },
        { label: "Extraction", val: "12 Line items mapped" },
        { label: "GSTIN", val: "27AAACA1234F verified" },
      ],
    },
  },
  {
    id: "validate",
    stage: "Validate",
    stepNumber: "03",
    title: "3-Way verification",
    description:
      "Cross-checks amounts against your Purchase Orders, vendor master records, and tolerance rules. Flags anomalies for your team.",
    icon: ShieldCheck,
    mockup: {
      header: "Validation Engine",
      badge: "0.0% Variance",
      details: [
        { label: "PO Match", val: "PO-2024-0456 matched" },
        { label: "Rate Card", val: "Contract pricing confirmed" },
        { label: "Exception", val: "None. Tolerance cleared" },
      ],
    },
  },
  {
    id: "automate",
    stage: "Automate",
    stepNumber: "04",
    title: "Post clean records",
    description:
      "Creates balanced journal entries in Tally, SAP, or Zoho Books, updates inventory, and notifies vendors with delivery receipts.",
    icon: CheckCircle2,
    mockup: {
      header: "Ledger Execution",
      badge: "ERP Synced",
      details: [
        { label: "Voucher", val: "JV-2024-8921 posted" },
        { label: "Inventory", val: "Stock allocated" },
        { label: "Audit Log", val: "Cryptographically signed" },
      ],
    },
  },
];

export function WorkflowEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  // Gentle, restrained automatic flow
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="workflow" className="section relative border-t border-[rgba(255,255,255,0.06)]" ref={containerRef}>
      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[620px] mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
            <span>Horizontal Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            One continuous, verified pipeline.
          </h2>
          <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed">
            From chaotic unformatted messages to synchronized general ledger entries, your operational flow moves in four transparent stages.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="hidden lg:grid grid-cols-4 relative mb-12">
          {/* Subtle horizontal connecting line */}
          <div className="absolute top-5 left-8 right-8 h-[1px] bg-[rgba(255,255,255,0.08)] -z-0" />
          
          {/* Animated subtle progress indicator line */}
          <motion.div
            className="absolute top-5 left-8 h-[1px] bg-[#63E6BE] -z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 88}%` }}
          />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-start text-left pr-6 relative z-10 focus:outline-none"
              >
                {/* Node indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center border transition-all text-xs font-mono font-medium",
                      isActive
                        ? "bg-[#141619] border-[#63E6BE] text-white"
                        : isPassed
                        ? "bg-[#0C0D0F] border-[rgba(255,255,255,0.16)] text-[#63E6BE]"
                        : "bg-[#0C0D0F] border-[rgba(255,255,255,0.08)] text-[#60636C]"
                    )}
                  >
                    {step.stepNumber}
                  </div>
                  <div>
                    <span
                      className={cn(
                        "text-xs font-mono tracking-wider uppercase block",
                        isActive ? "text-[#63E6BE]" : "text-[#60636C]"
                      )}
                    >
                      Stage {step.stepNumber}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        isActive ? "text-white" : "text-[#9EA0A8] group-hover:text-white"
                      )}
                    >
                      {step.stage}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Horizontal Timeline Grid / Active Card Display */}
        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between",
                  isActive
                    ? "bg-[#0C0D0F] border-[#63E6BE]/40 shadow-lg"
                    : "bg-[#0C0D0F]/60 border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)]"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#60636C] uppercase">
                      0{idx + 1} // {step.stage}
                    </span>
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        isActive ? "bg-[#63E6BE]" : "bg-[rgba(255,255,255,0.1)]"
                      )}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#9EA0A8] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Micro Realistic SaaS UI */}
                <div className="rounded-lg bg-[#050607] border border-[rgba(255,255,255,0.06)] p-3 text-[11px] font-mono">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[rgba(255,255,255,0.06)]">
                    <span className="text-white font-medium">{step.mockup.header}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-[#9EA0A8]">
                      {step.mockup.badge}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {step.mockup.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex justify-between items-center text-[10px]">
                        <span className="text-[#60636C]">{detail.label}</span>
                        <span className="text-[#9EA0A8] truncate max-w-[120px]">{detail.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}