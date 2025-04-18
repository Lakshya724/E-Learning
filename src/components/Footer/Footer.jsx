import { motion } from "framer-motion"; 
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-16 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {/* First section */}
          <div className="space-y-3 max-w-[280px]">
            <Link to="/" className="text-xl font-bold hover:text-secondary transition duration-300">
              Skill_Elevate
            </Link>
            <p className="text-dark2 text-sm">
              Skill_Elevate is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.
            </p>
          </div>

          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-3">
              <h1 className="text-xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-1 text-sm">
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/courses")}
                  >
                    All Courses
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/WebDev")}
                  >
                    Web Development
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/mobile")}
                  >
                    Mobile Development
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/data")}
                  >
                    Data Science
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/ai-ml")}
                  >
                    AI/ML
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-1 text-sm">
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/courses")}
                  >
                    Courses
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </li>
                  <li 
                    className="cursor-pointer hover:text-secondary duration-200"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div className="space-y-3 max-w-[280px]">
            <h1 className="text-xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 rounded-s-xl bg-white w-full py-3 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-3 px-5 rounded-e-xl">
                Go
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
