import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Data = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses");
        const data = await res.json();
        const filtered = data.filter(course => course.category === "DataScience");
        setCourses(filtered);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

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
        style={{ backgroundImage: "url('src/assets/Data.png')" }}
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
        <h3 className="text-lg font-bold">
          All the skills related to Data Science...
        </h3>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {["EXCEL", "POWER BI", "DATA SCIENCE", "SQL"].map((tech, index) => (
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
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={index}
              className="w-60 p-4 bg-white shadow-lg rounded-lg text-center"
            >
              <img
                src={`http://localhost:5000${course.image}`}
                alt={course.title}
                className="w-full h-32 rounded-lg object-cover"
              />
              <h4 className="mt-2 font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600">{course.instructor}</p>
              <Link
                to="/DataScience-details"
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg inline-block"
              >
                Free Learning
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No courses found for Data Science.</p>
        )}
      </div>

      {/* Learners Section */}
      <div className="bg-[#fdfce8] py-8 text-center mt-10">
        <h3 className="text-lg font-semibold text-black">
          Some of our Learners
        </h3>
        <div className="flex justify-center mt-4 space-x-6">
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
      <div className="bg-[#7a739d] text-white text-center py-4 mt-0">
        <p className="text-lg font-medium">
          Our learners can access content from anywhere in the world.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Data;
