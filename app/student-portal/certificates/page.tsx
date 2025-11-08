import PortalHeader from "@/components/portal-header"
import { Download } from "lucide-react"

export default function Certificates() {
  const certificates = [
    { id: 1, name: "React Fundamentals Certificate", issueDate: "Jan 2024", status: "Verified" },
    { id: 2, name: "Advanced JavaScript Certificate", issueDate: "Dec 2023", status: "Verified" },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="Certificates" />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-500">Issued: {cert.issueDate}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {cert.status}
                </span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-[#2E008F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all">
                <Download className="w-4 h-4" />
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
