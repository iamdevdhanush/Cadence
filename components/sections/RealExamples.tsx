"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, CreditCard, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExampleCase {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  description: string;
  input: {
    sourceName: string;
    sourceType: string;
    time: string;
    fields: { label: string; value: string }[];
  };
  output: {
    targetSystem: string;
    voucherId: string;
    verification: string;
    fields: { label: string; value: string }[];
  };
}

const exampleCases: ExampleCase[] = [
  {
    id: "whatsapp",
    tabLabel: "WhatsApp Order",
    category: "Sales Operations",
    title: "Unstructured chat to verified sales order",
    description: "Customer sends raw quantities and delivery requirements over WhatsApp. Cadence parses intent, validates inventory, and creates the ERP sales order in seconds.",
    input: {
      sourceName: "WhatsApp Business API",
      sourceType: "Verified Customer Thread",
      time: "2 mins ago",
      fields: [
        { label: "Customer", value: "Rajesh Kumar • Rajesh Ent." },
        { label: "Incoming Message", value: "'Need 50 units of Widget Pro by Friday. COD to Mumbai warehouse.'" },
        { label: "Attachment", value: "PO_Reference_4901.pdf (Optional)" },
        { label: "Channel Auth", value: "Verified Business Number (+91 98765 43210)" },
      ],
    },
    output: {
      targetSystem: "Tally Prime & SAP ERP",
      voucherId: "SO-2024-8921",
      verification: "Inventory Allocated • Credit Limit OK",
      fields: [
        { label: "Customer Account", value: "Rajesh Enterprises (CUST-402)" },
        { label: "Line Items", value: "50x Widget Pro (SKU: WP-100)" },
        { label: "Total Payable", value: "₹2,25,000 + 18% GST" },
        { label: "Delivery Target", value: "Friday, 15 March 2024" },
      ],
    },
  },
  {
    id: "invoice",
    tabLabel: "Supplier Invoice",
    category: "Accounts Payable",
    title: "Supplier PDF to 3-way matched voucher",
    description: "Inbound vendor PDF invoices are parsed down to line items and tax identifiers, cross-matched against existing purchase orders, and scheduled for payment.",
    input: {
      sourceName: "Headless Mailbox Intake",
      sourceType: "Scanned Tax Invoice (PDF)",
      time: "8 mins ago",
      fields: [
        { label: "Vendor", value: "Acme Industrial Supplies Ltd." },
        { label: "Document", value: "INV-2024-008921.pdf (3 pages)" },
        { label: "PO Reference", value: "PO-2024-0456" },
        { label: "GSTIN", value: "27AAACA1234F (Maharashtra)" },
      ],
    },
    output: {
      targetSystem: "Accounts Payable Ledger",
      voucherId: "AP-VOUCHER-992",
      verification: "3-Way Match Passed (0.0% Variance)",
      fields: [
        { label: "Matched PO", value: "PO-2024-0456 (100% matched)" },
        { label: "Line Items", value: "12 industrial bearing sets" },
        { label: "Net Payable", value: "₹71,980.00 (Net 30 terms)" },
        { label: "Due Date", value: "14 April 2024" },
      ],
    },
  },
  {
    id: "banking",
    tabLabel: "Bank Auto-Recon",
    category: "Treasury",
    title: "Bank statement feeds to reconciled ledger",
    description: "Daily bank statement webhooks and UPI settlement reports are matched line-by-line against outstanding receivables with zero manual spreadsheet work.",
    input: {
      sourceName: "HDFC NetBanking Feed",
      sourceType: "UPI Settlement Webhook",
      time: "15 mins ago",
      fields: [
        { label: "Transaction ID", value: "UPI/CR/4567891230/YESB" },
        { label: "Credit Amount", value: "₹71,980.00" },
        { label: "Bank Reference", value: "INV-8921 pymt clearance" },
        { label: "Timestamp", value: "Today, 14:15:02 IST" },
      ],
    },
    output: {
      targetSystem: "General Ledger Reconciliation",
      voucherId: "JV-2024-3902",
      verification: "Reconciliation Complete",
      fields: [
        { label: "Cleared Invoice", value: "INV-2024-008921" },
        { label: "Variance", value: "₹0.00 (Exact Match)" },
        { label: "Account Debit", value: "HDFC Current Account" },
        { label: "Account Credit", value: "Acme Industrial Sundry Creditors" },
      ],
    },
  },
];

export function RealExamples() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = exampleCases[activeTab];

  return (
    <section id="real-examples" className="section relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="container px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-[620px] mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
            <span>Production Examples</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Real workflows. Believable software.
          </h2>
          <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed">
            Every screen below reflects an authentic production workflow running inside Indian distribution and manufacturing businesses today.
          </p>
        </div>

        {/* Tab Switcher (Mercury style) */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {exampleCases.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap",
                  isActive
                    ? "bg-[#141619] text-white border border-[rgba(255,255,255,0.14)]"
                    : "text-[#9EA0A8] hover:text-white bg-[#0C0D0F] border border-[rgba(255,255,255,0.06)]"
                )}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Production Interface Viewport */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0C0D0F] p-6 sm:p-8">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[rgba(255,255,255,0.06)] gap-3">
            <div>
              <span className="text-xs font-mono text-[#63E6BE] uppercase tracking-wider block mb-1">
                {activeCase.category}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {activeCase.title}
              </h3>
            </div>
            <span className="text-xs text-[#9EA0A8] font-mono">
              Status: Live Pipeline
            </span>
          </div>

          {/* Side-by-Side Product Panel (Mercury / Ramp style) */}
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Left: Inbound Source Data Screen */}
            <div className="rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-xs font-medium text-white">{activeCase.input.sourceName}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#60636C]">{activeCase.input.time}</span>
                </div>

                <div className="space-y-3">
                  {activeCase.input.fields.map((f, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-[11px] text-[#60636C] block mb-0.5">{f.label}</span>
                      <span className="text-[#9EA0A8] font-mono">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(255,255,255,0.04)] text-[11px] text-[#60636C] flex items-center justify-between">
                <span>Raw Inbound Stream</span>
                <span>Unstructured Payload</span>
              </div>
            </div>

            {/* Right: Verified System Record */}
            <div className="rounded-lg bg-[#141619] border border-[#63E6BE]/20 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#63E6BE]" />
                    <span className="text-xs font-medium text-white">{activeCase.output.targetSystem}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#63E6BE] bg-[#63E6BE]/10 px-2 py-0.5 rounded">
                    {activeCase.output.voucherId}
                  </span>
                </div>

                <div className="space-y-3">
                  {activeCase.output.fields.map((f, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-[11px] text-[#60636C] block mb-0.5">{f.label}</span>
                      <span className="text-white font-mono">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(255,255,255,0.04)] text-[11px] text-[#63E6BE] flex items-center justify-between">
                <span>{activeCase.output.verification}</span>
                <span className="font-mono">Audit Complete</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}