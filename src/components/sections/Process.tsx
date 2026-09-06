'use client'

import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We shadow your team, map every manual step, and identify the highest-impact automation opportunities. No assumptions—just observation.',
    details: ['Process mapping & time studies', 'Tool inventory & integration audit', 'ROI prioritization matrix'],
  },
  {
    number: '02',
    title: 'Design',
    description: 'We architect the solution: workflow logic, data models, integration points, and error handling. You review and approve before any code is written.',
    details: ['Workflow diagrams & specs', 'Data flow & schema design', 'Integration architecture', 'Rollback & monitoring plan'],
  },
  {
    number: '03',
    title: 'Build',
    description: 'We build the automation in your environment using n8n, custom code, or your preferred platform. Iterative delivery with weekly demos.',
    details: ['n8n workflows or custom apps', 'API integrations & webhooks', 'Testing & edge-case handling', 'Documentation & runbooks'],
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Phased rollout with your team. We run parallel, train users, and monitor closely. Zero-downtime cutover when you\'re confident.',
    details: ['Parallel run period', 'User training sessions', 'Go-live support', 'Performance monitoring'],
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Automation isn\'t set-and-forget. We review monthly, add new triggers, handle edge cases, and expand to adjacent processes.',
    details: ['Monthly health reviews', 'New automation identification', 'Platform updates & maintenance', 'Continuous improvement'],
  },
]

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-[48px]">
          <SectionHeading
            eyebrow="How We Work"
            title="Five phases. No surprises."
            description="A proven process that de-risks automation projects and delivers measurable results from day one."
            align="center"
          />
        </div>

        <StaggerContainer baseDelay={100} staggerDelay={120} className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 120}>
              <div className="relative group">
                <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-border" aria-hidden="true">
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-slow"
                    style={{ transitionDelay: '200ms' }}
                  />
                </div>

                <div className="flex gap-8 lg:gap-12">
                  <div className="relative z-10 flex-shrink-0 w-12 lg:w-16 text-center">
                    <div className="relative">
                      <span className="relative z-10 text-3xl lg:text-4xl font-bold tracking-tight text-text-light">{step.number}</span>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-border bg-surface flex items-center justify-center">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-2 lg:pt-0">
                    <h3 className="text-card-title font-semibold tracking-tight text-text mb-4">{step.title}</h3>
                    <p className="text-body-lg text-text-muted mb-6 max-w-2xl">{step.description}</p>
                    <ul className="grid sm:grid-cols-3 gap-3 text-body-sm text-text-muted" role="list">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}