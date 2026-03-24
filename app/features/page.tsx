"use client"

import { Navbar } from "@/components/navbar"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"

const integrations = [
  { name: "Slack", initial: "S", color: "bg-purple-600" },
  { name: "GitHub", initial: "G", color: "bg-gray-800" },
  { name: "Figma", initial: "F", color: "bg-pink-500" },
  { name: "Notion", initial: "N", color: "bg-gray-900" },
  { name: "Zapier", initial: "Z", color: "bg-orange-500" },
  { name: "Google Drive", initial: "G", color: "bg-yellow-500" },
  { name: "Linear", initial: "L", color: "bg-indigo-600" },
  { name: "Jira", initial: "J", color: "bg-blue-600" },
  { name: "Loom", initial: "L", color: "bg-purple-500" },
  { name: "Stripe", initial: "S", color: "bg-violet-600" },
  { name: "Intercom", initial: "I", color: "bg-teal" },
  { name: "HubSpot", initial: "H", color: "bg-orange-600" },
]

export default function FeaturesPage() {
  const { t } = useLanguage()

  return (
    <main>
      <Navbar />
      
      {/* Features Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            {t("featuresPage.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("featuresPage.sub")}
          </p>
        </div>
      </section>
      
      <FeaturesSection />
      
      {/* Integrations Section */}
      <section id="integrations" className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              {t("featuresPage.integrations")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              {t("featuresPage.intSub")}
            </h2>
          </div>
          
          {/* Integrations grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
              >
                <div
                  className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}
                >
                  {integration.initial}
                </div>
                <span className="text-gray-900 font-medium text-sm text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
