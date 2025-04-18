import { useEffect, useState } from "react";
import Sidebar_D from "../Admin/Sidebar_D";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    instructor: "",
    image: null,
    previewImage: null,
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [searchTerm, setSearchTerm] = useState({
    title: "",
    instructor: "",
    category: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (searchTerm.title) queryParams.append("title", searchTerm.title);
        if (searchTerm.instructor) queryParams.append("instructor", searchTerm.instructor);
        if (searchTerm.category) queryParams.append("category", searchTerm.category);

        const res = await axios.get(`http://localhost:5000/courses?${queryParams.toString()}`);
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching filtered courses:", err);
      }
    };

    fetchFilteredCourses();
  }, [searchTerm]);

  const handleEditClick = (course) => {
    setEditingCourse(course);
    setEditForm({
      title: course.title,
      category: course.category,
      instructor: course.instructor,
      image: null,
      previewImage: null,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", editForm.title);
      formData.append("category", editForm.category);
      formData.append("instructor", editForm.instructor);
      if (editForm.image) {
        formData.append("image", editForm.image);
      }

      await axios.put(
        `http://localhost:5000/courses/${editingCourse.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setEditingCourse(null);
      fetchCourses();
      setSuccessMsg("Course updated!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error updating course:", err);
    }
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://localhost:5000/courses/${id}`);
        setCourses(courses.filter((course) => course.id !== id));
      } catch (err) {
        console.error("Error deleting course:", err);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/5 bg-gray-100">
        <Sidebar_D />
      </div>

      <div className="w-4/5 p-6 overflow-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Course List</h1>

        {successMsg && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded text-center">
            {successMsg}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            value={searchTerm.title}
            onChange={(e) => setSearchTerm({ ...searchTerm, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Search by instructor"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            value={searchTerm.instructor}
            onChange={(e) => setSearchTerm({ ...searchTerm, instructor: e.target.value })}
          />
          <input
            type="text"
            placeholder="Search by category"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            value={searchTerm.category}
            onChange={(e) => setSearchTerm({ ...searchTerm, category: e.target.value })}
          />
        </div>

        <table className="min-w-full border border-black text-center">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-300">
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Instructor</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border">
                <td className="border p-2">
                  <img
                    src={`http://localhost:5000${course.image}`}
                    alt={course.title}
                    className="h-20 mx-auto"
                  />
                </td>
                <td className="border p-2">{course.title}</td>
                <td className="border p-2">{course.category}</td>
                <td className="border p-2">{course.instructor}</td>
                <td className="border p-2">
                  {new Date(course.created_at).toLocaleDateString()}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleEditClick(course)}
                    className="bg-black text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(course.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
        {editingCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Edit Course Details</h2>
                <button
                  onClick={() => setEditingCourse(null)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm">
                      <img
                        src={
                          editForm.previewImage ||
                          `http://localhost:5000${editingCourse.image}`
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setEditForm((prev) => ({
                          ...prev,
                          image: file,
                          previewImage: URL.createObjectURL(file),
                        }));
                      }}
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Course Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={editForm.title}
                        onChange={handleEditChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                        placeholder="Enter course title"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={editForm.category}
                        onChange={handleEditChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                        placeholder="Enter category"
                      />
                    </div>

                    <div>
                      <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Instructor
                      </label>
                      <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        value={editForm.instructor}
                        onChange={handleEditChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                        placeholder="Enter instructor name"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setEditingCourse(null)}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
