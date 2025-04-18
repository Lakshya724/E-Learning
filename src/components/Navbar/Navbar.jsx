import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Courses", path: "/Courseselect" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUsername(parsedUser.name);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  
    // Dispatch event on each keystroke
    const event = new CustomEvent("courseSearch", {
      detail: value,
    });
    window.dispatchEvent(event);
  };
  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  
    // Send custom event to notify other components of the search query
    const event = new CustomEvent("courseSearch", {
      detail: searchQuery,
    });
    window.dispatchEvent(event);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Skill_Elevate Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-secondary">
          Skill_Elevate
        </Link>

        {/* Search Box placed between logo and menu */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-1/2 lg:w-1/4 mx-6" // Smaller size for the search box
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-lg w-full text-sm"
            placeholder="Search..."
          />
          <button type="submit" className="absolute right-2 top-2 text-gray-500">
            🔍
          </button>
        </form>

        {/* Navbar Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 relative">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}

            {!isLoggedIn ? (
              <button
                className="primary-btn"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-2xl text-gray-700 hover:text-secondary"
                >
                  <FaUserCircle />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                    <div className="px-4 py-2 font-semibold border-b">
                      {username}
                    </div>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate("/Profile");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate("/change-password");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Change Password
                    </button>
                    <hr />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 bg-red-500 text-white hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
