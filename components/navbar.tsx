"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "/features", labelKey: "nav.features" },
    { href: "/pricing", labelKey: "nav.pricing" },
    { href: "/changelog", labelKey: "nav.changelog" },
    { href: "/docs", labelKey: "nav.docs" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal rounded-md flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl hidden min-[380px]:block">Flowdesk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/login"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t("nav.login")}
            </Link>
            <Link
              href="/signup"
              className="bg-teal text-white rounded-lg px-5 py-2 text-sm font-semibold hover:bg-teal-dark transition-colors"
            >
              {t("nav.start")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10 py-4">
            <div className="flex flex-col gap-4">
              {/* Language Switcher - Mobile */}
              <div className="flex justify-center mb-2">
                <LanguageSwitcher />
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3 px-2">
                <Link
                  href="/login"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.login")}
                </Link>
                <Link
                  href="/signup"
                  className="bg-teal text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.start")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
