'use client'
import React, { useEffect, useState } from "react";
import { get_user_data } from "../../../user_apis/route";
import { user_stats } from "../../adminapi/route";
import { MdLogout } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { MdNotificationAdd } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { CiSettings } from "react-icons/ci";
import { RadialMultiBarChart } from "../../adminComponents/RadialMultiBarChart";
import Branches from "../../adminComponents/Branches";
import ShowSemPopUp from "../../adminComponents/ShowSemPopUp";
import "./page.css";
const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [branch, setBranch] = useState("");
  const [showSempopup, setShowSempopup] = useState(false);

  console.log("userStats" , userStats)
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
  }, []);

  useEffect(() => {
    const fetch_student_quantity = async () => {
      const users_quantity = await user_stats();
      setUserStats(users_quantity);
    };
    fetch_student_quantity();
  }, [userInfo]);

  const handleBranchClick = () => {
    setShowSempopup(true);
  };
  const closePopup = () => {
    setShowSempopup(false);
  };

  console.log("userStats", userStats);
  return (
    <div style={{ padding: "10px", backgroundColor: "", height: "5rem" }}>
      {showSempopup ? (
        <ShowSemPopUp onClose={closePopup} branch={branch} />
      ) : null}
      <div>
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

              <button class=" ml-8 mr-2  text-blue-000 hover:text-blue-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-blue-400 duration-700">
                <CiSettings />
              </button>
              <button title="logout"
                className="text-red-000 hover:text-red-900 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-red-400 duration-700"
              >
                <MdLogout style={{ height: '2rem', width: '2rem' }} />

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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "2%",
          marginTop: "4%",
          marginLeft: "2%",
          marginRight: "2%",
          borderRadius: "10px",
          boxShadow:
            "15px 15px 30px rgb(25, 25, 25),-15px -15px 30px rgb(60,60,60)",
        }}
      >
        <div>{userStats ? userStats && <RadialMultiBarChart data={userStats} /> : null}</div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum id
          nobis numquam possimus voluptatem sunt laboriosam, culpa provident
          quo, a similique minus! Laudantium delectus, asperiores ipsum nihil
          eum veniam distinctio.lorem Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quia tempore nihil, dolores ipsa at molestiae minima
          omnis praesentium earum ipsam modi necessitatibus tenetur eaque
          laborum velit facere ipsum optio voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Veniam excepturi qui minus tempore
          asperiores laudantium sequi voluptatem, cum repellat, ipsam error quae
          iusto quaerat, laborum iure beatae aliquid. Impedit, voluptatibus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic
          reiciendis omnis delectus labore numquam totam aspernatur quasi! Enim
          voluptatem repellendus voluptate optio magnam quam corrupti commodi
          accusantium qui dolores. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Facere, odio totam libero ad similique placeat autem
          iste commodi, dicta fuga minus tenetur hic alias unde eos laudantium
          eligendi debitis assumenda! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dolorem illo qui exercitationem eligendi rerum natus
          error nemo quaerat. Repellat magni cupiditate veniam libero ipsam nemo
          consectetur. Vitae minima quae aspernatur?
        </div>
      </div>

      <div>
        <h2 style={{ margin: "0", fontSize: "1.5rem", textAlign: "center" }}>
          Go For Students By Branches
        </h2>
      </div>
      {userStats ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {
            userStats.total_students_by_branch.map((item) =>
              (<button
              className="button-hover"
              onClick={() => {
                handleBranchClick();
                setBranch(`${item.branch}`);
              }}
            >
              <Branches
                branchName={`${item.branch}`}
                quantity={`${item.total_students} / ${userStats?.total_records} `}
              />
            </button>)
            )
          }
        </div>
      ) : null}
    </div>
  );
};

export default Home;
