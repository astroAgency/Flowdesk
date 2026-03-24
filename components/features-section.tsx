"use client"

import { CheckSquare, MessageSquare, FileText, Zap, Shield, BarChart2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const features = [
  {
    icon: CheckSquare,
    nameKey: "features.tasks.name",
    descKey: "features.tasks.desc",
  },
  {
    icon: MessageSquare,
    nameKey: "features.chat.name",
    descKey: "features.chat.desc",
  },
  {
    icon: FileText,
    nameKey: "features.docs.name",
    descKey: "features.docs.desc",
  },
  {
    icon: Zap,
    nameKey: "features.auto.name",
    descKey: "features.auto.desc",
  },
  {
    icon: Shield,
    nameKey: "features.perms.name",
    descKey: "features.perms.desc",
  },
  {
    icon: BarChart2,
    nameKey: "features.analytics.name",
    descKey: "features.analytics.desc",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
            {t("features.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("features.sub")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.nameKey}
              className="bg-white rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(feature.nameKey)}
              </h3>
              <p className="text-gray-600 px-0 md:px-0">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
