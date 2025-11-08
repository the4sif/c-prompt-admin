"use client"

import { Download, Filter } from "lucide-react"
import StatCard from "./stat-card"
import SearchBar from "./search-bar"

export default function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total Leads" value="0" color="text-gray-700" />
        <StatCard label="New" value="0" color="text-green-500" />
        <StatCard label="In Progress" value="0" color="text-yellow-500" />
        <StatCard label="Closed" value="0" color="text-gray-400" />
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter size={20} className="text-gray-600" />
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium">
              <span>All Status</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm font-medium">
              <Download size={16} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Leads Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-6">All Leads (0)</h2>
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No leads found</p>
        </div>
      </div>
    </div>
  )
}
