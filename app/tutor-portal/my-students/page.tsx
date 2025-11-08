import PortalHeader from "@/components/portal-header"

export default function MyStudents() {
  const students = [
    { id: 1, name: "Alice Johnson", course: "React Fundamentals", progress: 85 },
    { id: 2, name: "Bob Smith", course: "React Fundamentals", progress: 72 },
    { id: 3, name: "Carol Davis", course: "Advanced JavaScript", progress: 90 },
    { id: 4, name: "David Wilson", course: "Web Development", progress: 65 },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="My Students" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.course}</td>
                    <td className="px-6 py-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#2E008F] h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500">{student.progress}%</span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-[#2E008F] hover:underline">View Profile</button>
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
