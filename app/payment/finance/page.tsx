"use client"

export default function FinanceReportsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Finance Reports</h1>
        <p className="text-gray-600 mb-8">View financial reports and transactions.</p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center py-12">
            <p className="text-gray-500">No financial data available</p>
          </div>
        </div>
      </div>
    </div>
  )
}
