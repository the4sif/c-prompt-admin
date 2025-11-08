"use client"

export default function DownloadCertificatesPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Download Certificates</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <p className="text-gray-600 mb-6">Download certificates in batch or individually</p>
          <button className="px-6 py-2 bg-[#2E008F] text-white rounded-lg hover:bg-purple-800 transition-colors">
            Download Batch
          </button>
        </div>
      </div>
    </div>
  )
}
