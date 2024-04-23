import Link from "next/link";
import React from "react";

const IfNotLoggedIn = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(3, 4, 57)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Please login First
        </h1>
        <Link href={"/login"}>
          <p className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full text-center">
            Login
          </p>
        </Link>
      </div>
    </div>
  );
};

export default IfNotLoggedIn;
