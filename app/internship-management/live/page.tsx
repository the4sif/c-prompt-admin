"use client"

export default function LiveInternshipsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Internships</h1>
        <p className="text-gray-600 mb-8">Manage all active internship programs.</p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-12">
            <p className="text-gray-500">No live internships yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}
