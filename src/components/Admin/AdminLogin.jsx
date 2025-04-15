import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "admin@gmail.com" && password === "admin123") {
      console.log("✅ Admin login successful");
      navigate("/dashboard");
    } else {
      alert("❌ Entered details are wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4cdcd] p-4">
      <div
        className="flex flex-col md:flex-row w-full max-w-4xl bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: "url(src/assets/Adminback.jpg)" }}
      >
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-15 animate-slide-down">
          <h2 className="text-2xl font-bold mb-6 text-center">ADMIN LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative">
          <img
            src="src/assets/Adminfront.jpg"
            alt="New Skill Loading"
            className="w-3/4 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
