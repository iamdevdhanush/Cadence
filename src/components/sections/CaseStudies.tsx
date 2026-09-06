'use client'

import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'

const caseStudies = [
  {
    id: 'distributor',
    type: 'Wholesale Distributor',
    pilot: true,
    problem: 'Manual order entry from 200+ daily WhatsApp messages. 3 FTEs copying orders into ERP. Frequent errors, missed items, 4-hour daily backlog.',
    solution: 'WhatsApp Business API → n8n workflow → NetSuite integration. Structured order parsing, inventory validation, auto-confirmation to customer, ERP create sales order.',
    outcome: 'Zero manual entry. Orders in ERP in <2 min. 3 FTEs redeployed to customer service. Error rate dropped from 8% to 0.2%.',
    metrics: ['200+ orders/day automated', '3 FTEs redeployed', '99.8% accuracy', '<2 min order-to-ERP'],
  },
  {
    id: 'manufacturer',
    type: 'Industrial Manufacturer',
    pilot: true,
    problem: 'Invoice PDFs emailed to AP team. Manual data entry into QuickBooks. 2-week payment cycles. Late fees and vendor disputes.',
    solution: 'Email monitor → PDF extraction (OCR + LLM) → validation rules → QuickBooks bill create → approval workflow → scheduled payment.',
    outcome: 'Invoices processed same-day. Payment cycle cut to 3 days. Zero late fees. Full audit trail for every transaction.',
    metrics: ['Same-day processing', '3-day payment cycle', '0 late fees', '100% audit trail'],
  },
  {
    id: 'logistics',
    type: 'Logistics Company',
    pilot: true,
    problem: 'Driver check-ins via phone/WhatsApp. Dispatch manually updates Google Sheets. No real-time visibility. Customer status requests take 30+ min.',
    solution: 'WhatsApp bot for driver check-ins → geofence validation → live dashboard → customer portal with tracking link → automated exception alerts.',
    outcome: 'Real-time fleet visibility. Customer self-service tracking. Dispatch team reduced from 4 to 1. On-time delivery improved 15%.',
    metrics: ['Real-time visibility', '75% dispatch reduction', '15% on-time improvement', 'Self-service tracking'],
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="section" aria-labelledby="casestudies-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-[48px]">
          <SectionHeading
            eyebrow="Case Studies"
            title="Pilot projects with real operators"
            description="Early engagements with distributors, manufacturers, and logistics companies. Names anonymized per agreement—outcomes are real."
            align="center"
          />
        </div>

        <StaggerContainer baseDelay={100} staggerDelay={100} className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[24px]">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 100}>
              <Card variant="interactive" padding="lg" className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant={study.pilot ? 'accent' : 'muted'} size="sm">
                    {study.pilot ? 'Pilot Project' : 'Client'}
                  </Badge>
                  <span className="text-body-sm text-text-light">{study.type}</span>
                </div>

                <div className="space-y-6 mb-6 flex-1">
                  <div>
                    <h4 className="text-caption font-medium tracking-wider uppercase text-text-light mb-2">Problem</h4>
                    <p className="text-body-sm text-text-muted">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-caption font-medium tracking-wider uppercase text-text-light mb-2">Solution</h4>
                    <p className="text-body-sm text-text">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-caption font-medium tracking-wider uppercase text-text-light mb-2">Outcome</h4>
                    <p className="text-body-sm text-text font-medium">{study.outcome}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap gap-2">
                  {study.metrics.map((metric, i) => (
                    <Badge key={i} variant="muted" size="sm" className="text-caption">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>

        <div className="mt-16 text-center">
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            These are pilot engagements—early partnerships where we proved the model. We're selective about who we work with because we stay involved long after deployment.
          </p>
        </div>
      </div>
    </section>
  )
}