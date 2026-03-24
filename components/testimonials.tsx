"use client"

import { useLanguage } from "@/context/language-context"

const testimonials = [
  {
    quoteKey: "test.1.quote",
    name: "Sarah K.",
    roleKey: "test.1.role",
    company: "Arclight",
    initials: "SK",
    color: "bg-purple-500",
  },
  {
    quoteKey: "test.2.quote",
    name: "Marcus T.",
    roleKey: "test.2.role",
    company: "Nova Labs",
    initials: "MT",
    color: "bg-teal",
  },
  {
    quoteKey: "test.3.quote",
    name: "Diana R.",
    roleKey: "test.3.role",
    company: "Driftco",
    initials: "DR",
    color: "bg-orange-500",
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            {t("test.title")}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 rounded-2xl border border-white/10 p-6 md:p-8 min-h-0"
            >
              {/* Quote */}
              <p className="text-white text-lg mb-6 leading-relaxed">
                {`"${t(testimonial.quoteKey)}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {t(testimonial.roleKey)}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
