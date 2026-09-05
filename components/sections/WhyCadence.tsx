"use client";

import { motion } from "framer-motion";
import { Check, Workflow, Database, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Workflow,
    title: "Built around your existing workflow",
    description: "You don't need to retrain staff or force customers and suppliers to use a clunky new portal. Cadence runs quietly behind the WhatsApp threads and mailboxes you already use.",
    details: [
      "Customers continue sending WhatsApp messages",
      "Suppliers continue emailing PDF invoices",
      "Zero change to daily field operations",
    ],
  },
  {
    icon: Database,
    title: "No ERP migration required",
    description: "Replacing or upgrading ERPs takes months and disrupts revenue. Cadence synchronizes natively with Tally Prime, SAP, and Zoho Books via standard connectors.",
    details: [
      "Direct ledger entry creation",
      "Continuous two-way master data sync",
      "No infrastructure replacement or downtime",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Human review for exceptions",
    description: "We don't believe in blind black-box automation. Clear rules resolve standard transactions automatically; anything outside configured thresholds is routed to your team.",
    details: [
      "Customizable tolerance thresholds",
      "Complete historical audit trails",
      "One-click resolution on mobile or desktop",
    ],
  },
  {
    icon: Zap,
    title: "Live in weeks, not quarters",
    description: "Enterprise software shouldn't require half a year of discovery. We isolate one repetitive operational bottleneck and have it running in staging within 14 days.",
    details: [
      "30-minute initial workflow analysis",
      "Production-ready staging in 14 days",
      "Measurable labor hours reclaimed",
    ],
  },
];

export function WhyCadence() {
  return (
    <section id="why-cadence" className="section relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="container px-6 lg:px-12">
        
        {/* Section Header with Editorial Rhythm */}
        <div className="max-w-[620px] mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
            <span>Operational Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Quiet confidence. Grounded software.
          </h2>
          <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed">
            No invented statistics or speculative buzzwords. Just disciplined operational automation built for the realities of Indian commerce.
          </p>
        </div>

        {/* 2x2 Clean Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="surface-card p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-white mb-6">
                  <pillar.icon className="w-5 h-5 text-[#63E6BE]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#9EA0A8] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] space-y-2.5">
                {pillar.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#9EA0A8]">
                    <Check className="w-3.5 h-3.5 text-[#63E6BE] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}