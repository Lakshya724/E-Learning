import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { MdAnalytics } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const carouselImages = [
  "/src/assets/AIML.png",
  "/src/assets/e-learning.webp",
  "/src/assets/e-learning2.jpg",
  "/src/assets/a_5.jpg",
];

const CoursesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 min-h-screen">
      <Navbar />

      {/* Carousel Section */}
      <div className="relative w-full h-[500px] md:h-[400px] overflow-hidden">
        {carouselImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-black scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="border rounded-xl shadow-md p-10 bg-white">
          {/* Centered Heading */}
          <div className="flex justify-center mb-10">
            <h2 className="text-3xl font-bold text-center relative inline-block">
              <span className="px-6 py-2 border-2 border-orange-500 rounded-full">
                Courses We Provide
              </span>
            </h2>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
            {[
              { label: "All Courses", icon: <IoBookSharp />, path: "/courses" },
              { label: "Web Development", icon: <TbWorldWww />, path: "/WebDev" },
              { label: "Mobile Development", icon: <CiMobile3 />, path: "/mobile" },
              { label: "AI/ML", icon: <RiComputerLine />, path: "/ai-ml" },
              { label: "Data Science", icon: <MdAnalytics />, path: "/data" },
            ].map((course, index) => (
              <Link to={course.path} key={index} className="w-full">
                <div className="bg-gray-100 hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 p-6 rounded-lg text-center shadow-sm hover:shadow-md flex flex-col items-center">
                  <div className="text-4xl text-blue-500 mb-2">{course.icon}</div>
                  <p className="font-semibold text-center">{course.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesPage;
