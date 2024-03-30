"use client"
import React, { useEffect, useState } from "react";
import { get_user_data } from "@/app/user_apis/route";
import { MdLogout } from "react-icons/md";
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
    <nav style={{ padding: '10px', backgroundColor: '', height: '5rem' }}>
      <div>
        {userInfo ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1rem' }}>
              <p style={{ margin: '0 10px', marginLeft: "50rem", fontSize: '14px' }}></p>
              <p style={{ margin: '0', fontSize: '14px' }}>Branch: {userInfo?.user.branch}</p>
              <p style={{ margin: '0 10px', fontSize: '14px' }}>|</p>
              <p style={{ margin: '0', fontSize: '14px' }}>REG: {userInfo?.user.registration_number}</p>
             
              <button
                className="ml-8 mr-2 text-blue-000 hover:text-blue-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-blue-400 duration-700"
              >
                <CiSettings />
              </button>
              <button
                className="text-red-000 hover:text-red-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-red-400 duration-700"
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
                      strings: [` welcome ${userInfo?.user.name},`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
            </div>

            <div id="navbar" style={{ 
              position: 'sticky', 
              top: 0, 
              height: '35vh', 
              width: '60px', 
              backgroundImage: 'linear-gradient(to bottom, #3498db, #8e44ad)', /* Cool gradient color */
              borderRadius: '25px', 
              display: 'flex', 
              marginTop:'6rem',
              marginLeft:'2rem',
            gap:'4rem',
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'space-evenly',
              zIndex: 1000
            }}>
              <ul style={{ listStyleType: 'none', padding: "2rem" }}>
                <li 
                  style={{ 
                    padding: '5px', 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#ffff'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span role="img" aria-label="Dashboard">📊</span>
                </li>
                <li 
                  style={{ 
                    padding: '5px', 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#ffff'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span role="img" aria-label="Dashboard">📊</span>
                </li>
                <li 
                  style={{ 
                    padding: '5px', 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#ffff'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span role="img" aria-label="Profile">👤</span>
                </li>
                <li 
                  style={{ 
                    padding: '5px', 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#ffff'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span role="img" aria-label="Profile">👤</span>
                </li>
                <li 
                  style={{ 
                    padding: '5px', 
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#ffff'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span role="img" aria-label="Settings">⚙️</span>
                </li>
              </ul>
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
