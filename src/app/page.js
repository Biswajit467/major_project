"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import ChooseLoginPopup from "./components/ChooseLoginPopup";

import "./common.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      {showPopup && <ChooseLoginPopup onClose={closePopup}/>}
      {/* <nav className="bg-gradient-to-r h-19 from-purple-950 to-indigo-950 p-4 flex justify-between items-center"> */}
      <nav  className="bg-0a2351 h-19 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/graduation-cap.png"
            alt="graduation-cap"
            className="w-20 h-20 transition-transform duration-300 transform hover:scale-110"
          />
          <h1
          style={{
            background: 'linear-gradient(120deg, #00f7ff, #ff00e6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
           
            className="text-4xl font-inter font-extrabold text-white py-4  transform transition duration-300 ease-out hover:scale-105 hover:animate-shake"
          >
            CampusCanvas
          </h1>
        </div>

        <div className="nav-buttons">
          <button
          
          style={{
            boxShadow: '2px 2px 2px 2px black',
            borderRadius: '100%',
            transition: 'box-shadow 0.3s ease-in-out'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0px 3px 7px 0px rgba(163, 16, 255, 0.695)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '2px 2px 2px 2px black';
          }}
        
          Button Text
      
        
            className="relative  transition-transform duration-300 transform hover:scale-110"
            onClick={togglePopup}
          >
            <img
              className="w-16 h-16"
              src="https://img.icons8.com/nolan/64/toggl-app.png"
              alt="toggl-app"
            />
          </button>
        </div>
      </nav>

      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        width={"100%"}
      >
        <div>
          <img
            className=" h-screen"
            src="https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <button className="absolute bottom-0 left-0 mb-4 ml-9 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
            <p className="z-10">Discover More</p>
          </button>
        </div>
        <div>
          <img
            className=" h-screen"
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <button className="absolute bottom-0 left-0 mb-4 ml-4 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
            <p className="z-10">Discover More</p>
          </button>
        </div>
        <div className="relative h-screen">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <button className="absolute bottom-0 left-0 mb-4 ml-4 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
            <p className="z-10">Discover More</p>
          </button>
        </div>
      </Carousel>

      <div class="container">
        <p class="container-title">
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
              <p className="card-title">Zero-cost Possibilities</p>
              <p className="card-description">
                Hubble lets users borrow USDH for a one-time 0.5% fee. No
                variable rates. No interest charged, ever.
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
              <p className="card-title">Multi-Asset Collateral</p>
              <p className="card-description">
                Deposit a variety of assets on Hubble, raise your collateral
                ratio, and unlock the liquidity in your wallet.
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
              <p className="card-title">Get Yield on Deposits</p>
              <p className="card-description">
                While your collateral is deposited, delegate it to earn the
                highest yield available in the Solana ecosystem.
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
              <p className="card-title">Get up to 11x Leverage</p>
              <p className="card-description">
                Hubbles capital-efficient 110% collateral ratio lets users
                leverage up to 11x on their deposits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="container-title">our team</p>
      <div class="d">
        <div class="cardd">
          <div class="card-border-topp"></div>
          <div class="imgg"></div>
          <span> Person</span>
          <p class="job"> Job Title</p>
          <a href="https://uiverse.io/alexmaracinaru/white-octopus-62">
            {" "}
            <button> Click</button>
          </a>
        </div>
        <div class="cardd">
          <div class="card-border-topp"></div>
          <div class="imgg"></div>
          <span> Person</span>
          <p class="job"> Job Title</p>
          <a href="https://uiverse.io/alexmaracinaru/white-octopus-62">
            {" "}
            <button> Click</button>
          </a>
        </div>
        <div class="cardd">
          <div class="card-border-topp"></div>
          <div class="imgg"></div>
          <span> Person</span>
          <p class="job"> Job Title</p>
          <a href="https://uiverse.io/alexmaracinaru/white-octopus-62">
            {" "}
            <button> Click</button>
          </a>
        </div>
        <div class="cardd">
          <div class="card-border-topp"></div>
          <div class="imgg"></div>
          <span> Person</span>
          <p class="job"> Job Title</p>
          <a href="https://uiverse.io/alexmaracinaru/white-octopus-62">
            {" "}
            <button> Click</button>
          </a>
        </div>
      </div>

      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="#">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Services
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Team
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </div>
  );
}
