"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [justSwitched, setJustSwitched] = useState(false);
  const { t } = useLanguage();

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
    if (!isAnnual) {
      setJustSwitched(true);
    }
  };

  useEffect(() => {
    if (justSwitched) {
      const timer = setTimeout(() => setJustSwitched(false), 600);
      return () => clearTimeout(timer);
    }
  }, [justSwitched]);

  const plans = [
    {
      nameKey: "pricing.free.name",
      monthlyPrice: 0,
      annualPrice: 0,
      descKey: "pricing.free.desc",
      features: [
        "pricing.free.f1",
        "pricing.free.f2",
        "pricing.free.f3",
        "pricing.free.f4",
      ],
      ctaKey: "pricing.free.cta",
      highlighted: false,
    },
    {
      nameKey: "pricing.pro.name",
      monthlyPrice: 12,
      annualPrice: 10,
      descKey: "pricing.pro.desc",
      features: [
        "pricing.pro.f1",
        "pricing.pro.f2",
        "pricing.pro.f3",
        "pricing.pro.f4",
        "pricing.pro.f5",
        "pricing.pro.f6",
      ],
      ctaKey: "pricing.pro.cta",
      highlighted: true,
      badgeKey: "pricing.pro.badge",
    },
    {
      nameKey: "pricing.ent.name",
      monthlyPrice: null,
      annualPrice: null,
      descKey: "pricing.ent.desc",
      features: [
        "pricing.ent.f1",
        "pricing.ent.f2",
        "pricing.ent.f3",
        "pricing.ent.f4",
        "pricing.ent.f5",
      ],
      ctaKey: "pricing.ent.cta",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 overflow-visible">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("pricing.title")}
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}
            >
              {t("pricing.monthly")}
            </span>
            <button
              onClick={handleToggle}
              style={{ backgroundColor: isAnnual ? "#0EA5E9" : "#CBD5E1" }}
              className="relative w-14 h-7 rounded-full transition-all duration-300 shrink-0"
              aria-label="Toggle annual billing"
            >
              <span
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
                style={{
                  transform: isAnnual ? "translateX(2px)" : "translateX(-22px)",
                }}
              />
            </button>
            <span
              className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-400"}`}
            >
              {t("pricing.annual")}
              <span
                className={`ml-2 text-xs font-semibold transition-all duration-300 ${isAnnual ? "text-teal" : "text-gray-400"} ${justSwitched ? "scale-110" : "scale-100"}`}
              >
                {t("pricing.save")}
              </span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.nameKey}
              className={`relative rounded-2xl p-6 md:p-8 ${
                plan.highlighted
                  ? "bg-white border-2 border-teal shadow-lg scale-100 md:scale-105 mt-4 md:mt-0 origin-center"
                  : "bg-white border border-gray-300 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badgeKey && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t(plan.badgeKey)}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t(plan.nameKey)}
              </h3>

              {/* Price */}
              <div className="mb-4">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span
                      key={isAnnual ? "annual" : "monthly"}
                      className="text-4xl font-bold text-gray-900 transition-all"
                    >
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600">
                      {t("pricing.perUser")}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-gray-900">
                    {t("pricing.custom")}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">{t(plan.descKey)}</p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/signup"
                className={`block w-full text-center rounded-lg px-6 py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-teal text-white hover:bg-teal-dark"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {t(plan.ctaKey)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
