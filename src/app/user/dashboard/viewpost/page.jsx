"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MAIN_URL } from "../../../common/urls";
import Image from "next/image";
import Link from "next/link";
import { MdAdsClick } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const ViewPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${MAIN_URL}view-posts/?page=${page}`);
        const { data, total_pages } = response.data;
        console.log("this is view-posts api response", response.data);
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

  return (
    <div
      style={{
        // background: "#2b2b2b",
        background: "black",
        padding: "20px",
        scrollBehavior: "smooth",
        color: "white",
        fontFamily: "sans-serif",
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
            fontSize: "xx-large",
            background: "linear-gradient(120deg, #00f7ff, #ff00e6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
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
              borderRadius: "0% 10% 0% 10%",
              color: "#333",
              background:
                "linear-gradient(90deg, rgba(12,12,12,1) 6%, rgba(54,54,54,1) 50%, rgba(18,18,18,1) 100%)",
            }}
          >
            <div
              style={{
                flex: "1",
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 === 1 ? "20px" : "0",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontFamily: "san-serif",
                  marginBottom: "10px",
                  // color: "white",
                  letterSpacing: "1px",
                  wordSpacing: "2px",
                  fontWeight: "bold",
                  color: "#a8bece",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  wordSpacing: "2px",
                  color: "white",
                  color: "#a8bece",
                }}
              >
                {post.desc.slice(0, 400) + ".........."}
              </p>
              <Link
                href={{
                  pathname: `viewpost/${post.id}`,
                  query: { uidDetails: JSON.stringify(post.uid) },
                }}
                style={{
                  fontWeight: "normal",
                  fontSize: "1.3rem",
                  color: "orange",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  View more <MdAdsClick style={{ marginLeft: "5px" }} />
                </div>
              </Link>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                  color: "white",
                }}
              >
                Date: {formatDate(post.date)}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Category: {post.category}
              </p>
              <div
                style={{
                  color: "white",
                  fontFamily: " Cambria",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
                  <FaUser style={{ marginRight: "5px", fontSize: "20px" }} />
                  {post.uid.name}{" "}
                </div>
              </div>
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
            style={{ marginRight: "10px" }}
          >
            Previous
          </button>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
