"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingCard } from "@/components/motion/FloatingCards";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, X, Loader2, ChevronRight } from "lucide-react";

const examples = [
  {
    id: "whatsapp-orders",
    title: "WhatsApp → Orders",
    subtitle: "Unstructured messages become structured order data",
    input: {
      label: "Incoming WhatsApp",
      icon: "📱",
      content: `Rajesh: Hi, need 50 units of Widget Pro
Delivery to: 42 MG Road, Bangalore
Payment: UPI on delivery
Need by: This Friday`,
      metadata: "Received 2 min ago • +91 98765 43210",
    },
    output: {
      label: "Structured Order",
      icon: "📦",
      content: `ORDER-2024-03-8921
Customer: Rajesh Kumar
Phone: +91 98765 43210
Items:
  • Widget Pro × 50 — ₹225,000
Delivery: 42 MG Road, Bangalore
Payment: UPI on delivery
Due: 2024-03-15 (Friday)
Status: Confirmed`,
      metadata: "Created automatically • 99.2% confidence",
    },
    flow: [
      { step: "Message received", status: "complete" },
      { step: "Intent detected: New order", status: "complete" },
      { step: "Entities extracted", status: "complete" },
      { step: "Order created in ERP", status: "complete" },
      { step: "Confirmation sent", status: "pending" },
    ],
  },
  {
    id: "invoice-records",
    title: "Invoice → Records",
    subtitle: "OCR extracts line items, validates against POs",
    input: {
      label: "Supplier PDF Invoice",
      icon: "📄",
      content: `ACME SUPPLIES LTD.
Invoice: INV-2024-008921
Date: 10 Mar 2024
PO Ref: PO-2024-0456

Item                    Qty    Rate      Amount
Widget Pro (SKU: WP-100) 100   ₹450.00  ₹45,000
Widget Std (SKU: WS-200)  50   ₹320.00  ₹16,000
GST (18%)                           ₹10,980
Total                              ₹71,980`,
      metadata: "Uploaded via email • 3 pages",
    },
    output: {
      label: "Validated Record",
      icon: "✅",
      content: `REC-2024-03-8921
Vendor: Acme Supplies Ltd.
PO Match: PO-2024-0456 ✓
Line Items:
  • WP-100 × 100 @ ₹450 — ₹45,000 ✓
  • WS-200 × 50 @ ₹320 — ₹16,000 ✓
GST: ₹10,980 ✓
Total: ₹71,980 ✓
Status: Approved for payment`,
      metadata: "3-way match passed • Ready to pay",
    },
    flow: [
      { step: "PDF uploaded", status: "complete" },
      { step: "OCR + LLM extraction", status: "complete" },
      { step: "PO matching (3-way)", status: "complete" },
      { step: "GST validation", status: "complete" },
      { step: "Approved → ERP", status: "pending" },
    ],
  },
  {
    id: "payments-reconciliation",
    title: "Payments → Reconciliation",
    subtitle: "Payment matches invoice, flags ₹500 variance",
    input: {
      label: "Bank Statement Entry",
      icon: "💳",
      content: `UPI Transaction
Amount: ₹71,480.00
Ref: UPI4567891230
From: Acme Supplies Ltd.
Date: 14 Mar 2024 14:32
Note: INV-8921 partial`,
      metadata: "Auto-fetched from bank API",
    },
    output: {
      label: "Reconciliation Result",
      icon: "⚖️",
      content: `RECON-2024-03-8921
Invoice: INV-2024-008921
Expected: ₹71,980.00
Received: ₹71,480.00
Variance: ₹500.00 (0.7%)
Match: Partial — Review required
Matched Items: 2/2
GST: Matched`,
      metadata: "Exception queued • Manual review",
    },
    flow: [
      { step: "Payment detected", status: "complete" },
      { step: "Invoice linked: INV-8921", status: "complete" },
      { step: "Amount compared", status: "complete" },
      { step: "₹500 variance found", status: "warning" },
      { step: "Flagged for review", status: "pending" },
    ],
  },
];

function StatusBadge({ status }: { status: "complete" | "pending" | "warning" }) {
  const configs = {
    complete: { color: "#22C55E", bg: "rgba(34, 197, 94, 0.15)", label: "Done", icon: Check },
    pending: { color: "#9EA0A8", bg: "rgba(158, 160, 168, 0.15)", label: "Pending", icon: Loader2 },
    warning: { color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", label: "Review", icon: X },
  };
  const config = configs[status];
  const Icon = config.icon;
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: config.bg, color: config.color }}>
      <Icon className="w-3 h-3" aria-hidden="true" />
      {config.label}
    </span>
  );
}

function DataPanel({ data, isInput }: { data: typeof examples[0]["input"]; isInput: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: isInput ? "rgba(37, 211, 102, 0.1)" : "rgba(34, 197, 94, 0.1)", border: isInput ? "1px solid rgba(37, 211, 102, 0.2)" : "1px solid rgba(34, 197, 94, 0.2)" }}>
        <span className="text-2xl">{data.icon}</span>
        <div>
          <p className="font-heading font-medium text-sm text-text">{data.label}</p>
          <p className="text-xs text-text-subtle">{data.metadata}</p>
        </div>
      </div>
      <pre className="p-4 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto" style={{ background: "#050506", border: "1px solid var(--color-border)", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
        {data.content}
      </pre>
    </div>
  );
}

function FlowSteps({ steps }: { steps: typeof examples[0]["flow"] }) {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--color-border)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-xs font-mono" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)" }}>
            {index + 1}
          </div>
          <span className="text-sm text-text flex-1">{step.step}</span>
          <StatusBadge status={step.status} />
        </motion.div>
      ))}
    </div>
  );
}

function ExampleCard({ example, index }: { example: typeof examples[0]; index: number }) {
  return (
    <FloatingCard depth={2} speed={1} className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="font-mono text-xs text-text-subtle mb-2 block">Example {index + 1}</span>
          <h3 className="font-heading font-semibold text-xl text-text mb-1">{example.title}</h3>
          <p className="text-text-muted text-sm">{example.subtitle}</p>
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(110, 231, 183, 0.1)", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
          <ArrowRight className="w-5 h-5 text-accent" aria-hidden="true" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <DataPanel data={example.input} isInput={true} />
        <DataPanel data={example.output} isInput={false} />
      </div>

      <div className="pt-4 border-t border-border/50">
        <FlowSteps steps={example.flow} />
      </div>
    </FloatingCard>
  );
}

export function RealExamples() {
  return (
    <section className="relative section overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="fade" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{ background: "rgba(110, 231, 183, 0.1)", color: "#6EE7B7", border: "1px solid rgba(110, 231, 183, 0.2)" }}>
              Real transformations
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-heading font-black leading-[1.1] text-text mb-4">
              Real <span className="text-gradient-accent">examples</span>, not demos
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-text-muted">
              These are actual workflows Cadence handles today. Names changed, logic unchanged.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <StaggerItem key={example.id} direction="up" delay={index * 0.1}>
              <ExampleCard example={example} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 text-center">
          <ScrollReveal direction="fade" delay={0.5}>
            <button className="btn-secondary group inline-flex items-center gap-2">
              <span>View all workflow templates</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}