"use client"
// NavBar.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { get_user_data } from "@/app/user_apis/route";
import { MdLogout } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import { CiSettings } from "react-icons/ci";

const NavBar = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await get_user_data();
        setUserInfo(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <h1>loading</h1>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (

    <nav style={{ padding: '10px', backgroundColor: '', height: '5rem' }} >

      <div>

        {userInfo ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1rem' }}>
              <p style={{ margin: '0 10px', marginLeft: "50rem", fontSize: '14px' }}></p>
              <p style={{ margin: '0', fontSize: '14px' }}>Branch: {userInfo?.branch}</p>
              <p style={{ margin: '0 10px', fontSize: '14px' }}>|</p>
              <p style={{ margin: '0', fontSize: '14px' }}>REG: {userInfo?.registration_number}</p>
              <p style={{ margin: '0 10px', fontSize: '14px' }}>|</p>
              <p style={{ margin: '0', fontSize: '14px' }}>Sem: {userInfo?.sem}</p>
              <button
                class=" ml-8 mr-2  text-blue-000 hover:text-blue-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-blue-400 duration-700"
              >
                <CiSettings />
              </button>
              <button
                class="  text-red-000 hover:text-red-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-red-400 duration-700"
              >
                <MdLogout />
              </button>
            </div>




            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8rem' }}>
                <div style={{ height: "7rem", width: '7rem', border: '1px solid white', borderRadius: '100%' }}></div>

                <h1 style={{ margin: '0', fontSize: '30px', marginLeft: '1rem', textTransform: 'capitalize' }}>
                  <Typewriter
                    options={{
                      strings: [` welcome ${userInfo?.name},`],
                      autoStart: true,
                      loop: true,
                    }}
                  />

                </h1>


              </div>
            </div>
          </div>

        )
          : (
            <p style={{ margin: '0', fontSize: '14px', fontWeight: 'bold' }}>No user data available</p>
          )}
      </div>
    </nav>

  );
};



export default NavBar;

