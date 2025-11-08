import PortalHeader from "@/components/portal-header"

export default function TutorAccount() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Account Settings" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Current Password</label>
                <input type="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">New Password</label>
                <input type="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
                <input type="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <button className="bg-[#2E008F] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Update Password
              </button>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-700">New student enrollment notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-700">Weekly student progress report</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-700">Course updates and announcements</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
