import PortalHeader from "@/components/portal-header"

export default function CompletedStudents() {
  const completedStudents = [
    { id: 1, name: "Emma Thompson", course: "React Fundamentals", completionDate: "Oct 15, 2024" },
    { id: 2, name: "Frank Miller", course: "Web Development", completionDate: "Sep 20, 2024" },
    { id: 3, name: "Grace Lee", course: "Advanced JavaScript", completionDate: "Sep 10, 2024" },
    { id: 4, name: "Henry Brown", course: "React Fundamentals", completionDate: "Aug 30, 2024" },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="My Completed Students" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Course Completed</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Completion Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {completedStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.course}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.completionDate}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-[#2E008F] hover:underline">View Certificate</button>
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
