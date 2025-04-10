import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import Sidebar_D from "../Admin/Sidebar_D"; // Import Sidebar

const Dashboard = () => {
  const userGrowthData = [
    { month: "Jan", users: 20 },
    { month: "Feb", users: 25 },
    { month: "Mar", users: 30 },
    { month: "Apr", users: 35 },
    { month: "May", users: 40 },
    { month: "June", users: 50 },
    { month: "July", users: 75 },
  ];

  const userDistributionData = [
    { name: "Active", value: 30, color: "#28a745" },
    { name: "Inactive", value: 20, color: "#dc3545" },
    { name: "New", value: 25, color: "#f39c12" },
    { name: "Returning", value: 25, color: "#8e44ad" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar_D />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-3xl font-bold mb-12 text-gray-800">Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-3 gap-6 mb-24">
          {["Total Users", "Monthly Users", "Daily Users"].map((title, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center font-bold text-lg"
            >
              {title}
            </div>
          ))}
        </div>

        {/* Charts Section (Bottom Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart - Left */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">User Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Right */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">User Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userDistributionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {userDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
