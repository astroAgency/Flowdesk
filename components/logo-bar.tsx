"use client"

import { useLanguage } from "@/context/language-context"

const companies = [
  "Arclight",
  "Nova Labs",
  "Driftco",
  "Meridian",
  "Stackly",
  "Pulseware",
]

export function LogoBar() {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
          {t("logos.trusted")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {companies.map((company) => (
            <span
              key={company}
              className="text-gray-400 font-semibold text-lg md:text-xl"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
