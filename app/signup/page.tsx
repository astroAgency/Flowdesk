"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!agreed) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t("signup.title")}
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
                <p className="text-[#0EA5E9] font-medium text-lg">
                  {t("signup.success.title")}
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
                  {t("signup.title")}
                </h2>

                {/* Form Fields */}
                <div className="flex flex-col gap-4 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("signup.name")}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-[#CBD5E1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("signup.email")}
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
                      {t("signup.password")}
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
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        agreed
                          ? "bg-[#0EA5E9] border-[#0EA5E9]"
                          : "border-[#CBD5E1] hover:border-[#0EA5E9]"
                      }`}
                    >
                      {agreed && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                    <span className="text-sm text-gray-600">
                      {t("signup.agree")}{" "}
                      <Link href="#" className="text-[#0EA5E9] hover:underline">
                        {t("signup.terms")}
                      </Link>{" "}
                      {t("signup.and")}{" "}
                      <Link href="#" className="text-[#0EA5E9] hover:underline">
                        {t("signup.privacy")}
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || !agreed}
                  className="w-full bg-[#0EA5E9] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#0284C7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("signup.loading")}
                    </>
                  ) : (
                    t("signup.cta")
                  )}
                </button>

                {/* Login link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  <Link
                    href="/login"
                    className="text-[#0EA5E9] hover:underline"
                  >
                    {t("signup.login")}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
