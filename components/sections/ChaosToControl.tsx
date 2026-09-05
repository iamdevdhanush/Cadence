"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Table, CreditCard, Check, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const rawInputs = [
  {
    id: "whatsapp",
    channel: "WhatsApp",
    icon: MessageSquare,
    badge: "Chat Message",
    source: "+91 98765 43210 (Rajesh)",
    content: "Need 50x Widget Pro by Friday. COD to Bangalore warehouse. Urgent!",
    time: "14:32",
    unifiedRow: {
      type: "Sales Order",
      docRef: "SO-2024-8921",
      customer: "Rajesh Enterprises",
      value: "₹2,25,000",
      status: "Verified",
    },
  },
  {
    id: "pdf",
    channel: "Supplier PDF",
    icon: FileText,
    badge: "Scanned Invoice",
    source: "billing@acmesupplies.com",
    content: "Acme Supplies INV-2024-8921. Total ₹2,25,000. PO Ref: PO-0456. 12 Items.",
    time: "14:30",
    unifiedRow: {
      type: "Tax Invoice",
      docRef: "INV-2024-8921",
      customer: "Acme Industrial",
      value: "₹2,25,000",
      status: "3-Way Match",
    },
  },
  {
    id: "excel",
    channel: "Inventory Sheet",
    icon: Table,
    badge: "Manual XLSX",
    source: "Warehouse_Ops_v3_final.xlsx",
    content: "SKU: WP-100 | Reserved: 50 | In Stock: 420 | Warehouse: BLR-01",
    time: "14:28",
    unifiedRow: {
      type: "Stock Allocation",
      docRef: "STK-BLR-019",
      customer: "Central Warehouse",
      value: "50 Units",
      status: "Reserved",
    },
  },
  {
    id: "payment",
    channel: "UPI Bank Statement",
    icon: CreditCard,
    badge: "Bank Feed",
    source: "HDFC Current A/C #8901",
    content: "UPI Ref: 4567891230. ₹2,25,000 received. Remitter: Rajesh Ent.",
    time: "14:25",
    unifiedRow: {
      type: "Payment Recon",
      docRef: "UPI-4567891230",
      customer: "HDFC NetBanking",
      value: "₹2,25,000",
      status: "Reconciled",
    },
  },
];

export function ChaosToControl() {
  const [isUnified, setIsUnified] = useState(true);

  return (
    <section id="chaos-to-control" className="section relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="container px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
              <span>Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              Disconnected streams become one organized workspace.
            </h2>
            <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed">
              Your business doesn&apos;t run on one tidy API. It runs across chat apps, PDFs, sheets, and bank portals. Cadence harmonizes them into a single coherent system of record.
            </p>
          </div>

          {/* Interactive Toggle Control */}
          <div className="flex items-center bg-[#0C0D0F] border border-[rgba(255,255,255,0.08)] p-1 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setIsUnified(false)}
              className={cn(
                "px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors",
                !isUnified
                  ? "bg-[#141619] text-white shadow"
                  : "text-[#9EA0A8] hover:text-white"
              )}
            >
              Raw Inputs
            </button>
            <button
              onClick={() => setIsUnified(true)}
              className={cn(
                "px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors",
                isUnified
                  ? "bg-[#141619] text-[#63E6BE] shadow"
                  : "text-[#9EA0A8] hover:text-white"
              )}
            >
              Organized Workspace
            </button>
          </div>
        </div>

        {/* Transition Canvas */}
        <div className="relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0C0D0F] overflow-hidden p-6 sm:p-8 min-h-[420px] flex items-center justify-center">
          
          {/* State 1: Scattered Raw Inputs */}
          {!isUnified ? (
            <motion.div
              key="raw"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {rawInputs.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-[#9EA0A8]" />
                        <span className="text-xs font-semibold text-white">{item.channel}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#60636C]">{item.time}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#9EA0A8] mb-2">{item.source}</div>
                    <div className="p-2.5 rounded bg-[#050607] border border-[rgba(255,255,255,0.04)] text-xs text-white/90 font-mono">
                      &quot;{item.content}&quot;
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-[11px] text-[#60636C]">
                    <span>Unstructured payload</span>
                    <span className="text-amber-400/80">Pending ingestion</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* State 2: One Organized Workspace (Mercury / Notion Database style) */
            <motion.div
              key="unified"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full font-body"
            >
              {/* Workspace Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[rgba(255,255,255,0.06)] gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">Order Pipeline #ORD-8921</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#63E6BE]/10 text-[#63E6BE] border border-[#63E6BE]/20">
                    Fully Synchronized
                  </span>
                </div>
                <div className="text-xs text-[#9EA0A8] font-mono">
                  4 Source Documents Resolved • Tally Prime Linked
                </div>
              </div>

              {/* Workspace Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[#60636C] uppercase font-mono text-[10px] tracking-wider border-b border-[rgba(255,255,255,0.04)]">
                      <th className="pb-3 font-medium">Source / Stream</th>
                      <th className="pb-3 font-medium">Document Ref</th>
                      <th className="pb-3 font-medium">Entity</th>
                      <th className="pb-3 font-medium">Amount / Qty</th>
                      <th className="pb-3 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(255,255,255,0.04)]">
                    {rawInputs.map((item) => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 font-medium text-white flex items-center gap-2">
                          <item.icon className="w-3.5 h-3.5 text-[#9EA0A8]" />
                          <span>{item.channel}</span>
                        </td>
                        <td className="py-3.5 font-mono text-[#9EA0A8]">{item.unifiedRow.docRef}</td>
                        <td className="py-3.5 text-[#9EA0A8]">{item.unifiedRow.customer}</td>
                        <td className="py-3.5 font-mono text-white">{item.unifiedRow.value}</td>
                        <td className="py-3.5 text-right">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] text-[#63E6BE] font-mono text-[11px]">
                            <Check className="w-3 h-3" />
                            {item.unifiedRow.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Workspace Summary Bar */}
              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9EA0A8] gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#63E6BE]" />
                  <span>General Ledger voucher created with 100% matched reconciliation trail.</span>
                </div>
                <span className="font-mono text-[11px] text-[#60636C]">Zero manual data entry</span>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}