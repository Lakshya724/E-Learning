import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-b from-yellow-200 via-purple-200 to-green-200 p-4">
        <h1 className="text-2xl font-bold">Skill_Elevate</h1>
        <div className="flex flex-col items-center mt-6">
          <FaUserCircle size={80} />
          <p className="mt-2 font-semibold">Admin Name</p>
          <button className="bg-blue-500 text-white px-4 py-1 mt-2 rounded">Edit Profile</button>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="bg-blue-500 text-white p-2 rounded">Dashboard</li>
            <li className="p-2">My Course</li>
            <li className="p-2">Add Course</li>
            <li className="p-2">Users</li>
            <li className="p-2">Settings</li>
          </ul>
        </nav>
        <button className="bg-green-600 text-white w-full p-2 mt-6 rounded">Logout</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex items-center justify-between">
          <FiMenu size={24} />
          <h2 className="text-xl font-bold">Dashboard</h2>
          <FaUserCircle size={24} />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 shadow-md rounded text-center">
            <p className="font-bold">Total User</p>
            <p className="text-xl">50K</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded text-center">
            <p className="font-bold">Monthly User</p>
            <p className="text-xl">30K</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded text-center">
            <p className="font-bold">Daily User</p>
            <p className="text-xl">5K</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 shadow-md rounded text-center">Courses</div>
          <div className="bg-white p-4 shadow-md rounded text-center">Users</div>
          <div className="bg-white p-4 shadow-md rounded text-center">View Courses</div>
          <div className="bg-white p-4 shadow-md rounded text-center">Users</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
