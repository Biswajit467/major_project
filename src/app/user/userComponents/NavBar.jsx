import React, { useState } from "react";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaImages } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState({
    home: false,
    leaderboard: false,
    images: false,
    info: false,
    notifications: false,
  });

  const iconSize = 20;
  const enlargedIconSize = 25;
  const iconColor = "#00ff00";

  const handleMouseOver = (icon) => {
    setIsHovered({ ...isHovered, [icon]: true });
  };

  const handleMouseOut = (icon) => {
    setIsHovered({ ...isHovered, [icon]: false });
  };

  const getIconStyle = (icon) => ({
    fontSize: isHovered[icon] ? enlargedIconSize : iconSize,
    color: isHovered[icon] ? iconColor : "#fff",
    transition: "font-size 0.2s ease-in-out",
  });

  return (
    // <nav id="navbar" className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-8 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
    <nav
      id="navbar"
      className=" bg-white/20 backdrop-blur-sm"
      style={{
        position: "fixed",
        top: "50%",
        right: "50px",
        width: "60px",
        height: "294px",
        borderRadius: "30px",
        // background: '#3E3E3E',
        transform: "translateY(-50%)",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        zIndex: "1000",
      }}
    >
      <ul className="nav-menu" style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/user/dashboard/home">
            <div
              className="dot"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              onMouseOver={() => handleMouseOver("home")}
              onMouseOut={() => handleMouseOut("home")}
            >
              <div id="icon" style={getIconStyle("home")}>
                <IoIosHome title="Home" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/leaderboard">
            <div
              className="dot"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              onMouseOver={() => handleMouseOver("leaderboard")}
              onMouseOut={() => handleMouseOut("leaderboard")}
            >
              <div id="icon" style={getIconStyle("leaderboard")}>
                <MdOutlineLeaderboard title="Leaderboard" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/viewpost">
            <div
              className="dot"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              onMouseOver={() => handleMouseOver("images")}
              onMouseOut={() => handleMouseOut("images")}
            >
              <div id="icon" style={getIconStyle("images")}>
                <FaImages title="Posts" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/collageInfo">
            <div
              className="dot"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              onMouseOver={() => handleMouseOver("info")}
              onMouseOut={() => handleMouseOut("info")}
            >
              <div id="icon" style={getIconStyle("info")}>
                <FaInfoCircle title=" Collage Info" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/notification">
            <div
              className="dot"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
              onMouseOver={() => handleMouseOver("notifications")}
              onMouseOut={() => handleMouseOut("notifications")}
            >
              <div id="icon" style={getIconStyle("notifications")}>
                <IoNotificationsCircle title="Notice Board" />
              </div>
            </div>
          </Link>
        </li>
      </ul>

      {/* Media Queries for Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          #navbar {
            width: 50px;
            height: auto;
            flex-direction: column;
            right: 20px;
            top: 20px;
          }
          .dot {
            margin-top: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
