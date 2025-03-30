import Sidebar_D from "../Admin/Sidebar_D"; // Import Sidebar

const courses = [
  {
    title: "Introduction to Mobile App Development",
    skills: "Mobile Development, Android Studio, Flutter...",
    image: "src/assets/img8.png",
  },
  {
    title: "Introduction to Mobile App Development",
    skills: "Android Studio, Application Development...",
    image: "src/assets/img11.png",
  },
  {
    title: "Introduction to SQL",
    skills: "SQL Queries, Database Management...",
    image: "src/assets/img24.png",
  },
  {
    title: "Introduction to ChatGPT",
    skills: "AI, Chatbots, NLP...",
    image: "src/assets/img17.png",
  },
  {
    title: "Introduction to Excel",
    skills: "Data Analysis, Excel Formulas, Excel Sheets...",
    image: "src/assets/img19.png",
  },
  {
    title: "Introduction to Mobile App Development",
    skills: "React Native, Mobile Development...",
    image: "src/assets/img6.png",
  },
  {
    title: "Introduction to JavaScript",
    skills: "JavaScript, Web Development...",
    image: "src/assets/img5.png",
  },
  {
    title: "Introduction to Power BI",
    skills: "Data Analysis, Business Intelligence...",
    image: "src/assets/img20.jpg",
  },
];

const CourseList = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar (Fixed) */}
      <Sidebar_D />

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Course List</h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              
              {/* Image */}
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>

                {/* Skills */}
                <p className="text-gray-600 text-sm mt-2">
                  <span className="font-bold">Skills you'll gain: </span>
                  {course.skills}
                </p>

                {/* View Button */}
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                  View
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
