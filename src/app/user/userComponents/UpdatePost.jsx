"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import Image from "next/image";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const UpdatePost = ({ postId, postDetails }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [index, setIndex] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    category: "",
  });

  useEffect(() => {
    setPostData({
      title: postDetails.title,
      desc: postDetails.desc,
      category: postDetails.category,
    });
  }, [postDetails]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${MAIN_URL}update-post/${postId}`,
        postData,
        {
          headers: {
            Authorization: localStorage.getItem("student_id_token"),
          },
        }
      );
      console.log("Post updated:", response);
      setPostData({
        // Clearing the text area after update
        title: "",
        desc: "",
        category: "",
      });
      // Reloading the page
      // window.location.reload();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${MAIN_URL}delete-post/${postId}`, {
        headers: {
          Authorization: localStorage.getItem("student_id_token"),
        },
      });
      console.log("Post deleted:", response);
      // Implement logic to handle success message or navigate to another page
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        // background:"red",
        padding: "20px",
        scrollBehavior: "smooth",
        maxHeight: "100%",
      }}
    >
      <div style={{ maxWidth: "70%", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            fontSize: "xx-large",
          }}
        >
          Update Your Post
        </h1>
        <div
          key={postDetails.id}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#333",
          }}
        >
          <div style={{ flex: "1", marginRight: "20px", marginLeft: "20px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {postDetails.title}
            </h2>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                letterSpacing: "0.5px",
                wordSpacing: "1px",
              }}
            >
              {expandedIndex === true
                ? postDetails.desc
                : postDetails.desc.slice(0, 400) + "..."}

              {postDetails.desc.length > 400 && (
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === null ? true : null)
                  }
                >
                  {expandedIndex === true ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>
              Date: {formatDate(postDetails.date)}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "20px" }}>
              Category: {postDetails.category}
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <Image
              width={500}
              height={500}
              src={postDetails.url}
              alt={postDetails.title}
              loading="lazy"
              style={{
                display: "block",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Update Post
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "70%", margin: "0 auto" }}
        >
          <div style={{ marginBottom: "20px", color: "black" }}>
            <label
              htmlFor="title"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={postData.title}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", color: "black" }}>
            <label
              htmlFor="desc"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Description:
            </label>
            <textarea
              id="desc"
              name="desc"
              value={postData.desc}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            ></textarea>
          </div>
          <div style={{ marginBottom: "20px", color: "black" }}>
            <label
              htmlFor="category"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              value={postData.category}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                color: "#333",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Update
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
          <DeleteConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
