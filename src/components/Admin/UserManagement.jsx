import { useEffect, useState } from "react";
import Sidebar_D from "../Admin/Sidebar_D";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleRemove = (userId) => {

    const isConfirmed = window.confirm("Are you sure you want to remove this user?");
    if (isConfirmed) {

      fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          // If successful, remove the user from the local state
          setUsers(users.filter((user) => user.id !== userId));
        })
        .catch((err) => console.error("Error removing user:", err));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[250px] bg-white shadow-md">
        <Sidebar_D />
      </div>

      <div className="flex-1 p-6">
        <div className="bg-red-400 text-white text-center text-2xl font-semibold py-4 rounded-md shadow-md mb-6">
          User Management
        </div>

        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-red-400 text-white text-left">
              <tr>
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Mobile No.</th>
                <th className="py-3 px-4">Password</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.mobile}</td>
                  <td className="py-2 px-4">{user.password}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleRemove(user.id)} // Call handleRemove when button clicked
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
