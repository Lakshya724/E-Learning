import  { useState } from "react";
import Sidebar_D from "../Admin/Sidebar_D"; // Import Sidebar

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    profName: "",
    category: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageChange = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseData);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="flex min-h-screen bg-[#c7daf1]">
      {/* Sidebar - Left */}
      <div className="w-[250px] bg-white shadow-lg">
        <Sidebar_D />
      </div>

      {/* Content - Right */}
      <div className="flex-1 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-md shadow-md flex flex-col md:flex-row items-center gap-8 border border-gray-300 max-w-4xl w-full"
        >
          {/* Left side - Inputs */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-center mb-4">Add Course</h2>

            <input
              type="text"
              name="courseName"
              placeholder="Course Name"
              className="border border-yellow-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={courseData.courseName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="profName"
              placeholder="Prof. Name"
              className="border border-yellow-300 p-2 rounded-md"
              value={courseData.profName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              className="border border-yellow-300 p-2 rounded-md"
              value={courseData.category}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              className="border border-yellow-300 p-2 rounded-md h-20 resize-none"
              value={courseData.description}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-[#b7cce6] hover:bg-[#a3b9d4] text-black font-semibold py-2 rounded-full"
            >
              Add
            </button>
          </div>

          {/* Right side - Upload */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <label className="cursor-pointer flex flex-col items-center">
              <img
                src={
                  courseData.image
                    ? URL.createObjectURL(courseData.image)
                    : "https://img.icons8.com/ios-filled/100/upload.png"
                }
                alt="Upload"
                className="w-24 h-24 object-contain"
              />
              <span className="mt-2 font-semibold">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
