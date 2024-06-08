import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { Axios } from "axios";

function Loginform() {
  const [valobj, setValObj] = useState({
    Email: "",
    Password: "",
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValObj((prevValObj) => ({
      ...prevValObj,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:8080/login", valobj)
      .then((res) => {
        console.log("data send done",res);
      })
      .catch((err) => {
        console.log("some error",err);
      });
    console.log("Form Submitted:", valobj);
  };

  return (
    <div className="bg-blue-50 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <form action="login" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-700 font-bold mb-2">
              Enter Your Email
            </label>
            <input
              type="email"
              name="Email"
              value={valobj.Email}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-700 font-bold mb-2">
              Enter Your Password
            </label>
            <input
              type="password"
              name="Password"
              value={valobj.Password}
              onChange={handleChanges}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              to="/signup"
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Create a new account.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
