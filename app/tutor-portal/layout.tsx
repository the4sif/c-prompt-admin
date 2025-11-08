"use client"

import type React from "react"

import TutorSidebar from "@/components/tutor-sidebar"

export default function TutorPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <TutorSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
