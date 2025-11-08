"use client"
import TecxonSidebar from "@/components/tecxon-sidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <TecxonSidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-4 0v3m4-3v3m3 11.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Total Students", value: "1,245", icon: "👥" },
                { label: "Universities", value: "42", icon: "🏫" },
                { label: "Active Courses", value: "87", icon: "📚" },
                { label: "Active Internships", value: "156", icon: "💼" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                    <span className="text-4xl opacity-50">{stat.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#2E008F] to-blue-600 rounded-lg shadow-md p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome Back, Super Admin!</h2>
              <p className="text-blue-100">
                Manage your Tecxon platform efficiently. Navigate through the sidebar to access all administrative
                features.
              </p>
            </div>

            {/* Recent Activity & Quick Access */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { activity: "New application from John Doe", time: "2 hours ago" },
                    { activity: "Course 'React Fundamentals' published", time: "5 hours ago" },
                    { activity: "Payment received from XYZ University", time: "1 day ago" },
                    { activity: "New internship posting created", time: "2 days ago" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="w-2 h-2 rounded-full bg-[#2E008F]"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{item.activity}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
                <div className="space-y-3">
                  {[
                    { name: "View Applications", icon: "📋" },
                    { name: "Manage Courses", icon: "📖" },
                    { name: "Finance Reports", icon: "💹" },
                    { name: "User Management", icon: "👤" },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#2E008F]">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
