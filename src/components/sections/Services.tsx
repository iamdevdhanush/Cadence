'use client'

import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'workflow',
    title: 'AI Workflow Automation',
    description: 'Turn manual, repetitive processes into intelligent workflows that run themselves. We map your current operations, identify automation opportunities, and build custom AI-powered workflows that integrate with your existing stack.',
    outcome: 'Reduce process time by 70%+',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="2" />
        <rect x="15" y="2" width="7" height="7" rx="2" />
        <rect x="2" y="15" width="7" height="7" rx="2" />
        <rect x="15" y="15" width="7" height="7" rx="2" />
        <path d="M9 5.5v3.5M5.5 9h3.5M15 9h3.5M18.5 12v3.5M9 15.5v3.5M5.5 18.5h3.5" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    description: 'Automate order intake, customer support, and notifications through WhatsApp. From structured order capture to automated replies and CRM sync, we build WhatsApp Business API integrations that feel native to your customers.',
    outcome: 'Capture orders 24/7 without manual entry',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M14 8h-4M14 12h-4" />
      </svg>
    ),
  },
  {
    id: 'internal-tools',
    title: 'Internal Business Tools',
    description: 'Replace spreadsheets and manual workarounds with custom internal tools. Dashboards, admin panels, approval workflows, and data entry interfaces built specifically for your operations team.',
    outcome: 'Eliminate spreadsheet errors and version conflicts',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: 'CRM & ERP Integrations',
    description: 'Connect your CRM, ERP, accounting, and communication tools into a unified system. Bidirectional sync, automated data enrichment, and workflow triggers across Salesforce, HubSpot, NetSuite, QuickBooks, and more.',
    outcome: 'Single source of truth across all systems',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6z" />
        <path d="M18 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6z" />
        <path d="M6 14v4a2 2 0 0 0 2 2h4" />
        <path d="M16 6v-4a2 2 0 0 0-2-2h-4" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <SectionHeading
            eyebrow="What We Build"
            title="Four ways we automate your operations"
            description="Each engagement is custom. These are the core capabilities we combine to solve your specific bottlenecks."
            align="center"
          />
        </div>

        <StaggerContainer baseDelay={100} staggerDelay={100} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Card variant="interactive" padding="lg" className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-text mb-3">{service.title}</h3>
                <p className="text-body-sm text-muted/70 mb-6 flex-1">{service.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-body-sm font-medium text-accent flex items-center gap-1.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {service.outcome}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}