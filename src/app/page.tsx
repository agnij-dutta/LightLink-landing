'use client'
import { HeroSection } from '@/components/ui/hero-section-4'
import { FeaturesSection } from '@/components/sections/features-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { BentoSection } from '@/components/sections/bento-section'
import { DemoSection } from '@/components/sections/demo-section'
import { FooterSection } from '@/components/sections/footer-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="demo">
        <BentoSection />
        <DemoSection />
      </div>
      <div id="about">
        <FooterSection />
        </div>
    </div>
  )
}
