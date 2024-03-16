"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import Image from "next/image";

const ViewPost = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(`${MAIN_URL}view-posts/`);
        console.log("This is response from ViewPost component: ", response);
        const data = response.data;
        console.log("This is viewPost data: ", data);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>
      <h1>this is view posts</h1>
      {images.map((image, index) => (
        <div key={index}>
          <h2>{image.title}</h2>
          <Image
            width={500}
            height={500}
            src={image.url}
            alt={image.title}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ViewPost;
