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
    uid: null, // we set the uid dynamically letter on, for now, it is 6 and 6 is holla user's uid.
  });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const tokenFromStorage = localStorage.getItem("student_id_token");
    if (tokenFromStorage) {
      setPostData((prevData) => ({
        ...prevData,
        token: tokenFromStorage,
      }));
      if (user_id) {
        setPostData((prevData) => ({
          ...prevData,
          uid: user_id,
        }));
      }
    }
    console.log("this is token from add post component", tokenFromStorage);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setPostData((prevData) => ({
      ...prevData,
      img: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addPost(postData);

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
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Create a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="mb-4">
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
              placeholder="Enter the title of your post"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Featured Image:
            </label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Post Content:
            </label>
            <textarea
              id="desc"
              name="desc"
              value={postData.desc}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              placeholder="Write your post content here..."
              rows={8}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              value={postData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Fashion">Fashion</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "#002347" }}
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
