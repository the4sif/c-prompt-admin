"use client"

import type React from "react"

import StudentSidebar from "@/components/student-sidebar"

export default function StudentPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <StudentSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
