"use client";
import React, { useRef, useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";
import Link from "next/link";

const ShowSemPopUp = ({ onClose, branch }) => {
  console.log("branch from show sem piopup", branch);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSemClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-slate-900 rounded-lg shadow-lg p-8 w-96"
      >
        <div className="flex items-center mb-4 justify-center">
          <h1
            id="n"
            className="text-2xl font-inter font-extrabold text-white py-4 transform transition duration-300 ease-out hover:scale-105 hover:animate-shake"
          >
            Select A Semister
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 1
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              1st semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 2
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              2nd semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 3
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}           >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              3rd semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 4
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}         >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              4th semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 5
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              5th semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 6
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              6th semister
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 7
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              7th semister
            </Link>
          </div>
          <div className="mb-4 text-white flex flex-col items-center">
            <Link
              href={{
                pathname: "/admin/dashboard/students/",
                query: {
                  branch: branch,
                  sem : 8
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSemClick}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              8th semister
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSemPopUp;
