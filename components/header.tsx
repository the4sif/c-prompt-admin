"use client"

import { LogOut } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
        <LogOut size={20} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </header>
  )
}
