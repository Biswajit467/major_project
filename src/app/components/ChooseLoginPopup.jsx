import React, { useRef, useEffect } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";

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

  const handleStudentLogin = () => {
    // Call function for student login
    console.log("Student login clicked");
    onClose();
  };

  const handleAdminLogin = () => {
    // Call function for admin login
    console.log("Admin login clicked");
    onClose();
  };
  const handleConatactWithUs = () =>{
    onClose();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-slate-900 rounded-lg shadow-lg p-8 w-96"
      >
        <div className="flex items-center mb-4 justify-center">
          <img
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/graduation-cap.png"
            alt="graduation-cap"
            className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
          />
          <h1
            id="n"
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
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleStudentLogin}
            >
              {" "}
              <PiStudentBold  className="w-6 h-6 mr-2"  />
              Login as a Student
            </button>
          </div>
          <div className="mb-4 text-white flex  flex-col items-center">
            <p className="mb-2 mr-2">Are You An Admin?</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-80  flex items-center justify-center"
              onClick={handleAdminLogin}
            >
              {" "}
              <MdAdminPanelSettings  className="w-6 h-6 mr-2"  /> Login as an Admin
            </button>
          </div>
          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2 text-xs mr-2">
              Or Want To Be Registered As An Admin?
            </p>
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded w-80 flex items-center justify-center" onClick={handleConatactWithUs}>
              <SiGooglemessages className="w-6 h-6 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLoginPopup;
