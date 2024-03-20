'use client'
import React, { useEffect, useState } from "react";
import { get_user_data } from "@/app/user_apis/route";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await get_user_data();
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data in home page:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to execute effect only once when component mounts

  console.log("user info from home",userInfo)
  return (
    <>
      {userInfo ? (
        <div>
          {/* Render user data here */}
          <p>User ID: {userInfo.user.id}</p>
          <p>Name: {userInfo.name}</p>
          {/* Render other user information */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};

export default Home;
