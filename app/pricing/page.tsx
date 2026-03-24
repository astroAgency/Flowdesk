"use client"

import { Navbar } from "@/components/navbar"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <main>
      <Navbar />
      
      {/* Pricing Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("pricingPage.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("pricingPage.sub")}
          </p>
        </div>
      </section>
      
      <PricingSection />
      <Footer />
    </main>
  )
}
