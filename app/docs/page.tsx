"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { Search, Rocket, CheckSquare, MessageSquare, FileText, Zap, Code2, ArrowRight } from "lucide-react"

const categories = [
  {
    icon: Rocket,
    titleKey: "docs.cat1.title",
    descKey: "docs.cat1.desc",
  },
  {
    icon: CheckSquare,
    titleKey: "docs.cat2.title",
    descKey: "docs.cat2.desc",
  },
  {
    icon: MessageSquare,
    titleKey: "docs.cat3.title",
    descKey: "docs.cat3.desc",
  },
  {
    icon: FileText,
    titleKey: "docs.cat4.title",
    descKey: "docs.cat4.desc",
  },
  {
    icon: Zap,
    titleKey: "docs.cat5.title",
    descKey: "docs.cat5.desc",
  },
  {
    icon: Code2,
    titleKey: "docs.cat6.title",
    descKey: "docs.cat6.desc",
  },
]

const guides = [
  { titleKey: "docs.g1", time: 5 },
  { titleKey: "docs.g2", time: 3 },
  { titleKey: "docs.g3", time: 8 },
  { titleKey: "docs.g4", time: 4 },
  { titleKey: "docs.g5", time: 10 },
]

export default function DocsPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("docs.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            {t("docs.sub")}
          </p>
          
          {/* Search bar */}
          <div className="max-w-full sm:max-w-xl mx-4 sm:mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t("docs.search")}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#CBD5E1] bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent text-base"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.titleKey}
                href="#"
                className="bg-white rounded-2xl border border-[#CBD5E1] shadow-sm p-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(category.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {t(category.descKey)}
                </p>
                <span className="text-[#0EA5E9] text-sm font-medium group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Guides */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t("docs.guides.title")}
          </h2>
          <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-sm divide-y divide-[#CBD5E1]">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="font-medium text-gray-900 flex-1 flex-wrap">
                  {t(guide.titleKey)}
                </span>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  {guide.time} {t("docs.read")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
