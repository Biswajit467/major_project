"use client";
import { useState } from "react";
import { createUser } from "../../auth_api/route";

const CreateUserPage = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    student_id: "",
    email: "",
    password: "",
    name: "",
    sem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createUser(user);
    console.log("response from component", response);
    setUser({
      student_id: "",
      email: "",
      password: "",
      name: "",
      sem: "",
    });

    setMessage("User has been created successfully");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Create User
      </h1>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      <div>
        <div className="mb-4">
          <label
            htmlFor="student_id"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Student_id:
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={user.student_id}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sem"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Semester:
          </label>
          <input
            type="text"
            id="sem"
            name="sem"
            value={user.sem}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default CreateUserPage;
