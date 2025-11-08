"use client"

import type React from "react"

import CollegeSidebar from "@/components/college-sidebar"
import DashboardHeader from "@/components/dashboard-header"

export default function CollegeAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <CollegeSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
