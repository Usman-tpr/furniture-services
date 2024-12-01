import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  // Corrected import
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // States for email, password, and loading
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    // Prepare data to send
    const loginData = { email, password };

    try {
      // Send POST request to login API
      const response = await axios.post('http://localhost:5000/api/login', loginData);
     console.log(response)
     localStorage.setItem("Aryan" , response.data.token)
      // Check if login was successful
      if (response.data.success) {
        toast.success('Login successful!');
        // Optionally redirect or do something after successful login
      } else {
        toast.error('Login failed! Please check your credentials.');
      }
    } catch (error) {
      toast.error('Server error: ' + error.message);
    }

    setLoading(false); // Hide loading state
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 bg-blue-500 text-white rounded-lg ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      
      {/* Corrected Toast container */}
      <ToastContainer />  {/* Corrected this */}
    </div>
  );
};

export default Login;
