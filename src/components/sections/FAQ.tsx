'use client'

import { useState } from 'react'
import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to buy new software?',
    answer: 'No. We build on top of the tools you already use—WhatsApp, email, your ERP, CRM, accounting software, spreadsheets. If a tool has an API (most do), we can automate it. If it doesn\'t, we find a workaround. You keep your licenses; we just connect the dots.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Typical pilot: 2–4 weeks from kickoff to live. Full rollout: 6–12 weeks depending on scope. We move in phases—audit, design, build, deploy—so you see value at each stage. No 6-month "big bang" deliveries.',
  },
  {
    question: 'Can you work with WhatsApp?',
    answer: 'Yes. We\'re official WhatsApp Business Solution Providers. We handle the Meta verification, template approval, API integration, and ongoing compliance. Order capture, support automation, notifications, status updates—all native in WhatsApp.',
  },
  {
    question: 'What if my team isn\'t technical?',
    answer: 'That\'s exactly who we build for. The automations run in the background. Your team keeps using WhatsApp, email, and their usual tools—just without the manual copy-paste. We provide training, documentation, and ongoing support so nothing breaks when we\'re not there.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. Every engagement includes a retainer for monitoring, maintenance, and optimization. We run monthly health checks, handle platform updates (API changes, deprecations), and proactively identify new automation opportunities as your operations evolve.',
  },
  {
    question: 'How do you charge?',
    answer: 'Fixed-fee pilot to prove value, then monthly retainer based on scope. No per-transaction fees, no seat licenses, no surprise invoices. The pilot fee rolls into the retainer if you continue. If it doesn\'t work, you\'ve only invested the pilot amount.',
  },
  {
    question: 'What makes you different from an integration agency?',
    answer: 'We don\'t just connect APIs—we redesign the workflow. Most integrators map field A to field B. We ask: "Why does this field exist? Can we eliminate this step? What happens when it fails?" The result is fewer moving parts, not more.',
  },
  {
    question: 'Can you handle our compliance requirements?',
    answer: 'We work with distributors, manufacturers, and logistics companies who deal with PII, financial data, and industry regulations. We implement encryption, access controls, audit logs, and data retention policies. We\'ll sign your NDA and DPA before day one.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear before every engagement"
            description="Straight answers. No sales fluff."
            align="center"
          />
        </div>

        <StaggerContainer baseDelay={100} staggerDelay={50} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <details
                className="group bg-surface border border-border rounded-card overflow-hidden transition-all duration-medium hover:border-white/15"
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer list-none">
                  <h3 className="text-body-lg font-medium text-text pr-10">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-muted/50 flex-shrink-0 transition-transform duration-medium',
                      openIndex === index && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 animate-in">
                  <p className="text-body text-muted/80">{faq.answer}</p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}