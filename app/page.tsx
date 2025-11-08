"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Dashboard from "@/components/dashboard"
import Leads from "@/components/leads"

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          {activeSection === "dashboard" && <Dashboard />}
          {activeSection === "leads" && <Leads />}
        </main>
      </div>
    </div>
  )
}
