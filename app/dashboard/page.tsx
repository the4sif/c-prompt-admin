"use client"

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 mb-8">
            Welcome to your admin panel. Select an option from the sidebar to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Stats Cards */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Applications</h3>
              <p className="text-3xl font-bold text-[#2E008F]">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Active Internships</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Published Courses</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
