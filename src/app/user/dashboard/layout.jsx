"use client";
import React from "react";
import NavBar from "../userComponents/NavBar";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
      <NavBar />


      <div> {children}</div>
    </>
  );
};

export default layout;
