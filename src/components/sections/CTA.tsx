'use client'

import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" aria-hidden="true" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0}>
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase text-accent bg-accent/10 rounded-pill mb-8">
              Final Step
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 id="cta-heading" className="text-section-heading font-semibold tracking-tight text-text mb-8 max-w-2xl mx-auto">
              Let&apos;s find your biggest bottleneck.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body-lg text-muted/90 mb-12 max-w-xl mx-auto leading-relaxed">
              We&apos;ll review one workflow in your business and show you exactly what we&apos;d automate first. No commitment. No sales pitch. Just a clear picture of what&apos;s possible.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton size="lg" className="w-full sm:w-auto min-w-[280px]" asChild>
                <Link href="mailto:hello@cadence.ai?subject=Automation Audit Request">Book Free Automation Audit</Link>
              </MagneticButton>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
                <Link href="mailto:hello@cadence.ai?subject=Questions about automation">Email Us First</Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="mt-10 text-body-sm text-muted/50">
              Prefer a quick call? Email <a href="mailto:hello@cadence.ai" className="text-accent hover:underline">hello@cadence.ai</a> — we&apos;ll reply within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}