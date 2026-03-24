import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoBar } from "@/components/logo-bar"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoBar />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
