"use client"

interface StatCardProps {
  label: string
  value: string
  color: string
}

export default function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-sm transition-shadow">
      <p className="text-gray-500 text-sm mb-2">{label}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  )
}
