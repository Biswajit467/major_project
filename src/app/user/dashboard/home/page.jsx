"use client";
import React, { useEffect, useState } from "react";
import { get_user_data, get_user_scores } from "@/app/user_apis/route";
import { RadarChart } from "../../userComponents/RadarChart";
import Link from "next/link";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userScores, setUserScores] = useState(null);

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

  useEffect(() => {
    const fetchUserScores = async () => {
      try {
        const userScores = await get_user_scores(
          userInfo.user.id,
          userInfo.user.sem
        );
        setUserScores(userScores);
      } catch (error) {
        console.log("error in fetching scores data from home page:", error);
      }
    };
    {
      userInfo ? fetchUserScores() : null;
    }
  }, [userInfo]);

  console.log("user info from home", userInfo);
  console.log("user scores from home", userScores);
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
      <div>
        <h1>My Next.js App with Radar Chart</h1>
        <RadarChart props={ userScores && userScores?.radar_chart} />
      </div>
    </>
  );
};

export default Home;
