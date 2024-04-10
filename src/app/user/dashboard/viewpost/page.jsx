"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MAIN_URL } from "../../../common/urls";
import Image from "next/image";
import Link from "next/link";
import { MdAdsClick } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

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
        background: "#030439",
        padding: "20px",
        scrollBehavior: "smooth",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative", // Add position relative to the parent div
      }}
    >
      <Link
        style={{
          display: "inline-block",
          background: "linear-gradient(to bottom, #FFFFFF, #3B82F6)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          position: "absolute", // Position the link absolutely within the parent div
          top: "20px", // Adjust the top distance as needed
          right: "20px", // Position it on the right side
        }}
        href="/user/dashboard/addpost"
      >
        <BiSolidImageAdd style={{ color: "black" }} />
      </Link>

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
            background: "linear-gradient(to bottom, #FFFFFF, #3B82F6)",
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
              // borderRadius: "0% 10% 0% 10%",
              borderRadius: "10px ",
              color: "#333",
              background:
                " linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%)",
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
                prefetch={false}
                style={{
                  fontWeight: "normal",
                  fontSize: "1.3rem",
                  color: "#00ff00",
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
                  <p style={{ marginRight: "5px" }}>{post.uid.name}</p>
                  <p style={{ color: "orange" }}>
                    {post.uid.admin ? <p>(Admin)</p> : null}
                  </p>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            cursor: "pointer",
          }}
        >
          <button onClick={handlePrevPage} disabled={page === 1}>
            <IoIosArrowDropleftCircle style={{ marginRight: "3rem" }} />
          </button>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
