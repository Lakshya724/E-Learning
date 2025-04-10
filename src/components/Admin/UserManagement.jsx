import Sidebar_D from "../Admin/Sidebar_D"; // Sidebar import

const users = [
  {
    id: 1,
    name: "Lakshya Kumar",
    email: "lakshyakumar724@gmail.com",
    mobile: "9135005985",
    password: "lkumar12345",
  },
  {
    id: 2,
    name: "Sonu Kumar",
    email: "Sonu@gmail.com",
    mobile: "9135005985",
    password: "Sonu123",
  },
  {
    id: 3,
    name: "Ajit Kumar",
    email: "Ajit@gmail.com",
    mobile: "7897454545",
    password: "Ajit123",
  },
  {
    id: 8,
    name: "Ankit",
    email: "Ankit@gmail.com",
    mobile: "9896565655",
    password: "Ankit123",
  },
];

const UserManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[250px] bg-white shadow-md">
        <Sidebar_D />
      </div>

      {/* Main Content */}
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
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
