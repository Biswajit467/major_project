import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="border-8 border-gray-300 border-t-8 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      <p className="mt-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
};

export default Loading;
