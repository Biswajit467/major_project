"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import offBtn from "./images/offbtn.png";
import Cap from "./images/cap.png";
const ChooseLoginPopup = dynamic(
  () => import("../../src/app/components/ChooseLoginPopup"),
  { ssr: false }
);
const Founder = dynamic(() => import("../../src/app/components/Founder"), {
  ssr: false,
});
const Star = dynamic(() => import("./components/ui/Star"), {
  ssr: true,
});

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <ChooseLoginPopup onClose={closePopup} />}
      {/* <nav className="bg-gradient-to-r h-19 from-purple-950 to-indigo-950 p-4 flex justify-between items-center"> */}
      <nav className="bg-0a2351 h-19 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            // width="94"
            // height="94"
            src={Cap}
            alt="graduation-cap"
            className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
          />
          <h1
            style={{
              fontFamily: "sans-serif",
              backgroundImage: "linear-gradient(to bottom, #FFFFFF, #3B82F6)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl font-inter font-extrabold text-white py-4  transform transition duration-300 ease-out hover:scale-105 hover:animate-shake"
          >
            CampusCanvas
          </h1>
        </div>

        <div className="nav-buttons">
          <button
            style={{
              boxShadow: "2px 2px 2px 2px black",
              borderRadius: "100%",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 3px 7px 0px rgba(163, 16, 255, 0.695)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "2px 2px 2px 2px black";
            }}
            Button
            Text
            className="relative  transition-transform duration-300 transform hover:scale-110"
            onClick={togglePopup}
          >
            <Image
              style={{
                fontFamily: "sans-serif",
                backgroundImage: "linear-gradient(to bottom, #FFFFFF, #3B82F6)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="w-16 h-16"
              src={offBtn}
              alt="toggl-app"
            />
          </button>
        </div>
      </nav>

      <Star />

      <div class="container" style={{ marginBottom: "18rem" }}>
        <p class="container-title ">
          Here are the features
          <br />
          we’re proud of
        </p>

        <div class="gradient-cards">
          <div className="card transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container-card bg-green-box">
              <Image
                width="80"
                height="80"
                src="https://img.icons8.com/dotty/80/40C057/networking-manager.png"
                alt="networking-manager"
              />
              <p className="card-title">Semester-wise Growth Tracking:</p>
              <p className="card-description">
                Students can visualize their progress in various domains such as
                technology, arts, sports, academics, and extracurricular
                activities.
              </p>
            </div>
          </div>

          <div className="card transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container-card bg-white-box">
              <Image
                width="64"
                height="64"
                src="https://img.icons8.com/sf-black-filled/64/EBEBEB/engineering.png"
                alt="engineering"
              />
              <p className="card-title">Leaderboard Comparison</p>
              <p className="card-description">
                Users can explore the top-performing students across the campus
                and compare their own scores through a radar chart graph,
                providing valuable insights into their standing relative to
                their peers.
              </p>
            </div>
          </div>

          <div className="card transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container-card bg-yellow-box">
              <Image
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/student-male--v1.png"
                alt="student-male--v1"
              />
              <p className="card-title">Notice Board</p>
              <p className="card-description">
                Important announcements and notices from the administration are
                easily accessible, ensuring students stay informed about
                relevant updates and events.
              </p>
            </div>
          </div>

          <div className="card transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container-card bg-blue-box">
              <Image
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/228BE6/university.png"
                alt="university"
              />

              <p className="card-title">Achievement Showcase</p>
              <p className="card-description">
                The platform allows students to share their accomplishments
                through images and blog posts, fostering a sense of community
                and recognition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="container-title">Our Team</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "0rem",
          marginBottom: "12rem",
        }}
      >
        <Founder />
      </div>

      <section class="bg-gray-900">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </div>
          <div class="flex justify-center mt-8 space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
            </a>

            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Twitter</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Dribbble</span>
            </a>
          </div>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            &copy; 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
