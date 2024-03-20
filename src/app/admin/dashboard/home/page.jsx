
"use client"
import React, { useEffect, useState } from "react";
import { get_user_data } from "@/app/user_apis/route";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await get_user_data();
        console.log("USERDATA: ", userData.user);
        setUserInfo(userData.user);
      } catch (error) {
        console.error("Error fetching user data in home page:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to execute effect only once when component mounts

  console.log("user info from home", userInfo);

  return (
    <div>
      <h1>User Information</h1>
      {userInfo && (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Student ID: {userInfo.student_id}</p>
          <p>Semester: {userInfo.sem}</p>
          
        </div>
      )}
    </div>
  );
};

export default Home;
