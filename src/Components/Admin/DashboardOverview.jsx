import { FaBuilding, FaUsers, FaImage, FaChartLine } from "react-icons/fa";

export default function DashboardOverview() {
  const stats = [
    {
      title: "Total Properties",
      value: "24",
      description: "Properties listed",
      icon: <FaBuilding className="h-5 w-5 text-gray-500" />,
      trend: "+12% from last month",
    },
    {
      title: "Active Leads",
      value: "156",
      description: "Pending inquiries",
      icon: <FaUsers className="h-5 w-5 text-gray-500" />,
      trend: "+23% from last month",
    },
    {
      title: "Gallery Posts",
      value: "89",
      description: "Happy moments shared",
      icon: <FaImage className="h-5 w-5 text-gray-500" />,
      trend: "+8% from last month",
    },
    {
      title: "Monthly Revenue",
      value: "$45,231",
      description: "Commission earned",
      icon: <FaChartLine className="h-5 w-5 text-gray-500" />,
      trend: "+18% from last month",
    },
  ];

  return (
    <div className="space-y-6 mt-15">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500">
          Welcome back! Here's what's happening with your real estate business.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">{stat.title}</h2>
              {stat.icon}
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.description}</p>
              <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-gray-500 mb-4">
            Latest updates from your platform
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">
                  New property inquiry received
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">
                  Property "Luxury Villa" was published
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">
                  3 new leads awaiting response
                </p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <p className="text-sm text-gray-500 mb-4">
            Frequently used features
          </p>
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <FaBuilding className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Add New Property</span>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <FaImage className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Upload Gallery Post</span>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <FaUsers className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">View Recent Leads</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
