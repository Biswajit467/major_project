"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import Image from "next/image";
import DeleteConfirmationPopUp from "./DeleteConfirmationPopUp";
import { useRouter } from "next/navigation";

const UpdatePost = ({ postId, postDetails }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [index, setIndex] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

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
      window.location.reload();
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
      router.back();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        scrollBehavior: "smooth",
        maxHeight: "100%",
        background: "#2b2b2b",
        fontFamily: "sans-serif",
        color: "#C7C7D1",
        wordSpacing: "2px",
        letterSpacing: "0.4px",
      }}
    >
      <div style={{ maxWidth: "70%", margin: "0 auto" }}>
        <div
          key={postDetails.id}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            // backgroundColor: "#fff",
            // color: "#333",
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
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "70%", margin: "0 auto" }}
        >
          <div
            style={{
              marginBottom: "20px",
            }}
          >
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
                color: "black",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label
              htmlFor="desc"
              style={{ display: "block", marginBottom: "5px", color: "white" }}
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
                color: "black",
                height: "20vh",
              }}
            ></textarea>
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
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
                backgroundColor: "#004e98",
                // background:"#008000 ",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "1rem",
                letterSpacing: "1px",
              }}
            >
              Update
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsDeleteModalOpen(true);
              }}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "crimson",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
            >
              Delete
            </button>
          </div>
          <DeleteConfirmationPopUp
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
