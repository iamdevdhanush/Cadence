"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight, Mail, ChevronRight, MessageSquare, Globe, GitFork } from "lucide-react";

const footerNavigation = {
  Product: [
    { label: "Intelligent Pipeline", href: "#workflow" },
    { label: "Exception Engine", href: "#built-for-exceptions" },
    { label: "Live Workflows", href: "#real-examples" },
    { label: "Integrations", href: "#why-cadence" },
  ],
  Solutions: [
    { label: "WhatsApp Orders", href: "#real-examples" },
    { label: "Invoice Processing", href: "#real-examples" },
    { label: "Bank Reconciliation", href: "#real-examples" },
    { label: "Inventory Sync", href: "#chaos-to-control" },
  ],
  Company: [
    { label: "About Cadence", href: "/about" },
    { label: "Automation Audit", href: "/automation-audit" },
    { label: "Services", href: "/services" },
    { label: "Contact Team", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Security & Tenancy", href: "#security" },
    { label: "Responsible AI", href: "#ai-safety" },
  ],
};

const socialLinks = [
  { icon: MessageSquare, href: "https://twitter.com", label: "Twitter" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GitFork, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@cadence.io", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/80 pt-20 pb-12 overflow-hidden" role="contentinfo">
      {/* Subtle animated gradient divider on top border */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative container px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <a href="/" className="font-heading font-black text-2xl tracking-tight text-text inline-block mb-3">
                Cadence
              </a>

              {/* Required Signature Brand Statement */}
              <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
                Automate the work behind the work.
              </p>

              <p className="text-sm text-text-muted leading-relaxed max-w-sm mb-6">
                Autonomous workflow engine unifying WhatsApp, invoices, spreadsheets, and banking records into synchronized ERP transactions.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface border border-border text-text-muted hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {Object.entries(footerNavigation).map(([group, links]) => (
            <div key={group} className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-text-subtle font-semibold mb-4">
                {group}
              </span>
              <ul className="space-y-2.5 text-xs font-mono" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text transition-colors flex items-center gap-1 group py-0.5"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">{link.label}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Subtle Divider */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-subtle">
          <p>© {new Date().getFullYear()} Cadence Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </span>
            <a
              href="#audit"
              className="text-text hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>Schedule Audit</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}