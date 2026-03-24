"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-teal to-teal-dark py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
          {t("cta.title")}
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          {t("cta.sub")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="bg-white text-navy rounded-lg px-8 py-4 font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
          >
            {t("cta.primary")}
          </Link>
          <Link
            href="/signup"
            className="border border-white/30 text-white rounded-lg px-8 py-4 font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
          >
            {t("cta.secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
