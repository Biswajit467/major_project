"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";

const SettingPopUp = ({ onClose }) => {
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

  const handleUpdateProfileInfo = () => {
    onClose();
  };

  const handleAccountStatus = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-slate-900 rounded-lg shadow-lg p-8 w-96"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4 text-white">Settings</h2>
          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2">Update your info </p>
            <Link
              href={{
                pathname: "home/settings",
              }}
              prefetch={false}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleUpdateProfileInfo}
            >
              {" "}
              <FaUserEdit className="w-6 h-6 mr-2" />
              Update Profile Info
            </Link>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <p className="mb-2 mr-2">Check Account status</p>
            <Link
              href={{
                pathname: "/login",
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-80  flex items-center justify-center"
              onClick={handleAccountStatus}
            >
              {" "}
              <BiSolidDetail className="w-6 h-6 mr-2" /> Account Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPopUp;
