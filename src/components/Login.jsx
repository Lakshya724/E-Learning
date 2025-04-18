import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Save full user object
      alert("Login successful!");
      navigate("/");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .slide-down {
            animation: slideDown 0.6s ease-out;
          }
        `}
      </style>

      <div className="flex justify-center items-center min-h-screen bg-[#f4cdcd] p-4">
        <div
          className="flex flex-col md:flex-row w-full max-w-3xl bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundImage: "url(src/assets/Adminback.jpg)" }}
        >
          {/* Left side: Form */}
          <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-15 flex flex-col justify-center slide-down">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Login to Your Account
            </h2>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <label className="block text-gray-700">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-10 text-gray-500 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Forgot password */}
              <div className="text-right text-gray-600 text-sm mb-4">
                <button
                  type="button"
                  className="hover:underline"
                  onClick={() => navigate("/Forget")}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
              >
                Sign In
              </button>
            </form>

            {/* Sign up link */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account?{" "}
              <button
                className="text-yellow-500 hover:underline"
                onClick={() => navigate("/Register")}
              >
                Sign Up
              </button>
            </p>
          </div>

          {/* Right side: Image */}
          <div className="hidden md:flex w-1/2 items-center justify-center relative">
            <img
              src="src/assets/Adminfront.jpg"
              alt="Skill Elevate"
              className="w-3/4 rounded-lg shadow-md blur-[1px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
