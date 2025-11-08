import PortalHeader from "@/components/portal-header"

export default function TutorProfile() {
  return (
    <div className="min-h-screen">
      <PortalHeader title="Profile" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2E008F] to-blue-600 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">DR</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dr. Rahman</h2>
              <p className="text-gray-600">dr.rahman@tecxon.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                defaultValue="Rahman"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                defaultValue="Khan"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                defaultValue="dr.rahman@tecxon.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                defaultValue="+1 987 654 3210"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">Specialization</label>
              <input
                type="text"
                defaultValue="Full Stack Web Development"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button className="mt-6 bg-[#2E008F] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
