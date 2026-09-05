"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, UserCheck, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const exceptionFlow = [
  {
    step: "01",
    title: "UPI Payment Received",
    amount: "₹48,500",
    note: "Bank Credit: Ref #UPI/4567891230",
    status: "Captured",
  },
  {
    step: "02",
    title: "Supplier Invoice Expected",
    amount: "₹49,000",
    note: "INV-2024-8921 • PO-0456",
    status: "Extracted",
  },
  {
    step: "03",
    title: "Variance Detected",
    amount: "₹500 Short",
    note: "Exceeds 0.5% auto-clear tolerance",
    status: "Flagged for Review",
    isFlagged: true,
  },
  {
    step: "04",
    title: "Assigned for Human Review",
    amount: "AP Lead Review",
    note: "Priya Sharma (Accounts Payable)",
    status: "Context Attached",
  },
];

export function BuiltForExceptions() {
  const [activeStep, setActiveStep] = useState(2); // Focus on Variance Detected

  return (
    <section id="built-for-exceptions" className="section relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="container px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-[620px] mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
            <span>Exception Handling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Built for exceptions, not just the happy path.
          </h2>
          <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed">
            Standard scripts break the moment numbers don&apos;t align. Cadence catches variances instantly, isolates the anomaly, and brings human expertise into the loop with pre-assembled context.
          </p>
        </div>

        {/* Exception Scenario Workspace (Mercury / Ramp review queue style) */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0C0D0F] p-6 sm:p-10 max-w-4xl">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[rgba(255,255,255,0.06)] gap-4">
            <div>
              <div className="text-xs font-mono text-[#60636C] uppercase tracking-wider mb-1">
                Live Exception Incident #EX-4091
              </div>
              <h3 className="text-xl font-semibold text-white">
                Accounts Payable Reconciliation Shortfall
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono text-amber-400">Human Approval Pending</span>
            </div>
          </div>

          {/* 4 Steps Timeline Horizontal Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {exceptionFlow.map((item, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between",
                    isSelected
                      ? "bg-[#141619] border-[rgba(255,255,255,0.2)]"
                      : "bg-[#0C0D0F] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)]"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#60636C]">{item.step}</span>
                      <span className={cn(item.isFlagged ? "text-amber-400" : "text-[#9EA0A8]")}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-white mb-1">{item.title}</div>
                    <div className="text-base font-semibold text-white font-mono mb-2">{item.amount}</div>
                  </div>
                  <div className="text-[11px] text-[#60636C] border-t border-[rgba(255,255,255,0.04)] pt-2">
                    {item.note}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Drawer Preview */}
          <div className="p-5 rounded-lg bg-[#141619] border border-[rgba(255,255,255,0.06)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white mb-1">
                  Context Ready for Review
                </div>
                <div className="text-xs text-[#9EA0A8] max-w-lg leading-relaxed">
                  Inbound invoice ₹49,000 against payment receipt ₹48,500. Difference of ₹500 is within supplier settlement discount policy. One click resolves the ledger.
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button className="px-4 py-2 rounded text-xs font-medium text-[#9EA0A8] hover:text-white bg-[#0C0D0F] border border-[rgba(255,255,255,0.08)]">
                  Reject & Notify Vendor
                </button>
                <button className="btn-primary px-4 py-2 text-xs font-medium">
                  Approve as Settlement Discount
                </button>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-6 flex items-center gap-2 text-xs text-[#60636C]">
            <ShieldCheck className="w-4 h-4 text-[#63E6BE]" />
            <span>No automatic postings occur when configured thresholds are exceeded. Complete audit log maintained.</span>
          </div>

        </div>

      </div>
    </section>
  );
}