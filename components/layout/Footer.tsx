"use client";

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] bg-[#050607] py-16 lg:py-20" role="contentinfo">
      <div className="container px-6 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[rgba(255,255,255,0.06)]">
          
          {/* Brand & Manifesto Column (Mercury style) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="/" className="font-heading font-semibold text-xl tracking-tight text-white inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#63E6BE]" />
                <span>Cadence</span>
              </a>

              <p className="text-sm font-normal text-[#9EA0A8] max-w-sm mb-4">
                Automate the work behind the work.
              </p>

              <p className="text-xs text-[#60636C] leading-relaxed max-w-sm">
                Autonomous pipeline unifying WhatsApp, invoice documents, spreadsheets, and bank feeds directly into your ERP ledger.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#60636C] mb-4">
                Product
              </div>
              <ul className="space-y-2.5 text-xs text-[#9EA0A8]">
                <li><a href="#workflow" className="hover:text-white transition-colors">Pipeline</a></li>
                <li><a href="#chaos-to-control" className="hover:text-white transition-colors">Transformation</a></li>
                <li><a href="#built-for-exceptions" className="hover:text-white transition-colors">Exceptions</a></li>
                <li><a href="#why-cadence" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#60636C] mb-4">
                Solutions
              </div>
              <ul className="space-y-2.5 text-xs text-[#9EA0A8]">
                <li><a href="#real-examples" className="hover:text-white transition-colors">WhatsApp Inbound</a></li>
                <li><a href="#real-examples" className="hover:text-white transition-colors">Invoice Matching</a></li>
                <li><a href="#real-examples" className="hover:text-white transition-colors">Bank Reconciliation</a></li>
                <li><a href="#audit" className="hover:text-white transition-colors">Automation Audit</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#60636C] mb-4">
                Company
              </div>
              <ul className="space-y-2.5 text-xs text-[#9EA0A8]">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Security & Privacy</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#60636C] gap-4">
          <p>© {new Date().getFullYear()} Cadence Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#63E6BE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#63E6BE]" />
              <span className="text-[11px] font-mono">Systems Operational</span>
            </span>
            <a href="mailto:hello@cadence.io" className="hover:text-white transition-colors">
              hello@cadence.io
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}