"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Initialize language from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("flowdesk-lang")
      if (stored === "es" || stored === "en") {
        setLanguageState(stored)
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
    setIsHydrated(true)
  }, [])

  // Sync language changes to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("flowdesk-lang", language)
      } catch {
        // localStorage not available
      }
    }
  }, [language, isHydrated])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
