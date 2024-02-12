"use client";

import React from "react";
import { useState } from "react";
import Loading from "../../components/Loading";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        in this page our students personal info , progress card and other graph
        stuffs will be shown
      </div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>{count}</div>
      <Loading />
    </>
  );
};

export default Home;
