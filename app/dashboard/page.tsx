"use client"

import { Users, Building2, BookOpen, Briefcase } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Students",
      value: "1,245",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Universities",
      value: "42",
      icon: Building2,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Active Courses",
      value: "87",
      icon: BookOpen,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Active Internships",
      value: "156",
      icon: Briefcase,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#2E008F] to-blue-700 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome Back, Super Admin!</h2>
          <p className="text-blue-100">
            Manage your Tecxon platform efficiently. Navigate through the sidebar to access all administrative features.
          </p>
        </div>

        {/* Recent Activity & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-[#2E008F] rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New application from John Doe</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Course 'React Fundamentals' published</p>
                  <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New internship from Tech Company</p>
                  <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                View Applications
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                Manage Courses
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                View Reports
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                Manage Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
