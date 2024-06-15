import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link , useNavigate  } from "react-router-dom";
import axios from 'axios';
 


function Signupform() {
  const [signformval, setSignformval] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
  });

  const navigate = useNavigate();

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setSignformval((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/signup", signformval)
      .then((res) => {
        console.log("Data sent successfully", res);
        if (res.status === 200 ) {
          navigate('/login');
        }
        
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });

    console.log("Form Submitted:", signformval);
  };

  return (
    <div className="bg-blue-50 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form action="signup" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              onChange={handleChanges}
              value={signformval.fullName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={signformval.phoneNumber}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={signformval.email}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signformval.password}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={signformval.confirmPassword}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">Gender</label>
            <div className="flex items-center">
              <input
                type="radio"
                checked={signformval.gender === "male"}
                onChange={handleChanges}
                name="gender"
                value="male"
                className="mr-2"
              />
              <label className="mr-4">Male</label>
              <input
                type="radio"
                checked={signformval.gender === "female"}
                onChange={handleChanges}
                name="gender"
                value="female"
                className="mr-2"
              />
              <label>Female</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={signformval.dob}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signupform;
