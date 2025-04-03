import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // ✅ React Router Navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
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
          <h2 className="text-2xl font-bold mb-2">Forget Password</h2>
          <p className="text-gray-700 mb-6">
            Please enter your Email to receive a password reset link.
          </p>

          {/* Email Input */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Send Reset Link Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Back to{" "}
            <button 
              className="text-yellow-500 hover:underline"
              onClick={() => navigate("/login")} // ✅ Navigate to Login without refresh
            >
              Login
            </button>
          </p>
        </div>

        {/* Right Side - Image */}
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

export default ForgetPassword;
