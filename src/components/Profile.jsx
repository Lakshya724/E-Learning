import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Invalid user data. Please login again.");
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setName(parsedUser.name);
    setMobile(parsedUser.mobile);
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(http://localhost:5000/update-user/${user.id}, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Profile updated successfully!");
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user)); // ✅ update localStorage
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#e8cf41]">Your Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mobile:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="text"
            value={user.password}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Update Profile
        </button>
      </form>
    </div>

  );


export default Profile;
