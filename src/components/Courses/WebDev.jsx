import React from "react";
import Navbar from "../Navbar/Navbar";  // Import Navbar
import Footer from "../Footer/Footer"; // Import Footer

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-72 bg-cover bg-center" 
           style={{ backgroundImage: "url('src/assets/img1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-xl font-semibold">India Most Loved Coding Community ❤️</h2>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold">All the skills related to Web Development....</h3>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {["HTML", "CSS", "JAVASCRIPT", "React"].map((tech, index) => (
          <button key={index} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {tech}
          </button>
        ))}
      </div>

      {/* Course Cards Section */}
      <div className="flex justify-center flex-wrap gap-6 px-10">
        {courses.map((course, index) => (
          <div key={index} className="w-64 p-4 bg-white shadow-lg rounded-lg text-center">
            <img src={course.image} alt={course.title} className="w-full h-32 rounded-lg" />
            <h4 className="mt-2 font-semibold">{course.title}</h4>
            <p className="text-sm text-gray-600">{course.instructor}</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
              Free Learning
            </button>
          </div>
        ))}
      </div>

      {/* Learners Section */}
      <div className="bg-yellow-50 py-8 text-center mt-10">
        <h3 className="text-lg font-semibold">Some of our Learners</h3>
        <div className="flex justify-center mt-4 space-x-4">
          {learners.map((learner, index) => (
            <img key={index} src={learner} alt="Learner" className="w-16 h-16 rounded-full" />
          ))}
        </div>
        <p className="mt-4 text-gray-700">Our learners can access content from anywhere in the world.</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

// Sample Data for Courses
const courses = [
  { image: "src/assets/img1.jpg", title: "HTML Complete Basic Level", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img2.png", title: "HTML Complete Average Level", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img3.png", title: "Complete CSS: Beginner to Advanced", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img4.png", title: "Complete JavaScript", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img5.png", title: "Complete React", instructor: "Prof. Nikunj Vadher" },
];

// Learner Images
const learners = [ 
  { image : "src/assets/L_img1.webp" },
  { image : "src/assets/L_img2.jpg" },
  { image : "src/assets/L_img3.webp" },
  { image : "src/assets/L_img4.jpg" },
  { image : "src/assets/L_img5.webp" },
 ];
