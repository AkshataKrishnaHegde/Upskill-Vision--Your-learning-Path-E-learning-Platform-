import React, { useState } from "react";
// import "./../styles/SignUp.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import signUpImg from "../components/4957136.jpg"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/signup", formData)
      .then((response) => {
        alert(response.data.message); // Success message
        navigate("/"); // Navigate to the login page
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error); // Error message
        } else {
          alert("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Signup Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <img
          src={signUpImg}
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>
  
      {/* Right Side - Signup Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Register Here</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-2 border rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Role</option>
              <option value="hr">HR</option>
              <option value="instructor">Instructor</option>
              <option value="manager">Manager</option>
              <option value="user">Learner</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create Account
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );}
  

export default SignupPage;
