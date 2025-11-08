import PortalHeader from "@/components/portal-header"

export default function ProgressJourney() {
  const timeline = [
    { date: "Jan 2024", title: "Enrolled in React Fundamentals", status: "Completed" },
    { date: "Feb 2024", title: "Started Frontend Development Internship", status: "In Progress" },
    { date: "Mar 2024", title: "Completed React Advanced Course", status: "Completed" },
  ]

  return (
    <div className="min-h-screen">
      <PortalHeader title="Progress Journey" />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Learning Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#2E008F] rounded-full"></div>
                  {index < timeline.length - 1 && <div className="w-1 h-16 bg-gray-200 mt-2"></div>}
                </div>
                <div className="pb-4">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded mt-1 inline-block ${
                      item.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
