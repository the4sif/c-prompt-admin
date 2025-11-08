"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import { Home, Compass, BookOpen, Award, User, LifeBuoy, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  subItems?: MenuItem[]
  href?: string
}

export default function StudentSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      href: "/student-portal/dashboard",
    },
    {
      id: "progress-journey",
      label: "Progress Journey",
      icon: <Compass className="w-5 h-5" />,
      href: "/student-portal/progress-journey",
    },
    {
      id: "enrolled-programs",
      label: "Enrolled Programs",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/student-portal/enrolled-programs",
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <Award className="w-5 h-5" />,
      href: "/student-portal/certificates",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
      href: "/student-portal/profile",
    },
    {
      id: "account",
      label: "Account",
      icon: <User className="w-5 h-5" />,
      href: "/student-portal/account",
    },
    {
      id: "help-support",
      label: "Help & Support",
      icon: <LifeBuoy className="w-5 h-5" />,
      href: "/student-portal/help-support",
    },
  ]

  const renderMenuItem = (item: MenuItem, isSubItem = false) => {
    const isActive = item.href && pathname === item.href

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (item.href) {
              router.push(item.href)
            }
          }}
          className={cn(
            "w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            isSubItem ? "ml-4 pl-2" : "",
            isActive ? "bg-[#2E008F] text-white shadow-md" : "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
            "group",
          )}
        >
          <div className="flex items-center gap-3">
            <span className={cn(isActive ? "text-white" : "text-gray-600 group-hover:text-[#2E008F]")}>
              {item.icon}
            </span>
            <span className="text-pretty">{item.label}</span>
          </div>
        </button>
      </div>
    )
  }

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 flex flex-col overflow-hidden shadow-sm">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="relative h-12 w-full">
          <Image src="/tecxon-logo.png" alt="Tecxon Logo" fill className="object-contain object-left" priority />
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-4 space-y-1">{menuItems.map((item) => renderMenuItem(item))}</div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2E008F] to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">John Smith</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/login")}
            className="text-gray-400 hover:text-red-600 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
