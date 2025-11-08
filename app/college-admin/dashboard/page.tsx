"use client"

import { Users, BookOpen, Award, DollarSign } from "lucide-react"

export default function CollegeDashboardPage() {
  const stats = [
    {
      title: "Total Students",
      value: "458",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Enrolled",
      value: "385",
      icon: BookOpen,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Certified",
      value: "142",
      icon: Award,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Pending Payments",
      value: "₹45,000",
      icon: DollarSign,
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
          <h2 className="text-2xl font-bold mb-2">Welcome Back, College Administrator!</h2>
          <p className="text-blue-100">
            Manage your student activities, payments, and certifications. Use the sidebar to navigate to specific
            sections.
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
                  <p className="text-sm font-medium text-gray-900">New application from Priya Sharma</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Certificate issued for Rajesh Kumar</p>
                  <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Payment received from 5 students</p>
                  <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
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
                View Enrolled Students
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                Download Certificates
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700">
                View Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
