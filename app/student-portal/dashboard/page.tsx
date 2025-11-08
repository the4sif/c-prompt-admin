import PortalHeader from "@/components/portal-header"

export default function StudentDashboard() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Dashboard" />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Enrolled Programs</div>
            <div className="text-3xl font-bold text-[#2E008F]">5</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">In Progress</div>
            <div className="text-3xl font-bold text-blue-600">3</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Completed</div>
            <div className="text-3xl font-bold text-green-600">2</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-2">Certificates</div>
            <div className="text-3xl font-bold text-purple-600">2</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome Back!</h2>
          <p className="text-gray-600">
            Your personal learning dashboard is ready. Track your progress, access your enrolled programs, and manage
            your certificates from here.
          </p>
        </div>
      </div>
    </div>
  )
}
