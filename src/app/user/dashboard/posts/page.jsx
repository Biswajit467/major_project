"use client";

import React, { useState, useEffect } from "react";
import { addPost } from "@/app/auth_api/route";

const AddPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    img: "",
    desc: "",
    category: "",
    token: "",
    uid: 6, // we set the uid dynamically letter on ,for now it is 6 and 6 is holla user's uid.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevData) => ({
      ...postData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("student_id_token");
    if (tokenFromStorage) {
      postData.token = tokenFromStorage;
    }
    console.log("this is token from add post component", tokenFromStorage);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = postData.token;
      const response = await addPost(postData, token);
      console.log("Response from AddPost component: ", response);
      setPostData({
        title: "",
        img: "",
        desc: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
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
            name="title"
            value={postData.title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
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
            name="img"
            value={postData.img}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
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
            name="desc"
            value={postData.desc}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
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
            name="category"
            value={postData.category}
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
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
