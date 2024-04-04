"use client";
import React, { useEffect, useState } from "react";
import { get_user_data } from "../../../user_apis/route";
import { get_user_scores } from "../../user_apis/route";
import { RadarChart } from "../../userComponents/RadarChart";
import { ColumnGraph } from "../../userComponents/ColumnGraph";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { CiSettings } from "react-icons/ci";
import SettingPopUp from "./settings/SettingPopUp";

const NavBar = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userScores, setUserScores] = useState(null);
  const [sohwPopUp, setSohwPopUp] = useState(false);
  const [dataTillCurrentSem, setDataTillCurrentSem] = useState(null);

  const closePopup = () => {
    setSohwPopUp(false);
  };

  const toggleOptionsForSettingBtn = () => {
    setSohwPopUp(!sohwPopUp);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await get_user_data();
        console.log("userData from home", userData);
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    setDataTillCurrentSem(
      userScores?.scores.filter((item) => item.sem <= userInfo?.user.sem)
    );
  }, [userScores]);

  // console.log("userInfo from home page", userInfo);
  console.log("user scores from home page", userScores);

  useEffect(() => {
    const fetchUserScores = async () => {
      try {
        console.log("checking user scores inside");
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

  console.log("user scores : ", userScores);

  return (
    <>
      <div style={{ padding: "2%" }}>
        {userInfo ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  margin: "0 10px",
                  marginLeft: "50rem",
                  fontSize: "14px",
                }}
              ></p>
              <p style={{ margin: "0", fontSize: "14px" }}>
                Branch: {userInfo?.user.branch}
              </p>
              <p style={{ margin: "0 10px", fontSize: "14px" }}>|</p>
              <p style={{ margin: "0", fontSize: "14px" }}>
                REG: {userInfo?.user.registration_number}
              </p>
              <p style={{ margin: "0 10px", fontSize: "14px" }}>|</p>
              <p style={{ margin: "0", fontSize: "14px" }}>
                Sem: {userInfo?.user.sem}
              </p>
              <div style={{ position: "relative", display: "inline-block" }}>
                <button
                  className="ml-8 mr-2 text-blue-000 hover:text-blue-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-blue-400 duration-700"
                  onClick={toggleOptionsForSettingBtn}
                >
                  <CiSettings
                    title="setting"
                    style={{ height: "2rem", width: "2rem" }}
                  />
                </button>
                {sohwPopUp && <SettingPopUp onClose={closePopup} />}
              </div>
              <button class="  text-red-000 hover:text-red-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-red-400 duration-700">
                <MdLogout
                  title="logout"
                  style={{ height: "2rem", width: "2rem" }}
                />
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "8rem",
                }}
              >
                <div
                  style={{
                    height: "7rem",
                    width: "7rem",
                    border: "1px solid white",
                    borderRadius: "100%",
                  }}
                ></div>

                <h1
                  style={{
                    margin: "0",
                    fontSize: "30px",
                    marginLeft: "1rem",
                    textTransform: "capitalize",
                  }}
                >
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
          <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>
            No user data available
          </p>
        )}
      </div>

      <div style={{ width: "90%", marginTop: "2%" }}>
        <div>
          {userScores?.radar_chart ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                // boxShadow: "3px 3px 5px 0px rgba(163, 16, 255, 0.695)",
                boxShadow:
                  "15px 15px 30px rgb(25, 25, 25),-15px -15px 30px rgb(60,60,60)",
                margin: "2%",
                padding: "2%",
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
          {userScores?.scores ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                // boxShadow: "3px 3px 5px 0px rgba(163, 16, 255, 0.695)",
                boxShadow:
                  "15px 15px 30px rgb(25, 25, 25),-15px -15px 30px rgb(60,60,60)",
                marginTop: "5%",
                margin: "2%",
                padding: "2%",
              }}
            >
              <ColumnGraph props={dataTillCurrentSem && dataTillCurrentSem} />
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

export default NavBar;
