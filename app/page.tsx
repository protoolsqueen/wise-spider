'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedPublications from '@/components/FeaturedPublications'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export function BlockPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F4]">
      <Header />
      <main>
        <Hero />
        <FeaturedPublications />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}