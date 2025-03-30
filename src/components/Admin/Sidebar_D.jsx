import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar_D = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-yellow-200 to-blue-200 p-4 flex flex-col items-center shadow-lg">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <div className="my-4">
        <img
          src="src/assets/Profile_d.jpeg" // Ensure the image is inside the public/assets folder
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit Profile</button>
      <nav className="w-full mt-6 flex flex-col gap-2">
        {["Dashboard", "Course List", "Add Course", "User Management", "Settings"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={`block px-6 py-2 text-lg font-semibold rounded ${
              active === item ? "bg-blue-500 text-white" : "text-black hover:bg-blue-300"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </Link>
        ))}
      </nav>
      <button className="mt-auto w-full bg-green-500 text-white py-2 font-bold py-2 rounded">Logout</button>
    </div>
  );
};

export default Sidebar_D;
