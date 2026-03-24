"use client"

import { FolderPlus, UserPlus, Rocket } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const steps = [
  {
    number: 1,
    icon: FolderPlus,
    titleKey: "how.step1.title",
    descKey: "how.step1.desc",
  },
  {
    number: 2,
    icon: UserPlus,
    titleKey: "how.step2.title",
    descKey: "how.step2.desc",
  },
  {
    number: 3,
    icon: Rocket,
    titleKey: "how.step3.title",
    descKey: "how.step3.desc",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("how.title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Mobile: side by side layout */}
                <div className="flex md:block items-start gap-4">
                  {/* Number and Icon group */}
                  <div className="flex md:flex-col items-center gap-4 md:gap-0">
                    {/* Step number */}
                    <div className="relative z-10 w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center md:mx-auto md:mb-6 text-lg font-bold flex-shrink-0">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-2xl border border-gray-300 flex items-center justify-center md:mx-auto md:mb-4 shadow-sm flex-shrink-0">
                      <step.icon className="w-8 h-8 text-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-600 max-w-xs md:mx-auto">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
