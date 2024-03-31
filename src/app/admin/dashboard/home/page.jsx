"use client"
import React, { useEffect, useState } from "react";
import { get_user_data } from "@/app/user_apis/route";
import { MdLogout } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { MdNotificationAdd } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import { CiSettings } from "react-icons/ci";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await get_user_data();
        console.log("USERDATA: ", userData);
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data in home page:", error);
      }
    };

    fetchUserData();
  }, []); 

  console.log("user info from home", userInfo);

  return (
    <nav style={{ padding: '15px', backgroundColor: '', height: '5rem' }}>
      <div>
        {userInfo ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1rem' }}>
           
              
              {/* Search Bar */}
              <form class="form relative" >
  <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
    <svg
      class="w-5 h-5 text-gray-400"
      aria-labelledby="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="16"
      width="17"
    >
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="1.333"
        stroke="currentColor"
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
      ></path>
    </svg>
  </button>
  <input
  style={{color:'black',backgroundColor:'#141414'}}
    type="text"
    required=""
    placeholder="Search..."
    class="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 colour-black"
  />
  <button class="absolute right-3 -translate-y-1/2 top-1/2 p-1" type="reset">
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      class="w-5 h-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
</form>

              
              {/* Two New Buttons */}
              <button title="add notification"
                className=" ml-4 mr-4 text-green-000 hover:text-green-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-green-400 duration-700"
              >
                <MdNotificationAdd  style={{height:'2rem', width:'2rem'}} />
              </button>
              <button title="add user"
                className="text-yellow-000 hover:text-yellow-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-yellow-400 duration-700"
              >
              < RiUserAddFill style={{height:'2rem', width:'2rem'}}  />
              </button>
              
              {/* Existing UserInfo */}
              <p style={{ margin: '0 10px', marginLeft: '47rem', marginBottom: '0.5rem', fontSize: '14px' }}>Branch: {userInfo?.user.branch}</p>
              <p style={{ margin: '0 10px', fontSize: '14px' }}>|</p>
              <p style={{ margin: '0', fontSize: '14px', marginBottom: '0.5rem' }}>REG: {userInfo?.user.registration_number}</p>
             
              <button title="setting"
                className="ml-auto mr-2 text-blue-000 hover:text-blue-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-blue-400 duration-700"
              >
                <CiSettings style={{height:'2rem', width:'2rem'}}  />
              </button>
              <button title="logout"
                className="text-red-000 hover:text-red-900 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-red-400 duration-700"
              >
                <MdLogout style={{height:'2rem', width:'2rem'}}  />
                
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop:"2rem"  }}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8rem' }}>
                <div style={{ height: "7rem", width: '7rem', border: '1px solid white', borderRadius: '100%' }}>   </div>
                <h1 style={{ margin: '0', fontSize: '30px', marginLeft: '1rem', textTransform: 'capitalize' }}>
                  <Typewriter
                    options={{
                      strings: [` welcome ${userInfo?.user.name},`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
            </div>

          </div>
        ) : (
          <p style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>No user data available</p>
        )}
      </div>
      
    </nav>
  );
};

export default Home;
