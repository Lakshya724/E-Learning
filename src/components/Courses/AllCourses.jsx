import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import Footer from "../Footer/Footer"; // Import Footer

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-80 bg-cover bg-center" 
           style={{ backgroundImage: "url('src/assets/img1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-xl font-semibold">India's Most Loved Coding Community ❤️</h2>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold">ALL COURSES</h3>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {["HTML", "CSS", "JAVASCRIPT", "React","NUMPY", "PYTHON", "PYTORCH", "REACT-NATIVE","FLUTTER", "SWIFT", "SQL", "EXCEL"].map((tech, index) => (
          <button key={index} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {tech}
          </button>
        ))}
      </div>

      {/* Course Cards Section */}
      <div className="flex justify-center flex-wrap gap-7 px-10">
        {courses.map((course, index) => (
          <div key={index} className="w-60 p-4 bg-blue-200 shadow-lg rounded-lg text-center">
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
      <div className="bg-[#fdfce8] py-8 text-center mt-20">
        <h3 className="text-lg font-semibold text-black">Some of our Learners</h3>
        <div className="flex justify-center mt-5 space-x-10">
          {learners.map((learner, index) => (
            <img key={index} src={learner.image} alt={`Learner ${index + 1}`} 
                 className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover" />
          ))}
        </div>
      </div>

      {/* Full-width text section */}
      <div className="bg-[#7a739d] text-white text-center py-4 mt-0 mb-[5px]">
        <p className="text-lg font-medium">Our learners can access content from anywhere in the world.</p>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

// Sample Data for Courses
const courses = [
  { image: "src/assets/img1.jpg", title: "HTML Complete Basic Level 1", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img2.png", title: "HTML Complete Average Level", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img3.png", title: "Complete CSS: Beginner to Advanced", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img4.png", title: "Complete JavaScript from Scratch", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img5.png", title: "Complete React from Scratch ", instructor: "Prof. Nikunj Vadher" },
  { image: "src/assets/img7.png", title: "Introduction to Mobile App Development & more", instructor: "Prof. Pervez Belim " },
  { image: "src/assets/img8.png", title: "Introduction to Mobile App Development & more", instructor: "Prof. Pervez Belim" },
  { image: "src/assets/img9.png", title: "Introduction to Mobile App Development & more", instructor: "Prof. Pervez Belim" },
  { image: "src/assets/img10.png", title: "Introduction to Mobile App Development & more", instructor: "Prof. Pervez Belim" },
  { image: "src/assets/img11.png", title: "Introduction to Mobile App Development & more", instructor: "Prof. Pervez Belim" },
  { image: "src/assets/img19.png", title: "Introduction to Data Science", instructor: "Prof. Snehal Sathwara " },
  { image: "src/assets/img20.jpg", title: "Introduction to Data Science", instructor: "Prof. Chhaya Patel" },
  { image: "src/assets/img21.png", title: "Introduction to Data Science", instructor: "Prof. Chetan Shingadiya" },
  { image: "src/assets/img13.png", title: "Introduction to Data Science", instructor: "Prof. Chhaya Patel" },
  { image: "src/assets/img23.png", title: "Introduction to Data Science", instructor: "Prof. Pervez Belim" },
  { image: "src/assets/img13.png", title: "Introduction to Python", instructor: "Prof. Snehal Sathwara " },
  { image: "src/assets/img18.png", title: "Introduction to Python", instructor: "Prof. Chhaya Patel" },
  { image: "src/assets/img15.png", title: "Introduction to Python", instructor: "Prof. Chetan Shingadiya" },
  { image: "src/assets/img16.png", title: "Introduction to Python", instructor: "Prof. Chhaya Patel" },
  { image: "src/assets/img17.png", title: "Introduction to Python", instructor: "Prof. Pervez Belim" },
  
];

// Learner Images
const learners = [
  { image: "src/assets/L_img1.webp" },
  { image: "src/assets/L_img2.jpg" },
  { image: "src/assets/L_img3.webp" },
  { image: "src/assets/L_img4.jpg" },
  { image: "src/assets/L_img5.webp" },
];
