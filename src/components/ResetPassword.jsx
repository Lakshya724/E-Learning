import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Optional: Verify if token is valid by making an API request to check the token
    // axios.get(`/api/verify-reset-token/${token}`).catch((err) => setError('Invalid or expired token'));
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/reset-password/${token}`, {
        newPassword,
      });

      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate('/login'); // Redirect to login after success
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4cdcd] p-4">
      <div
        className="flex flex-col md:flex-row w-full max-w-4xl bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: "url(src/assets/Adminback.jpg)" }}
      >
        <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-15 animate-slide-down">
          <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
          <p className="text-gray-700 mb-6">
            Please enter a new password. Ensure both fields match.
          </p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Reset Password
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative">
          <img
            src="src/assets/Adminfront.jpg"
            alt="Password Reset"
            className="w-3/4 rounded-lg shadow-md blur-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
