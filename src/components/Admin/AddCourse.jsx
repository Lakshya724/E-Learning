import { useState } from "react";
import Sidebar_D from "../Admin/Sidebar_D";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    profName: "",
    category: "",
    description: "",
    image: null,
    otherCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageChange = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("courseName", courseData.courseName);
    formData.append("profName", courseData.profName);
    formData.append("category", courseData.category);
    formData.append("description", courseData.description);
    if (courseData.category === "Others") {
      formData.append("otherCategory", courseData.otherCategory || "");
    }
    if (courseData.image) {
      formData.append("image", courseData.image); // Ensuring the image is added to form data
    }

    try {
      const res = await fetch("http://localhost:5000/add-course", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Course added successfully!");
        setCourseData({
          courseName: "",
          profName: "",
          category: "",
          description: "",
          image: null,
          otherCategory: "",
        });
      } else {
        alert("❌ Failed to add course.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong while submitting.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#e8f1fa]">
      {/* Sidebar */}
      <div className="w-[250px] bg-white shadow-md">
        <Sidebar_D />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-10 w-full max-w-5xl border"
        >
          {/* Left Form Fields */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              Add New Course
            </h2>

            <input
              type="text"
              name="courseName"
              placeholder="Title"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={courseData.courseName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="profName"
              placeholder="Professor Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={courseData.profName}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={courseData.category}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
              <option value="AIML">AI/ML</option>
              <option value="DataScience">Data Science</option>
              <option value="Others">Others</option>
            </select>

            {courseData.category === "Others" && (
              <input
                type="text"
                name="otherCategory"
                placeholder="Enter Custom Category"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={courseData.otherCategory || ""}
                onChange={(e) =>
                  setCourseData({ ...courseData, otherCategory: e.target.value })
                }
                required
              />
            )}

            <textarea
              name="description"
              placeholder="Description"
              className="p-3 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={courseData.description}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Add Course
            </button>
          </div>

          {/* Right Image Upload */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-blue-50 rounded-xl border border-dashed border-blue-300 p-6 hover:border-blue-500 transition">
            <label className="cursor-pointer flex flex-col items-center justify-center">
              <img
                src={
                  courseData.image
                    ? URL.createObjectURL(courseData.image)
                    : "https://img.icons8.com/ios-filled/100/upload.png"
                }
                alt="Upload"
                className="w-28 h-28 object-contain mb-4"
              />
              <span className="text-gray-700 font-medium">Upload Image</span>
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
