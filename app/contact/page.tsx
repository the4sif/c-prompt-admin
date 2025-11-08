"use client"

export default function ContactPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-600 mb-8">Manage contact inquiries and messages.</p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-12">
            <p className="text-gray-500">No contact messages yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}
