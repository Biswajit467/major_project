"use client";
import React, { useEffect, useState } from "react";
import { get_user_data} from "@/app/user_apis/route";
import { get_user_scores } from "../../user_apis/route";
import { RadarChart } from "../../userComponents/RadarChart";
import { ColumnGraph } from "../../userComponents/ColumnGraph";
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
          <p>Name: {userInfo.user.name}</p>
          {/* Render other user information */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <div>
        <div>
          {userScores?.radar_chart ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                boxShadow: '3px 3px 5px 0px rgba(163, 16, 255, 0.695)',
                margin:'2%',
                padding: '2%'
              }}
            >
              <RadarChart props={userScores && userScores?.radar_chart} />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ducimus rem iusto sapiente iure aliquam quam, fugit
                dolor, recusandae sunt cum doloribus ullam voluptate illo, vitae
                nulla quis rerum. Earum? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nostrum iure consequuntur sequi tempore
                deserunt atque minus libero voluptatibus incidunt aperiam
                sapiente facilis repellat delectus at dolore error, blanditiis
                esse facere? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Omnis officiis aperiam consectetur perferendis magnam in
                labore expedita blanditiis nemo libero saepe reprehenderit
                necessitatibus enim dolores rem perspiciatis earum, assumenda
                illo?
              </div>
            </div>
          ) : null}
        </div>

        <div>
          {userScores?.bar_graph ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "80%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                boxShadow: '3px 3px 5px 0px rgba(163, 16, 255, 0.695)',
                margin:'2%',
                padding: '2%'
              }}
            >
              <ColumnGraph props={userScores && userScores?.bar_graph} />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "2%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ducimus rem iusto sapiente iure aliquam quam, fugit
                dolor, recusandae sunt cum doloribus ullam voluptate illo, vitae
                nulla quis rerum. Earum? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nostrum iure consequuntur sequi tempore
                deserunt atque minus libero voluptatibus incidunt aperiam
                sapiente facilis repellat delectus at dolore error, blanditiis
                esse facere? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Omnis officiis aperiam consectetur perferendis magnam in
                labore expedita blanditiis nemo libero saepe reprehenderit
                necessitatibus enim dolores rem perspiciatis earum, assumenda
                illo?
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <div>
            {" "}
            Check Your Semister Wise Academic Marks And Growth In Each Field
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
