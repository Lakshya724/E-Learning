import { useEffect, useState } from "react";
import Sidebar_D from "../Admin/Sidebar_D";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    instructor: ""
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

  const handleEditClick = (course) => {
    setEditingCourse(course);
    setEditForm({
      title: course.title,
      category: course.category,
      instructor: course.instructor
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/courses/${editingCourse.id}`, editForm);
      setEditingCourse(null);
      fetchCourses(); // Refresh list
    } catch (err) {
      console.error("Error updating course:", err);
    }
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://localhost:5000/courses/${id}`);
        setCourses(courses.filter(course => course.id !== id));
      } catch (err) {
        console.error("Error deleting course:", err);
      }
    }
  };

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

        {/* Edit Form (Inline below table) */}
        {editingCourse && (
          <div className="mt-8 p-4 border rounded shadow-lg bg-white w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                placeholder="Course Title"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="category"
                value={editForm.category}
                onChange={handleEditChange}
                placeholder="Category"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="instructor"
                value={editForm.instructor}
                onChange={handleEditChange}
                placeholder="Instructor"
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="bg-gray-400 text-white px-4 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
