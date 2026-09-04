"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, CheckCircle2, Clock, FileCode, ChevronRight, CornerDownRight } from "lucide-react";

interface ExampleCase {
  id: string;
  title: string;
  category: string;
  timestamp: string;
  input: {
    channel: string;
    channelColor: string;
    badge: string;
    fields: { label: string; value: string }[];
  };
  output: {
    channel: string;
    channelColor: string;
    badge: string;
    fields: { label: string; value: string; isHighlight?: boolean }[];
  };
  pipelineStatus: string;
}

const exampleCases: ExampleCase[] = [
  {
    id: "whatsapp-to-order",
    title: "WhatsApp Order Intake",
    category: "Sales Operations",
    timestamp: "Received 2m ago via WhatsApp API",
    input: {
      channel: "WhatsApp Inbound",
      channelColor: "#25D366",
      badge: "Raw Customer Message",
      fields: [
        { label: "Sender", value: "Rajesh Kumar (+91 98765 43210)" },
        { label: "Text", value: "'Send 50 units of Widget Pro by Friday. COD to Mumbai warehouse.'" },
        { label: "Channel", value: "Verified Business Channel" },
      ],
    },
    output: {
      channel: "ERP Sales Order",
      channelColor: "#10B981",
      badge: "SO-2024-8921 Created",
      fields: [
        { label: "Customer", value: "Rajesh Enterprises (CUST-402)" },
        { label: "Line Items", value: "50x Widget Pro (SKU: WP-100)", isHighlight: true },
        { label: "Subtotal", value: "₹225,000 + GST (18%)", isHighlight: true },
        { label: "Delivery Due", value: "Friday, 15 Mar 2024" },
      ],
    },
    pipelineStatus: "Order synced to Tally • Confirmation SMS dispatched",
  },
  {
    id: "invoice-to-bill",
    title: "Supplier PDF Processing",
    category: "Accounts Payable",
    timestamp: "Processed 8m ago via Headless Mail",
    input: {
      channel: "Supplier Email PDF",
      channelColor: "#EF4444",
      badge: "Scanned Tax Invoice",
      fields: [
        { label: "Vendor", value: "Acme Industrial Supplies Ltd." },
        { label: "Document", value: "INV-2024-008921.pdf (3 pages)" },
        { label: "PO Reference", value: "PO-2024-0456" },
      ],
    },
    output: {
      channel: "Verified AP Voucher",
      channelColor: "#38BDF8",
      badge: "3-Way Match Passed",
      fields: [
        { label: "Vendor Master", value: "Acme Industrial (GSTIN: 27AAACA1234F)" },
        { label: "PO Verification", value: "PO-0456 matched 100%", isHighlight: true },
        { label: "Invoice Amount", value: "₹71,980.00", isHighlight: true },
        { label: "Payment Due", value: "30 Days (Net 30)" },
      ],
    },
    pipelineStatus: "Scheduled for payment batch • Zero human touch",
  },
  {
    id: "bank-to-ledger",
    title: "Bank Statement Auto-Recon",
    category: "Treasury Operations",
    timestamp: "Auto-fetched 15m ago via NetBanking",
    input: {
      channel: "Bank Statement Feed",
      channelColor: "#6366F1",
      badge: "UPI Credit Webhook",
      fields: [
        { label: "Txn ID", value: "UPI/CR/4567891230/YESB" },
        { label: "Credit Amount", value: "₹71,980.00" },
        { label: "Remark", value: "INV-8921 pymt clearance" },
      ],
    },
    output: {
      channel: "General Ledger Entry",
      channelColor: "#A855F7",
      badge: "Reconciliation Locked",
      fields: [
        { label: "Cleared Bill", value: "INV-2024-008921" },
        { label: "Variance", value: "₹0.00 (Exact Match)", isHighlight: true },
        { label: "Journal #", value: "JV-2024-3902", isHighlight: true },
        { label: "Ledger State", value: "Bank Acc Dr / Debtor Cr" },
      ],
    },
    pipelineStatus: "Ledger balanced • Tax compliance log updated",
  },
];

export function RealExamples() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="real-examples" className="relative section overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="fade">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-sky-500/10 text-sky-300 border border-sky-500/20 mb-4">
              <span>Production Workflows</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-text mb-4">
              Real software. <span className="text-gradient-slow">Real operational logic.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Inspect how Cadence digests noisy unstructured inputs and yields pristine, verifiable transactions in production.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Real Software Window Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {exampleCases.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex flex-col justify-between rounded-2xl bg-surface/90 border border-border/80 overflow-hidden shadow-elevation-2 hover:border-text-muted/40 hover:shadow-elevation-3 transition-all"
            >
              {/* Window Title Bar */}
              <div className="px-5 py-3.5 border-b border-border/70 bg-surface-elevated/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
                  </div>
                  <span className="text-xs font-mono text-text-muted pl-2 font-medium">
                    {item.title}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-text-subtle uppercase px-2 py-0.5 rounded bg-surface border border-border">
                  {item.category}
                </span>
              </div>

              {/* Window Body: Input -> Output flow */}
              <div className="p-5 flex-1 flex flex-col gap-4">
                {/* Timestamp line */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-subtle">
                  <Clock className="w-3 h-3" />
                  <span>{item.timestamp}</span>
                </div>

                {/* Left (Inbound Input Window) */}
                <div className="rounded-xl p-3.5 bg-black/40 border border-border/60">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: item.input.channelColor }}
                    >
                      {item.input.channel}
                    </span>
                    <span className="text-[10px] font-mono text-text-subtle px-1.5 py-0.5 rounded bg-surface border border-border">
                      {item.input.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    {item.input.fields.map((f, i) => (
                      <div key={i} className="flex items-start justify-between gap-2 text-text-muted">
                        <span className="text-text-subtle text-[11px] flex-shrink-0">{f.label}:</span>
                        <span className="text-right truncate text-[11px] text-text">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex items-center justify-center my-0.5 text-text-subtle">
                  <CornerDownRight className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Right (Outbound ERP Output Window) */}
                <div className="rounded-xl p-3.5 bg-emerald-950/10 border border-emerald-500/25">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: item.output.channelColor }}
                    >
                      {item.output.channel}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      {item.output.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    {item.output.fields.map((f, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-start justify-between gap-2",
                          f.isHighlight ? "text-emerald-300 font-medium" : "text-text-muted"
                        )}
                      >
                        <span className="text-text-subtle text-[11px] flex-shrink-0">{f.label}:</span>
                        <span className="text-right truncate text-[11px]">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Status Pill */}
              <div className="px-5 py-3 border-t border-border/70 bg-surface-elevated/40 flex items-center gap-2 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] text-text-subtle truncate">{item.pipelineStatus}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}