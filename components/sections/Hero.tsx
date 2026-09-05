"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowDown, FileText, MessageSquare, CreditCard, CheckCircle2, Building2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 lg:pt-36 pb-20 overflow-hidden">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
                <span>Operational Automation for Indian Enterprises</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight font-semibold text-white leading-[1.08] text-balance"
            >
              Your operations are already digital.{" "}
              <span className="text-[#9EA0A8] block mt-1">They&apos;re just not connected.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-[#9EA0A8] leading-relaxed max-w-[540px]"
            >
              Cadence unifies incoming WhatsApp orders, supplier invoices, PDFs, and bank reconciliation feeds directly into your accounting ledger—with human review for exceptions.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="#audit"
                className="btn-primary px-6 py-3 text-sm font-medium"
              >
                <span>Start Automation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#workflow"
                className="btn-secondary px-6 py-3 text-sm font-medium"
              >
                <span>See How It Works</span>
              </a>
            </motion.div>

            {/* Believable Trust Signals (CFO & Ops verified) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs text-[#9EA0A8]"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#63E6BE] shrink-0" />
                <span>Built around your existing workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#63E6BE] shrink-0" />
                <span>No ERP migration required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#63E6BE] shrink-0" />
                <span>Human review for exceptions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Realistic SaaS Browser Window Mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Browser Frame */}
              <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#0C0D0F] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                
                {/* Browser Top Navigation Chrome */}
                <div className="px-4 py-3 bg-[#111215] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#050607] border border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-[#9EA0A8]">
                    <span className="text-[#60636C]">cadence.internal/</span>
                    <span className="text-white">pipeline/live-feed</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#63E6BE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
                    <span className="hidden sm:inline font-mono">Synced</span>
                  </div>
                </div>

                {/* Product Content: WhatsApp -> Invoice -> Payment -> Clean Record */}
                <div className="p-5 sm:p-6 space-y-3 font-body">
                  
                  {/* Step 1: WhatsApp */}
                  <div className="p-3.5 rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)] transition-all hover:border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white">WhatsApp Inbound</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#9EA0A8]">14:32:10 • Auto-Captured</span>
                    </div>
                    <div className="pl-8 text-xs text-[#9EA0A8]">
                      <p className="font-mono text-[11px] text-white/90 bg-[#050607] p-2 rounded border border-[rgba(255,255,255,0.04)]">
                        &quot;Need 50 units of Widget Pro by Friday. Dispatch to Bangalore warehouse.&quot;
                      </p>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#141619] text-[#60636C] border border-[rgba(255,255,255,0.06)]">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Step 2: Invoice */}
                  <div className="p-3.5 rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)] transition-all hover:border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-white">
                          <FileText className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white">Supplier Invoice Extracted</span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#63E6BE]/10 text-[#63E6BE]">
                        3-Way Match Passed
                      </span>
                    </div>
                    <div className="pl-8 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[10px] uppercase text-[#60636C] block">Vendor</span>
                        <span className="text-white font-medium">Acme Industrial Ltd</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#60636C] block">Amount</span>
                        <span className="text-white font-medium">₹2,25,000.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#141619] text-[#60636C] border border-[rgba(255,255,255,0.06)]">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Step 3: Payment */}
                  <div className="p-3.5 rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)] transition-all hover:border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-white">
                          <CreditCard className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white">Bank Feed Auto-Recon</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#9EA0A8]">UPI Ref #489201</span>
                    </div>
                    <div className="pl-8 flex items-center justify-between text-xs">
                      <span className="text-[#9EA0A8]">HDFC Current A/C • ₹2,25,000.00 matched</span>
                      <span className="text-[#63E6BE] font-mono text-[11px]">Variance ₹0.00</span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#141619] text-[#60636C] border border-[rgba(255,255,255,0.06)]">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Step 4: Clean Record */}
                  <div className="p-3.5 rounded-lg bg-[#0E1714] border border-[#63E6BE]/20 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#63E6BE]/20 flex items-center justify-center text-[#63E6BE]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-[#63E6BE]">Clean Record Posted</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#63E6BE] bg-[#63E6BE]/10 px-2 py-0.5 rounded">
                        Tally / SAP Synced
                      </span>
                    </div>
                    <div className="pl-8 text-xs text-[#9EA0A8] flex flex-wrap items-center justify-between gap-2">
                      <span>Journal Voucher #JV-2024-8921 created</span>
                      <span className="font-mono text-[10px] text-[#60636C]">Audit Trail Signed</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}