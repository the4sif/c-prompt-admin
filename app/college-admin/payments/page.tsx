"use client"

import { DollarSign, TrendingUp, AlertCircle } from "lucide-react"

export default function PaymentsPage() {
  const paymentStats = [
    { label: "Total Received", amount: "₹2,45,000", icon: DollarSign, color: "bg-green-100 text-green-600" },
    { label: "Pending Amount", amount: "₹45,000", icon: AlertCircle, color: "bg-orange-100 text-orange-600" },
    { label: "This Month", amount: "₹65,000", icon: TrendingUp, color: "bg-blue-100 text-blue-600" },
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Payments Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {paymentStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Reports</h3>
          <p className="text-gray-600">Detailed payment reports and analytics will be displayed here</p>
        </div>
      </div>
    </div>
  )
}
