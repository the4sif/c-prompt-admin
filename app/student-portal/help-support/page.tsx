import PortalHeader from "@/components/portal-header"
import { Send } from "lucide-react"

export default function StudentHelpSupport() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Help & Support" />
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Raise a Support Request</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Describe your issue"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Category</label>
                <select className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Course Related</option>
                  <option>Certificate Issue</option>
                  <option>Account Issue</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Describe your issue in detail"
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

          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">How do I download my certificate?</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Go to the Certificates section and click Download Certificate.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Can I enroll in multiple courses?</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Yes, you can enroll in as many courses as you want from the Enrolled Programs section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
