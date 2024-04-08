"use client";
import React, { useRef, useEffect } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import Cap from "../images/cap.png";
const ChooseLoginPopup = ({ onClose }) => {
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

  const handleSubmit = () => {
    onclose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-slate-900 rounded-lg shadow-lg p-8 w-96"
      >
        <div className="flex items-center mb-4 justify-center">
          <Image
            width="94"
            height="94"
            loading="lazy"
            src={Cap}
            alt="graduation-cap"
            className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
          />
          <h1
            style={{
              fontFamily: "sans-serif",
              backgroundImage:
                'url("/moon.jpg"), linear-gradient(to bottom, #FFFFFF, #3B82F6)',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl font-inter font-extrabold text-white py-4 transform transition duration-300 ease-out hover:scale-105 hover:animate-shake"
          >
            CampusCanvas
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Login Options
          </h2>
          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2">Are You A Student?</p>
            <Link
              href={{
                pathname: "/login",
                query: {
                  is_Admin: false,
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSubmit}
            >
              {" "}
              <PiStudentBold className="w-6 h-6 mr-2" />
              Login as a Student
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <p className="mb-2 mr-2">Are You An Admin?</p>
            <Link
              href={{
                pathname: "/login",
                query: {
                  is_Admin: true,
                },
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-80  flex items-center justify-center"
              onClick={handleSubmit}
            >
              {" "}
              <MdAdminPanelSettings className="w-6 h-6 mr-2" /> Login as an
              Admin
            </Link>
          </div>
          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2 text-xs mr-2">
              Or Want To Be Registered As An Admin?
            </p>
            <Link
              href="/dashboard"
              className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded w-80 flex items-center justify-center"
              onClick={handleSubmit}
            >
              <SiGooglemessages className="w-6 h-6 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLoginPopup;
