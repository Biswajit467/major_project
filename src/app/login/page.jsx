"use client";
// pages/LoginPage.js
import React, { useState } from "react";
import { loginUser, registerUser } from "../auth_api/route";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[user_id , setUser_id] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        student_id: studentId,
        password: password,
      };
      const response = await loginUser(userData);
      setUser_id(response?.data?.user?.id)
      setStudentId("");
      setPassword("");
      // console.log("This is login response from LoginPage component : ", response);
    } catch (error) {
      setMessage(error.response?.data?.error);

      setTimeout(() => {
        setMessage("");
      }, 4000);
      console.log(error);
    }
  };

  // console.log('user_id' , user_id)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="student-id"
                className="block text-sm font-medium text-gray-700"
              >
                Student ID
              </label>
              <input
                id="student-id"
                name="student-id"
                type="text"
                autoComplete="student-id"
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Student ID"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8V6a4 4 0 118 0v2h2a1 1 0 011 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 011-1h2zm2-2v2h8V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              login in
            </button>
          </div>
        </form>
        {message && <p className="text-red-500 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
