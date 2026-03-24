"use client"

import { useLanguage } from "@/context/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="border border-white/20 rounded-full p-0.5 flex items-center">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "en"
            ? "bg-teal text-white font-bold"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "es"
            ? "bg-teal text-white font-bold"
            : "text-white/60 hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  )
}
