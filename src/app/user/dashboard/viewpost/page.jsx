"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import Image from "next/image";
import Link from "next/link";

const ViewPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null); // Track selected post ID

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${MAIN_URL}view-posts/?page=${page}`);
        const { data, total_pages } = response.data;
        setPosts(data);
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [page]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const postDetails = async (postId) => {
    setSelectedPostId(postId); // Set the selected post ID
    console.log("this is postid ", postId);
    console.log("this is selectedPostID : ", selectedPostId);
  };
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        scrollBehavior: "smooth",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            fontSize: "xx-large",
          }}
        >
          View Posts
        </h1>

        {posts.map((post, index) => (
          <div
            key={post.id}
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
            <div
              style={{
                flex: "1",
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 === 1 ? "20px" : "0",
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  letterSpacing: "0.5px",
                  wordSpacing: "1px",
                }}
              >
                {expandedIndex === index
                  ? post.desc
                  : post.desc.slice(0, 400) + "..."}
                {post.desc.length > 400 && (
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
              <Link
                href={{ pathname: `viewpost/${post.id}` }}
                style={{ color: "blue", font: "icon" }}
                onClick={() => postDetails(post.id)}
              >
                view more
              </Link>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                Date: {formatDate(post.date)}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "20px" }}>
                Category: {post.category}
              </p>
            </div>
            <div style={{ flex: "1" }}>
              <Image
                width={500}
                height={500}
                src={post.url}
                alt={post.title}
                loading="lazy"
                style={{
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            style={{ marginRight: "10px", color: "black" }}
          >
            Previous
          </button>
          <button
            style={{ color: "black" }}
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
