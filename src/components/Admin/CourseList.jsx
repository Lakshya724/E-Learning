import Sidebar_D from "../Admin/Sidebar_D";

const CourseList = () => {
  const courses = [
    {
      image: "src/assets/img8.png",
      title: "Mobile application development using Flutter",
      category: "Mobile Development",
      profName: "Prof. Nikunj Vadher",
    },
    {
      image: "src/assets/img13.png",
      title: "Introduction to Python",
      category: "AIML",
      profName: "Prof. Snehal Sathwara",
    },
    {
      image: "src/assets/img5.png",
      title: "Introduction to JavaScript",
      category: "Web Development",
      profName: "Prof. Snehal Sathwara",
    },
    {
      image: "src/assets/img19.png",
      title: "Intoduction to Excel",
      category: "Data Science",
      profName: "Prof. Pervez Belim",
    },
    {
      image: "src/assets/img9.png",
      title: "Mobile application development using Flutter",
      category: "Mobile Development",
      profName: "Prof. Nikunj Vadher",
    },
    {
      image: "src/assets/img15.png",
      title: "Learn Scikit-learn ",
      category: "AIML",
      profName: "Prof. Nikunj Vadher",
    },
    {
      image: "src/assets/img17.png",
      title: "How to Use ChatGpt",
      category: "AIML",
      profName: "Prof. Nikunj Vadher",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100">
        <Sidebar_D />
      </div>

      {/* Content */}
      <div className="w-4/5 p-6 overflow-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Course List</h1>
        <table className="min-w-full border border-black text-center">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-300">
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Prof. Name</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border">
                <td className="border p-2">
                  <img src={course.image} alt={course.title} className="h-20 mx-auto" />
                </td>
                <td className="border p-2">{course.title}</td>
                <td className="border p-2">{course.category}</td>
                <td className="border p-2">{course.profName}</td>
                <td className="border p-2 space-x-2">
                  <button className="bg-black text-white px-4 py-1 rounded">Edit</button>
                  <button className="bg-red-600 text-white px-4 py-1 rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
