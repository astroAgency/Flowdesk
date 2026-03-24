"use client"

import Link from "next/link"
import { Home, MessageSquare, FileText, Settings, Users, MoreHorizontal } from "lucide-react"
import { useLanguage } from "@/context/language-context"

function DashboardMockup() {
  const todoTasks = [
    { title: "Review design specs", tag: "Design", tagColor: "bg-purple-500" },
    { title: "Update documentation", tag: "Docs", tagColor: "bg-blue-500" },
  ]
  
  const inProgressTasks = [
    { title: "Build API endpoints", tag: "Backend", tagColor: "bg-green-500" },
    { title: "User authentication", tag: "Security", tagColor: "bg-orange-500" },
  ]
  
  const doneTasks = [
    { title: "Project setup", tag: "Setup", tagColor: "bg-teal" },
    { title: "Database schema", tag: "Backend", tagColor: "bg-green-500" },
    { title: "Landing page", tag: "Design", tagColor: "bg-purple-500" },
  ]

  return (
    <div className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gray-900/50 backdrop-blur">
      {/* Browser chrome */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-700 rounded-md px-4 py-1 text-xs text-gray-400 truncate max-w-[150px] sm:max-w-none">
            app.flowdesk.com
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="flex min-h-[300px] md:min-h-[400px]">
        {/* Sidebar */}
        <div className="w-14 md:w-16 bg-gray-800/50 border-r border-white/10 py-4 flex flex-col items-center gap-4">
          <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Home className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-400">
              <MessageSquare className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-400">
              <FileText className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-400">
              <Users className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-auto">
            <button className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-400">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main content - Kanban */}
        <div className="flex-1 p-4 md:p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-white font-semibold text-sm md:text-base">Project Board</h2>
            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 overflow-hidden">
            {/* To Do */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-gray-400 text-xs font-medium">To Do</span>
                <span className="text-gray-500 text-xs">{todoTasks.length}</span>
              </div>
              {todoTasks.map((task, i) => (
                <div
                  key={i}
                  className="bg-gray-800/80 rounded-lg p-2 md:p-3 border border-white/5"
                >
                  <p className="text-white text-xs md:text-sm mb-2 line-clamp-2">{task.title}</p>
                  <span className={`${task.tagColor} text-white text-[10px] px-2 py-0.5 rounded-full`}>
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* In Progress */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-gray-400 text-xs font-medium">In Progress</span>
                <span className="text-gray-500 text-xs">{inProgressTasks.length}</span>
              </div>
              {inProgressTasks.map((task, i) => (
                <div
                  key={i}
                  className="bg-gray-800/80 rounded-lg p-2 md:p-3 border border-white/5"
                >
                  <p className="text-white text-xs md:text-sm mb-2 line-clamp-2">{task.title}</p>
                  <span className={`${task.tagColor} text-white text-[10px] px-2 py-0.5 rounded-full`}>
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Done - hidden on xs screens */}
            <div className="hidden sm:flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-400 text-xs font-medium">Done</span>
                <span className="text-gray-500 text-xs">{doneTasks.length}</span>
              </div>
              {doneTasks.map((task, i) => (
                <div
                  key={i}
                  className="bg-gray-800/80 rounded-lg p-2 md:p-3 border border-white/5"
                >
                  <p className="text-white text-xs md:text-sm mb-2 line-clamp-2">{task.title}</p>
                  <span className={`${task.tagColor} text-white text-[10px] px-2 py-0.5 rounded-full`}>
                    {task.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in text-balance">
            {t("hero.headline1")}
            <br />
            <span className="relative inline-block">
              {t("hero.headline2").split(" ").slice(0, -2).join(" ")}{" "}
              <span className="relative">
                {t("hero.headline2").split(" ").slice(-2, -1)[0]}
                <span className="absolute left-0 right-0 bottom-0 h-2 md:h-3 bg-teal/60 -z-10 translate-y-1" />
              </span>{" "}
              {t("hero.headline2").split(" ").slice(-1)[0]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8 animate-fade-in-delay text-pretty">
            {t("hero.sub")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-delay-2">
            <Link
              href="/signup"
              className="bg-teal text-white rounded-lg px-8 py-4 font-semibold hover:bg-teal-dark transition-colors w-full sm:w-auto text-center"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              href="#features"
              className="border border-white/20 text-white rounded-lg px-8 py-4 font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto text-center"
            >
              {t("hero.cta2")}
            </Link>
          </div>

          {/* Trust text */}
          <p className="text-gray-500 text-sm">
            {t("hero.trust")}
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="max-w-5xl mx-auto">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
