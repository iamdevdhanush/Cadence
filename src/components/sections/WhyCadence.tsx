'use client'

import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const principles = [
  {
    id: 'business-first',
    title: 'Business First',
    description: 'Technology should disappear behind results. We don\'t lead with AI models or platforms—we lead with your operational problem and the measurable outcome you need. The tech is just the implementation detail.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'your-workflow',
    title: 'Built Around Your Workflow',
    description: 'No forced software migration. No "rip and replace." We integrate with the tools your team already uses—WhatsApp, email, ERP, CRM, spreadsheets—and automate the handoffs between them.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="M3 12h18" />
        <path d="M12 3a6 6 0 0 0 0 12" />
        <path d="M12 3a6 6 0 0 1 0 12" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    title: 'Long-Term Partnership',
    description: 'We improve systems after deployment. Monthly reviews, new automation identification, platform updates, and continuous optimization. You\'re not buying a project—you\'re gaining an automation partner.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
]

export function WhyCadence() {
  return (
    <section id="about" className="section bg-surface-alt/50" aria-labelledby="why-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-[48px]">
          <SectionHeading
            eyebrow="Why Cadence"
            title="Three principles that guide every engagement"
            description="We're not a software vendor. We're an implementation partner. These principles ensure every project delivers lasting value, not just a demo."
            align="center"
          />
        </div>

        <StaggerContainer baseDelay={100} staggerDelay={100} className="grid md:grid-cols-3 gap-[24px]">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.id} delay={index * 100}>
              <Card variant="default" padding="lg" className="h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-card-title font-semibold tracking-tight text-text mb-4">{principle.title}</h3>
                <p className="text-body-sm text-text-muted">{principle.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}