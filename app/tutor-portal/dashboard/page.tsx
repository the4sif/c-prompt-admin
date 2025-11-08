import PortalHeader from "@/components/portal-header"

export default function TutorDashboard() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Dashboard" />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Assigned Courses</div>
            <div className="text-3xl font-bold text-[#2E008F]">4</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Total Students</div>
            <div className="text-3xl font-bold text-blue-600">156</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Active Batches</div>
            <div className="text-3xl font-bold text-green-600">3</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Completed Students</div>
            <div className="text-3xl font-bold text-purple-600">45</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome Back, Dr. Rahman!</h2>
          <p className="text-gray-600">
            You have 3 active courses with 156 students. Check your assignments and student progress to stay updated.
          </p>
        </div>
      </div>
    </div>
  )
}
