"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MAIN_URL } from "@/app/common/urls";
import UpdatePost from "../../../userComponents/UpdatePost";

const PostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${MAIN_URL}post-details/${params.postId}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [params.postId]);

  const navigateBack = () => {
    window.history.back(); // This will go back to the previous page
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (!post) return "Loading...";
    return showFullDescription ? post.desc : post.desc.slice(0, 2000) + "...";
  };

  const handleUpdatePost = () => {
    setShowUpdateForm(true);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      {showUpdateForm ? (
        <UpdatePost postId={post.id} postDetails={post} />
      ) : (
        <div style={{ maxWidth: "70%", margin: "0 auto", background: "white" }}>
          {post ? (
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                width={500}
                height={500}
                src={post.img}
                alt={post.title}
                style={{
                  width: "70%",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              />
              <h1
                style={{
                  fontSize: "24px",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {post.title}
              </h1>

              {post.desc.length > 2000 ? (
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  {getDescription()}
                  {!showFullDescription ? (
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#007bff", cursor: "pointer" }}
                    >
                      Read More
                    </span>
                  ) : (
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#007bff", cursor: "pointer" }}
                    >
                      Read Less
                    </span>
                  )}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  {getDescription()}
                </p>
              )}

              <p
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginBottom: "10px",
                }}
              >
                Category: {post.category}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginBottom: "10px",
                }}
              >
                Date: {new Date(post.date).toLocaleDateString()}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                onClick={handleUpdatePost}
              >
                Update
              </button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <a
            onClick={navigateBack}
            style={{ fontSize: "16px", color: "#007bff", cursor: "pointer" }}
          >
            Back to View Posts
          </a>
        </div>
      )}
    </div>
  );
};

export default PostPage;
