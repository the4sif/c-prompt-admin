import PortalHeader from "@/components/portal-header"

export default function EnrolledPrograms() {
  const programs = [
    { id: 1, name: "React Fundamentals", type: "Course", progress: 100, status: "Completed" },
    { id: 2, name: "Frontend Development Internship", type: "Internship", progress: 75, status: "In Progress" },
    { id: 3, name: "Advanced JavaScript", type: "Course", progress: 60, status: "In Progress" },
    { id: 4, name: "Full Stack Development", type: "Course", progress: 30, status: "Not Started" },
    { id: 5, name: "UI/UX Design", type: "Course", progress: 45, status: "In Progress" },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="Enrolled Programs" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Program Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programs.map((program) => (
                  <tr key={program.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{program.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{program.type}</td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#2E008F] h-2 rounded-full" style={{ width: `${program.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{program.progress}%</span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          program.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : program.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {program.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
