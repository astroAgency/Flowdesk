"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/app'
      }, 1500)
    }, 1500)
  }

  return (
    <main className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t("login.title")}
          </h1>
        </div>
      </section>
      
      {/* Card Section */}
      <section className="py-16 md:py-24 flex-1 flex items-start justify-center">
        <div className="w-full max-w-md mx-4 sm:mx-auto">
          <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-lg p-8 md:p-10">
            {success ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#0EA5E9] mx-auto mb-4" />
                <p className="text-[#0EA5E9] font-medium">
                  {t("login.success")}
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
                  {t("login.title")}
                </h2>

                {/* Form Fields */}
                <div className="flex flex-col gap-4 mb-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("login.email")}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-[#CBD5E1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("login.password")}
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-[#CBD5E1] rounded-lg px-4 py-3 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot password */}
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      {t("login.forgot")}
                    </Link>
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
                      {t("login.loading")}
                    </>
                  ) : (
                    t("login.cta")
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-[#CBD5E1]" />
                  <span className="text-sm text-gray-500">{t("login.or")}</span>
                  <div className="flex-1 h-px bg-[#CBD5E1]" />
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col min-[360px]:flex-row gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 border border-[#CBD5E1] rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    {t("login.google")}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-[#CBD5E1] rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t("login.github")}
                  </button>
                </div>

                {/* Sign up link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  <Link href="/signup" className="text-[#0EA5E9] hover:underline">
                    {t("login.signup")}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
