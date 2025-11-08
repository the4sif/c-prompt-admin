import PortalHeader from "@/components/portal-header"
import { MessageSquare } from "lucide-react"

export default function StudentHelp() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Student Help" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Assist a Student</h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Select Student</label>
              <select className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg">
                <option>Alice Johnson - React Fundamentals</option>
                <option>Bob Smith - React Fundamentals</option>
                <option>Carol Davis - Advanced JavaScript</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Issue Description</label>
              <textarea
                rows={5}
                placeholder="Describe the student's issue"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Your Response/Solution</label>
              <textarea
                rows={5}
                placeholder="Provide guidance or solution"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#2E008F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Send Response
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
