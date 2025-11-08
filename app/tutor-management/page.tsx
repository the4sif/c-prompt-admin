"use client"

export default function TutorManagementPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tutor Management</h1>
        <p className="text-gray-600 mb-8">Manage tutors and their course assignments.</p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-12">
            <p className="text-gray-500">No tutors assigned</p>
          </div>
        </div>
      </div>
    </div>
  )
}
