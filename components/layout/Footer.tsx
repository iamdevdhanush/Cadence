"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import { ArrowRight, GitFork, Mail, ChevronRight, MessageSquare, Send, Link2, Globe } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "API Docs", href: "#api-docs" },
    { label: "Security", href: "#security" },
    { label: "Changelog", href: "#changelog" },
  ],
  Solutions: [
    { label: "Invoice Processing", href: "#invoice-processing" },
    { label: "Order Management", href: "#order-management" },
    { label: "Payment Reconciliation", href: "#payment-reconciliation" },
    { label: "Vendor Management", href: "#vendor-management" },
    { label: "Custom Workflows", href: "#custom-workflows" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Customers", href: "#customers" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "Help Center", href: "#help" },
    { label: "Community", href: "#community" },
    { label: "Webinars", href: "#webinars" },
    { label: "Templates", href: "#templates" },
  ],
};

const socialLinks = [
  { icon: MessageSquare, href: "https://twitter.com/cadence", label: "Twitter" },
  { icon: Globe, href: "https://linkedin.com/company/cadence", label: "LinkedIn" },
  { icon: GitFork, href: "https://github.com/cadence", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@cadence.io", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border" role="contentinfo">
      <div className="absolute inset-0 gradient-mesh" style={{ opacity: 0.3 }} aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" style={{ opacity: 0.02 }} aria-hidden="true" />

      <div className="relative container px-6 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <ScrollReveal direction="fade" delay={0.1}>
              <a href="/" className="font-heading font-bold text-2xl text-text mb-4 inline-block">
                Cadence
              </a>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-text-muted max-w-xs mb-6 leading-relaxed">
                Automate the work behind the work. Connect WhatsApp, documents, spreadsheets and payments into one automated workflow.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                    aria-label={social.label}
                    whileHover={{ background: "rgba(110, 231, 183, 0.1)", borderColor: "rgba(110, 231, 183, 0.3)", color: "#6EE7B7", y: -2, transition: { duration: 0.2 } }}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <ScrollReveal key={category} direction="up" delay={0.2 + categoryIndex * 0.05}>
              <nav aria-label={category}>
                <h4 className="font-heading font-semibold text-text mb-4">{category}</h4>
                <ul className="space-y-3" role="list">
                  {links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        {link.label}
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollReveal>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <ScrollReveal direction="fade">
              <p className="text-sm text-text-subtle">
                © {new Date().getFullYear()} Cadence. All rights reserved.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={0.1}>
              <div className="flex items-center gap-6">
                <a href="#privacy" className="text-sm text-text-muted hover:text-text transition-colors">Privacy</a>
                <a href="#terms" className="text-sm text-text-muted hover:text-text transition-colors">Terms</a>
                <a href="#cookies" className="text-sm text-text-muted hover:text-text transition-colors">Cookies</a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={0.2}>
              <MagneticButton variant="ghost" size="sm" asChild>
                <a href="#audit" className="flex items-center gap-2 text-sm font-medium">
                  Start Audit
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}