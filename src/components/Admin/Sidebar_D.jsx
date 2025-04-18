import { Link, useLocation } from "react-router-dom";

const Sidebar_D = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Map text labels to routes
  const links = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Course List", to: "/course-list" },
    { label: "Add Course", to: "/add-course" },
    { label: "User Management", to: "/user-management" },
    
  ];

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-yellow-200 to-blue-200 p-4 flex flex-col items-center shadow-lg">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      {/* Profile Picture */}
      <div className="my-4">
        <img
          src="src/assets/Profile_d.jpeg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </div>

      
      {/* Nav Links */}
      <nav className="w-full mt-6 flex flex-col gap-2">
        {links.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={`block px-6 py-2 text-lg font-semibold rounded transition ${
              currentPath === to
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-300"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <Link
        to="/admin-login"
        className="mt-auto w-full bg-red-500 text-white py-2 font-bold rounded text-center"
      >
        Logout
      </Link>
    </div>
  );
};

export default Sidebar_D;
