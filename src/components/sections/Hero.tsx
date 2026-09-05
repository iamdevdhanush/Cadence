'use client'

import { ScrollReveal, StaggerContainer } from '@/components/motion/ScrollReveal'
import { NodeFlow } from '@/components/motion/NodeFlow'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden" aria-labelledby="hero-title">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:pr-8">
            <StaggerContainer baseDelay={100} staggerDelay={100}>
              <ScrollReveal delay={0}>
                <span className="inline-block px-3 py-1.5 text-xs font-medium tracking-widest uppercase text-accent bg-accent/10 rounded-pill mb-6">
                  AI Automation Agency
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1
                  id="hero-title"
                  className="text-hero font-bold tracking-[-0.05em] leading-[0.92] text-text max-w-text"
                  style={{ fontSize: 'clamp(46px, 6vw, 84px)' }}
                >
                  Stop wasting hours on{' '}
                  <span className="relative">
                    repetitive work.
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-8 text-body-lg text-muted/90 max-w-text leading-relaxed">
                  We build AI systems that automate the work your team shouldn&apos;t be doing manually.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-body text-muted/70 max-w-text leading-relaxed">
                  From WhatsApp orders and invoices to CRM workflows and internal operations&mdash;we design and implement automation around the tools you already use.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="#contact">Book Free Strategy Call</Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="#work">See Our Work</Link>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="mt-16 flex flex-wrap items-center gap-6 text-body-sm text-muted/50">
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    No long-term contracts
                  </span>
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    2-week pilot available
                  </span>
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Ongoing support included
                  </span>
                </div>
              </ScrollReveal>
            </StaggerContainer>
          </div>

          <div className="relative hidden lg:block">
            <ScrollReveal delay={200} className="relative">
              <div className="aspect-[4/3] max-w-lg mx-auto">
                <NodeFlow width={500} height={400} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/40">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}