"use client";

import { ArrowRight, Check } from "lucide-react";

export function CTA() {
  return (
    <section id="audit" className="section relative border-t border-[rgba(255,255,255,0.06)] py-28 lg:py-36">
      <div className="container px-6 lg:px-12">
        <div className="max-w-[620px] mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#9EA0A8] border border-[rgba(255,255,255,0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
            <span>30-Minute Operational Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 text-balance">
            Ready to automate the work behind the work?
          </h2>

          <p className="text-base sm:text-lg text-[#9EA0A8] leading-relaxed mb-10 text-balance">
            Share one repetitive operational workflow—an invoice format, a WhatsApp channel, or a reconciliation bottleneck. We will design the automated pipeline and deploy a sandbox demonstration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@cadence.io?subject=Cadence%20Automation%20Audit"
              className="btn-primary w-full sm:w-auto px-7 py-3.5 text-sm font-medium"
            >
              <span>Start Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#workflow"
              className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-sm font-medium"
            >
              <span>Review Architecture</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#9EA0A8]">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#63E6BE]" />
              <span>No system credentials required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#63E6BE]" />
              <span>Blueprint delivered in 48 hours</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}