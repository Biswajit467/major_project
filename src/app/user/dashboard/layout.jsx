"use client";
import React from "react";
import NavBar from "../userComponents/NavBar";

const layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <div>{children}</div>
    </>
  );
};

export default layout;
