import PortalHeader from "@/components/portal-header"
import { Send } from "lucide-react"

export default function MyReports() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="My Reports" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Progress Report</h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Select Course</label>
              <select className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg">
                <option>React Fundamentals</option>
                <option>Advanced JavaScript</option>
                <option>Web Development</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Report Title</label>
              <input
                type="text"
                placeholder="Enter report title"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Report Content</label>
              <textarea
                rows={6}
                placeholder="Describe progress, achievements, and challenges"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#2E008F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              <Send className="w-4 h-4" />
              Submit Report
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Previous Reports</h3>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-900">React Fundamentals - November Progress</p>
              <p className="text-sm text-gray-600 mt-1">Submitted on Nov 15, 2024</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-900">Advanced JavaScript - November Progress</p>
              <p className="text-sm text-gray-600 mt-1">Submitted on Nov 10, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
