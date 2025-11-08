"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  ChevronDown,
  Home,
  Users,
  BookOpen,
  Briefcase,
  DollarSign,
  Award,
  Mail,
  MessageSquare,
  Rss,
  BriefcaseIcon,
  Settings,
  LifeBuoy,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  subItems?: MenuItem[]
  href?: string
}

export default function TecxonSidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["enrolled"])
  const [activeItem, setActiveItem] = useState("dashboard")

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      href: "/dashboard",
    },
    {
      id: "enrolled",
      label: "Enrolled",
      icon: <Users className="w-5 h-5" />,
      subItems: [
        { id: "applications", label: "Applications", icon: <Mail className="w-4 h-4" /> },
        { id: "internships", label: "Internships", icon: <Briefcase className="w-4 h-4" /> },
        { id: "courses", label: "Courses", icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    {
      id: "course-management",
      label: "Course Management",
      icon: <BookOpen className="w-5 h-5" />,
      subItems: [
        { id: "published-courses", label: "Published Courses", icon: <BookOpen className="w-4 h-4" /> },
        { id: "new-courses", label: "New Courses", icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    {
      id: "internship-management",
      label: "Internship Management",
      icon: <BriefcaseIcon className="w-5 h-5" />,
      subItems: [
        { id: "live-internships", label: "Live Internships", icon: <Briefcase className="w-4 h-4" /> },
        { id: "new-internships", label: "New Internships", icon: <Briefcase className="w-4 h-4" /> },
      ],
    },
    {
      id: "payment",
      label: "Payment",
      icon: <DollarSign className="w-5 h-5" />,
      subItems: [
        { id: "finance-reports", label: "Finance Reports", icon: <DollarSign className="w-4 h-4" /> },
        { id: "college-reports", label: "Reports by College", icon: <DollarSign className="w-4 h-4" /> },
      ],
    },
    {
      id: "certification",
      label: "Certification",
      icon: <Award className="w-5 h-5" />,
      subItems: [
        { id: "internship-certs", label: "Internship Certificates", icon: <Award className="w-4 h-4" /> },
        { id: "course-certs", label: "Course Certificates", icon: <Award className="w-4 h-4" /> },
      ],
    },
  ]

  const otherMenuItems: MenuItem[] = [
    {
      id: "contact",
      label: "Contact",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: <Rss className="w-5 h-5" />,
    },
    {
      id: "career",
      label: "Career",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      id: "customization",
      label: "Website Customization",
      icon: <Settings className="w-5 h-5" />,
      subItems: [
        { id: "hero-section", label: "Hero Section", icon: <Settings className="w-4 h-4" /> },
        { id: "published-hero", label: "Published Hero", icon: <Settings className="w-4 h-4" /> },
        { id: "placement-logos", label: "Placement Company Logos", icon: <Settings className="w-4 h-4" /> },
        { id: "floating-alerts", label: "Floating Alerts", icon: <Settings className="w-4 h-4" /> },
      ],
    },
    {
      id: "tutor-management",
      label: "Tutor Management",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "user-management",
      label: "User Management",
      icon: <Users className="w-5 h-5" />,
      subItems: [
        { id: "admin-staff", label: "Admin Staff", icon: <User className="w-4 h-4" /> },
        { id: "institutions", label: "Universities & Colleges", icon: <Users className="w-4 h-4" /> },
      ],
    },
    {
      id: "help-support",
      label: "Help & Support",
      icon: <LifeBuoy className="w-5 h-5" />,
    },
  ]

  const renderMenuItem = (item: MenuItem, isSubItem = false) => {
    const isExpanded = expandedItems.includes(item.id)
    const isActive = activeItem === item.id
    const hasSubItems = item.subItems && item.subItems.length > 0

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            setActiveItem(item.id)
            if (hasSubItems) {
              toggleExpand(item.id)
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
          {hasSubItems && (
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isExpanded ? "rotate-180" : "",
                isActive ? "text-white" : "text-gray-600",
              )}
            />
          )}
        </button>

        {hasSubItems && isExpanded && (
          <div className="mt-1 space-y-1">{item.subItems.map((subItem) => renderMenuItem(subItem, true))}</div>
        )}
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
        {/* Main Menu */}
        <div className="px-3 py-4">
          <div className="space-y-1">{menuItems.map((item) => renderMenuItem(item))}</div>
        </div>

        {/* Divider */}
        <div className="px-3 my-2">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* Others Section */}
        <div className="px-3 py-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">Others</p>
          <div className="space-y-1">{otherMenuItems.map((item) => renderMenuItem(item))}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2E008F] to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">MA</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-900">Mohd Asif</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
