import PortalHeader from "@/components/portal-header"

export default function AssignedCourses() {
  const courses = [
    { id: 1, name: "React Fundamentals", students: 45, status: "Active" },
    { id: 2, name: "Advanced JavaScript", students: 38, status: "Active" },
    { id: 3, name: "Web Development", students: 42, status: "Active" },
    { id: 4, name: "Node.js Basics", students: 31, status: "Completed" },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="My Assigned Courses" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Course Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{course.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{course.students} students</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          course.status === "Active" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-[#2E008F] hover:underline">View Details</button>
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
