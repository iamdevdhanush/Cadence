'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { WhyCadence } from '@/components/sections/WhyCadence'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { CursorGlow } from '@/components/ui/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background relative selection:bg-accent/20">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <CaseStudies />
        <WhyCadence />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}