import PortalHeader from "@/components/portal-header"
import { Send } from "lucide-react"

export default function TutorHelp() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Tutor Help" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Assistance</h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Request Type</label>
              <select className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg">
                <option>Technical Support</option>
                <option>Course Related Query</option>
                <option>Student Management Help</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Brief description of your request"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Detailed Description</label>
              <textarea
                rows={5}
                placeholder="Provide detailed information about your request"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#2E008F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              <Send className="w-4 h-4" />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
