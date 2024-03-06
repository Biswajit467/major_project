"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("student_id_token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
    console.log("this is token from add post component", tokenFromStorage);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${MAIN_URL}add-post/`,
        {
          title,
          img,
          desc,
          category,
          uid: 6, // we set the uid dynamicaly letter
        },
        {
          headers: {
            Authorization: token, // Pass token in headers
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding post:", error);
      // Handle authentication errors here, e.g., redirect the user to login page
      if (error.response.status === 401) {
        // Redirect to login page or show an error message
        // Example:
        // history.push("/login");
        // or
        // setError("Unauthorized access. Please log in.");
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="img"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="desc"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
