import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!user) {
      setError("You must be logged in to change your password.");
      return;
    }

    const { oldPassword, newPassword, confirmPassword } = formData;

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/change-password/${user.id}`, {
        oldPassword,
        newPassword,
      });

      const updatedUser = { ...user, password: newPassword };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSuccess(response.data.message);
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc] px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e8cf41] mb-2">Change Password</h2>
        <p className="text-center text-gray-500 mb-6">Please enter your old and new password</p>

        <form onSubmit={handleSubmit}>
          {["oldPassword", "newPassword", "confirmPassword"].map((field, index) => (
            <div key={index} className="mb-4 relative">
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                {field === "oldPassword"
                  ? "Old Password"
                  : field === "newPassword"
                  ? "New Password"
                  : "Confirm New Password"}
              </label>
              <input
                type={showPassword[field] ? "text" : "password"}
                name={field}
                placeholder={`Enter your ${field === "oldPassword" ? "current" : field === "newPassword" ? "new" : "new"} password`}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b49df] text-sm"
                value={formData[field]}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500"
                onClick={() => togglePasswordVisibility(field)}
              >
                {showPassword[field] ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          ))}

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-[#d1be31] text-white font-semibold py-3 rounded-lg transition"
          >
            Change Password
          </button>
        </form>

        <div className="border-t mt-6 pt-4 text-center">
          <p className="text-sm text-gray-600">
            Back to{" "}
            <a href="/login" className="text-[#3b49df] font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
