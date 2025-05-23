/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses");
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data); // Initially, show all courses
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Handle search functionality from Navbar
  useEffect(() => {
    const handleSearch = (e) => {
      const searchTerm = e.detail.toLowerCase();
      setSearchTerm(searchTerm);

      // Filter courses based on title or instructor name
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm) ||
          course.instructor.toLowerCase().includes(searchTerm) ||
          course.category.toLowerCase().includes(searchTerm)
      );
      setFilteredCourses(filtered);
    };

    window.addEventListener("courseSearch", handleSearch);

    return () => {
      window.removeEventListener("courseSearch", handleSearch);
    };
  }, [courses]);

  const learners = [
    { image: "src/assets/L_img1.webp" },
    { image: "src/assets/L_img2.jpg" },
    { image: "src/assets/L_img3.webp" },
    { image: "src/assets/L_img4.jpg" },
    { image: "src/assets/L_img5.webp" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-xl font-semibold">
            India&apos;s Most Loved Coding Community ❤️
          </h2>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold">ALL COURSES</h3>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {[
          "HTML", "CSS", "JAVASCRIPT", "React", "NUMPY", "PYTHON", "PYTORCH",
          "REACT-NATIVE", "FLUTTER", "SWIFT", "SQL", "EXCEL"
        ].map((tech, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Course Cards Section */}
      <div className="flex justify-center flex-wrap gap-7 px-10">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/course/${course.id}`} 
              key={course.id}
              className="w-60"
            >
              <div className="p-4 bg-blue-200 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-200">
                <img
                  src={`http://localhost:5000${course.image}`}
                  alt={course.title}
                  className="w-full h-32 rounded-lg object-cover"
                />
                <h4 className="mt-2 font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
                  Free Learning
                </button>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">No courses found.</p>
        )}
      </div>

      {/* Learners Section */}
      <div className="bg-[#fdfce8] py-8 text-center mt-20">
        <h3 className="text-lg font-semibold text-black">Some of our Learners</h3>
        <div className="flex justify-center mt-5 space-x-10">
          {learners.map((learner, index) => (
            <img
              key={index}
              src={learner.image}
              alt={`Learner ${index + 1}`}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
          ))}
        </div>
      </div>

      {/* Full-width text section */}
      <div className="bg-[#7a739d] text-white text-center py-4 mt-0 mb-[5px]">
        <p className="text-lg font-medium">
          Our learners can access content from anywhere in the world.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllCourses;
