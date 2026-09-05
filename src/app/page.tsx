'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Process } from '@/components/sections/Process'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { WhyCadence } from '@/components/sections/WhyCadence'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TrustBar />
        <Services />
        <BeforeAfter />
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