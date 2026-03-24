"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { CheckCircle2 } from "lucide-react"

const changelogEntries = [
  {
    date: "March 2025",
    version: "v2.4.0",
    titleKey: "changelog.v240.title",
    descKey: "changelog.v240.desc",
    features: [
      "changelog.v240.f1",
      "changelog.v240.f2",
      "changelog.v240.f3",
      "changelog.v240.f4",
    ],
  },
  {
    date: "February 2025",
    version: "v2.3.0",
    titleKey: "changelog.v230.title",
    descKey: "changelog.v230.desc",
    features: [
      "changelog.v230.f1",
      "changelog.v230.f2",
      "changelog.v230.f3",
      "changelog.v230.f4",
    ],
  },
  {
    date: "January 2025",
    version: "v2.2.0",
    titleKey: "changelog.v220.title",
    descKey: "changelog.v220.desc",
    features: [
      "changelog.v220.f1",
      "changelog.v220.f2",
      "changelog.v220.f3",
      "changelog.v220.f4",
    ],
  },
  {
    date: "December 2024",
    version: "v2.1.0",
    titleKey: "changelog.v210.title",
    descKey: "changelog.v210.desc",
    features: [
      "changelog.v210.f1",
      "changelog.v210.f2",
      "changelog.v210.f3",
      "changelog.v210.f4",
    ],
  },
]

export default function ChangelogPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("changelog.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("changelog.sub")}
          </p>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative border-l-2 border-[#CBD5E1] ml-3 md:ml-8">
            {changelogEntries.map((entry, index) => (
              <div key={index} className="relative pl-6 md:pl-12 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 rounded-full bg-[#0EA5E9] -left-[7px] top-1" />
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {entry.date}
                  </span>
                  <span className="text-xs text-white bg-[#0EA5E9] px-3 py-1 rounded-full font-semibold">
                    {entry.version}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {t(entry.titleKey)}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {t(entry.descKey)}
                </p>
                
                {/* Features list */}
                <ul className="flex flex-col gap-2">
                  {entry.features.map((featureKey, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                      <span>{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
