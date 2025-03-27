import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const ChangePassword = () => {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4cdcd] p-4">
      {/* Container */}
      <div
        className="flex flex-col md:flex-row w-full max-w-4xl bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: "url(src/assets/Adminback.jpg)" }}
      >
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-15 animate-slide-down">
          <h2 className="text-2xl font-bold mb-6">Change Password</h2>

          {/* Input Fields */}
          {["oldPassword", "newPassword", "confirmPassword"].map((field, index) => (
            <div key={index} className="mb-4 relative">
              <label className="block text-gray-700 capitalize">
                {field === "oldPassword"
                  ? "Old Password"
                  : field === "newPassword"
                  ? "New Password"
                  : "Confirm Password"}
                :
              </label>
              <input
                type={showPassword[field] ? "text" : "password"}
                name={field}
                placeholder={`Enter ${field === "oldPassword" ? "Old" : field === "newPassword" ? "New" : "Confirm"} Password`}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData[field]}
                onChange={handleChange}
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
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

          {/* Change Password Button */}
          <button className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600">
            Change Password
          </button>

          {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
              Back to <a href="#" className="text-yellow-500 hover:underline">Login</a>
            </p>
        
        </div>

        {/* Right Side - Image with Less Blur */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative">
          <img
            src="src/assets/Adminfront.jpg"
            alt="New Skill Loading"
            className="w-3/4 rounded-lg shadow-md blur-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
