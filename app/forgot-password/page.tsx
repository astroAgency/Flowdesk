"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { Loader2, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <main className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t("forgot.title")}
          </h1>
        </div>
      </section>
      
      {/* Card Section */}
      <section className="py-16 md:py-24 flex-1 flex items-start justify-center">
        <div className="w-full max-w-md mx-4 sm:mx-auto">
          <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-lg p-8 md:p-10">
            {/* Back link */}
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block"
            >
              {t("forgot.back")}
            </Link>

            {success ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#0EA5E9] mx-auto mb-4" />
                <p className="text-[#0EA5E9] font-medium">
                  {t("forgot.success")} <span className="font-semibold">{email}</span>
                </p>
              </div>
            ) : (
              <>
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7 text-white"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  {t("forgot.title")}
                </h2>

                {/* Form Fields */}
                <div className="flex flex-col gap-4 mb-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("forgot.label")}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-[#CBD5E1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#0EA5E9] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#0284C7] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("forgot.loading")}
                    </>
                  ) : (
                    t("forgot.cta")
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
