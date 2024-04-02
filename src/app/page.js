"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import ChooseLoginPopup from "./components/ChooseLoginPopup";
import { motion } from "framer-motion";
import { cn } from "./utils/cn";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Star } from "./components/ui/Star";
import Founder from "../../src/app/components/Founder"
import offBtn from './images/offbtn.png';
import Cap from './images/cap.png';


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
              fontFamily: 'sans-serif',
              backgroundImage: 'url("/moon.jpg"), linear-gradient(to bottom, #FFFFFF, #3B82F6)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
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
            <Image
              style={{
                fontFamily: 'sans-serif',
                backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #3B82F6)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
              className="w-16 h-16"
              src={offBtn}
              alt="toggl-app"
            />
          </button>
        </div>
      </nav>


      <Star />




      <div class="container" style={{ marginBottom: '18rem' }}>
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

      <p class="container-title">Our Team</p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '0rem', marginBottom: '12rem' }} >

        <Founder />



      </div>

      <section class="bg-gray-900">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Team
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
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
