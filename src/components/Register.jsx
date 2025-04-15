import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    Name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(❌ ${data.message || "Registration failed"});
        return;
      }

      alert("✅ Registered successfully!");
      // Optionally reset the form or redirect to login
      // window.location.href = "/login"; 
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4cdcd] p-4">
      <div
        className="flex flex-col md:flex-row w-full max-w-4xl bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: "url(src/assets/Adminback.jpg)" }}
      >
        <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-15 animate-slide-down">
          <h2 className="text-2xl font-bold mb-6">Create a New Account</h2>

          <form onSubmit={handleSubmit}>
            {["Name", "mobile", "email", "password", "confirmPassword"].map((field, index) => (
              <div key={index} className="mb-4 relative">
                <label className="block text-gray-700 capitalize">
                  {field === "confirmPassword" ? "Confirm Password" : field.replace("Name", " Name")}:
                </label>
                <input
                  type={
                    field.toLowerCase().includes("password") && !showPassword
                      ? "password"
                      : "text"
                  }
                  name={field}
                  placeholder={
                    field === "mobile"
                      ? "Mobile no."
                      : field === "email"
                      ? "Gmail"
                      : Enter ${field === "confirmPassword" ? "Confirm Password" : field}
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData[field]}
                  onChange={handleChange}
                />
                {(field === "password" || field === "confirmPassword") && (
                  <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="w-5 h-5" />
                    ) : (
                      <EyeSlashIcon className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

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

export default Register;
