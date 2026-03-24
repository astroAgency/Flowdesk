"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  CheckSquare,
  Inbox,
  FolderKanban,
  FileText,
  MessageSquare,
  Search,
  Bell,
  LogOut,
  ChevronDown,
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  MoreHorizontal,
} from "lucide-react"

type NavItem = "home" | "tasks" | "inbox" | "projects" | "docs" | "chat"

const navItems: { id: NavItem; label: string; icon: React.ElementType }[] = [
  { id: "home", label: "Home", icon: LayoutDashboard },
  { id: "tasks", label: "My Tasks", icon: CheckSquare },
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "docs", label: "Docs", icon: FileText },
  { id: "chat", label: "Chat", icon: MessageSquare },
]

const navTitles: Record<NavItem, string> = {
  home: "Home",
  tasks: "My Tasks",
  inbox: "Inbox",
  projects: "Projects",
  docs: "Docs",
  chat: "Chat",
}

export default function AppDashboard() {
  const [activeNav, setActiveNav] = useState<NavItem>("home")

  return (
    <div className="min-h-screen flex flex-row bg-[#F1F5F9]">
      {/* Sidebar */}
      <aside className="w-16 md:w-60 bg-[#0F172A] flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0EA5E9] rounded-md flex items-center justify-center flex-shrink-0">
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
          <span className="text-white font-bold text-lg hidden md:block">Flowdesk</span>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 px-2 mt-6 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="hidden md:block text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              JD
            </div>
            <div className="hidden md:block flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">John Doe</p>
            </div>
            <button className="text-white/50 hover:text-white transition-colors hidden md:block">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white border-b border-[#E2E8F0] px-4 md:px-6 h-14 sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-gray-900">{navTitles[activeNav]}</h1>

          <div className="flex-1 max-w-sm mx-4 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-[#F1F5F9] rounded-lg pl-10 pr-4 py-2 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white font-semibold flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white text-xs font-semibold">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeNav === "home" && <HomeView />}
          {activeNav === "tasks" && <TasksView />}
          {activeNav !== "home" && activeNav !== "tasks" && (
            <PlaceholderView navItem={activeNav} />
          )}
        </main>
      </div>
    </div>
  )
}

function HomeView() {
  const stats = [
    { label: "Active Projects", value: 8, icon: FolderKanban, color: "#0EA5E9", bg: "bg-sky-50" },
    { label: "Tasks Due Today", value: 5, icon: Clock, color: "#F59E0B", bg: "bg-amber-50" },
    { label: "Team Members", value: 12, icon: Users, color: "#8B5CF6", bg: "bg-purple-50" },
    { label: "Completed This Week", value: 24, icon: CheckCircle2, color: "#10B981", bg: "bg-green-50" },
  ]

  const todoTasks = [
    { title: "Design new onboarding flow", tag: "Design", tagColor: "bg-purple-100 text-purple-700", avatar: "SK", avatarBg: "bg-purple-400", due: "Apr 3" },
    { title: "Write API documentation", tag: "Docs", tagColor: "bg-blue-100 text-blue-700", avatar: "MT", avatarBg: "bg-blue-400", due: "Apr 5" },
  ]

  const inProgressTasks = [
    { title: "Build authentication module", tag: "Backend", tagColor: "bg-green-100 text-green-700", avatar: "JD", avatarBg: "bg-[#0EA5E9]", due: "Apr 2" },
    { title: "Update pricing page", tag: "Marketing", tagColor: "bg-orange-100 text-orange-700", avatar: "DR", avatarBg: "bg-orange-400", due: "Apr 1" },
  ]

  const doneTasks = [
    { title: "Set up CI/CD pipeline", tag: "DevOps", tagColor: "bg-gray-100 text-gray-600", avatar: "JD", avatarBg: "bg-[#0EA5E9]", done: true },
    { title: "User research interviews", tag: "Research", tagColor: "bg-pink-100 text-pink-700", avatar: "SK", avatarBg: "bg-purple-400", done: true },
  ]

  const activities = [
    { avatar: "SK", avatarBg: "bg-purple-400", text: "Sarah commented on Design onboarding flow", time: "2m ago" },
    { avatar: "MT", avatarBg: "bg-blue-400", text: "Marcus completed Set up CI/CD pipeline", time: "1h ago" },
    { avatar: "DR", avatarBg: "bg-orange-400", text: "Diana moved Update pricing page to In Progress", time: "3h ago" },
    { avatar: "JD", avatarBg: "bg-[#0EA5E9]", text: "You created Build authentication module", time: "5h ago" },
    { avatar: "SK", avatarBg: "bg-purple-400", text: "Sarah joined the project", time: "1d ago" },
  ]

  const deadlines = [
    { title: "Update pricing page", date: "Today", borderColor: "border-red-500", badgeBg: "bg-red-100 text-red-700" },
    { title: "Build authentication module", date: "Tomorrow", borderColor: "border-amber-500", badgeBg: "bg-amber-100 text-amber-700" },
    { title: "Design new onboarding flow", date: "Apr 3", borderColor: "border-blue-500", badgeBg: "bg-gray-100 text-gray-600" },
    { title: "Write API documentation", date: "Apr 5", borderColor: "border-gray-400", badgeBg: "bg-gray-100 text-gray-600" },
  ]

  return (
    <div>
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Good morning, John</h2>
        <p className="text-gray-500 text-sm">{"Here's what's happening with your projects today."}</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white rounded-xl p-4 border border-[#E2E8F0] shadow-sm">
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Kanban */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Project Board</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                Q2 Launch
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* To Do */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-sm font-medium text-gray-600">To Do</span>
                </div>
                {todoTasks.map((task) => (
                  <TaskCard key={task.title} task={task} />
                ))}
              </div>

              {/* In Progress */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span className="text-sm font-medium text-gray-600">In Progress</span>
                </div>
                {inProgressTasks.map((task) => (
                  <TaskCard key={task.title} task={task} />
                ))}
              </div>

              {/* Done */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-gray-600">Done</span>
                </div>
                {doneTasks.map((task) => (
                  <TaskCard key={task.title} task={task} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Activity Feed */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="flex flex-col">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 py-3 ${
                    index < activities.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  }`}
                >
                  <div className={`w-8 h-8 ${activity.avatarBg} rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}>
                    {activity.avatar}
                  </div>
                  <p className="text-sm text-gray-600 flex-1">{activity.text}</p>
                  <span className="text-xs text-gray-400 flex-shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">Deadlines</h3>
            </div>
            <div className="flex flex-col">
              {deadlines.map((deadline, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 py-2.5 ${
                    index < deadlines.length - 1 ? "border-b border-[#E2E8F0]" : ""
                  }`}
                >
                  <div className={`w-1 h-8 ${deadline.borderColor} rounded-full border-l-2`} />
                  <p className="text-sm text-gray-700 flex-1">{deadline.title}</p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${deadline.badgeBg}`}>
                    {deadline.date}
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

interface TaskCardProps {
  task: {
    title: string
    tag: string
    tagColor: string
    avatar: string
    avatarBg: string
    due?: string
    done?: boolean
  }
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-[#F8FAFC] rounded-lg p-3 border border-[#E2E8F0] mb-2 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer">
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-2 ${task.tagColor}`}>
        {task.tag}
      </span>
      <p className={`text-sm font-medium mb-2 ${task.done ? "line-through text-gray-400" : "text-gray-800"}`}>
        {task.title}
      </p>
      <div className="flex items-center justify-between">
        <div className={`w-6 h-6 ${task.avatarBg} rounded-full flex items-center justify-center text-white text-[10px] font-semibold`}>
          {task.avatar}
        </div>
        {task.due && <span className="text-xs text-gray-400">{task.due}</span>}
      </div>
    </div>
  )
}

function TasksView() {
  const [filter, setFilter] = useState<"all" | "inProgress" | "done">("all")
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set())

  const tasks = [
    { id: "1", title: "Design new onboarding flow", tag: "Design", tagColor: "bg-purple-100 text-purple-700", due: "Apr 3" },
    { id: "2", title: "Write API documentation", tag: "Docs", tagColor: "bg-blue-100 text-blue-700", due: "Apr 5" },
    { id: "3", title: "Build authentication module", tag: "Backend", tagColor: "bg-green-100 text-green-700", due: "Apr 2" },
    { id: "4", title: "Update pricing page", tag: "Marketing", tagColor: "bg-orange-100 text-orange-700", due: "Apr 1" },
    { id: "5", title: "Set up CI/CD pipeline", tag: "DevOps", tagColor: "bg-gray-100 text-gray-600", due: "Mar 28" },
    { id: "6", title: "User research interviews", tag: "Research", tagColor: "bg-pink-100 text-pink-700", due: "Mar 30" },
  ]

  const toggleTask = (id: string) => {
    setCheckedTasks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredTasks = tasks.filter((task) => {
    const isDone = checkedTasks.has(task.id)
    if (filter === "done") return isDone
    if (filter === "inProgress") return !isDone
    return true
  })

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
        <button className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#0284C7] transition-colors">
          + New Task
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 mb-6">
        {(["all", "inProgress", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-[#0EA5E9] text-white"
                : "bg-white text-gray-600 border border-[#E2E8F0] hover:bg-gray-50"
            }`}
          >
            {f === "all" ? "All" : f === "inProgress" ? "In Progress" : "Done"}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        {filteredTasks.map((task, index) => {
          const isDone = checkedTasks.has(task.id)
          return (
            <div
              key={task.id}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group ${
                index < filteredTasks.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleTask(task.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  isDone ? "bg-[#0EA5E9] border-[#0EA5E9]" : "border-gray-300 hover:border-[#0EA5E9]"
                }`}
              >
                {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
              </button>

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${isDone ? "line-through text-gray-400" : "text-gray-800"}`}>
                  {task.title}
                </p>
              </div>

              {/* Tag */}
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full hidden sm:inline-block ${task.tagColor}`}>
                {task.tag}
              </span>

              {/* Due Date */}
              <span className="text-xs text-gray-400 hidden sm:inline-block">{task.due}</span>

              {/* More Button */}
              <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PlaceholderView({ navItem }: { navItem: NavItem }) {
  const icons: Record<NavItem, React.ElementType> = {
    home: LayoutDashboard,
    tasks: CheckSquare,
    inbox: Inbox,
    projects: FolderKanban,
    docs: FileText,
    chat: MessageSquare,
  }

  const descriptions: Record<NavItem, string> = {
    home: "",
    tasks: "",
    inbox: "Your notifications and messages will appear here.",
    projects: "Manage all your team projects in one place.",
    docs: "Create and collaborate on documents.",
    chat: "Real-time messaging with your team.",
  }

  const Icon = icons[navItem]

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <Icon className="w-16 h-16 text-gray-300 mb-4" />
      <h2 className="text-xl font-semibold text-gray-400 mb-2">Coming soon</h2>
      <p className="text-gray-400 text-sm text-center max-w-xs">{descriptions[navItem]}</p>
    </div>
  )
}
