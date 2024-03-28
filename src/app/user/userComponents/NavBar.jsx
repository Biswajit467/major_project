import React, { useState } from 'react';
import Link from 'next/link';
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
    notifications: false
  });

  const iconSize = 20;
  const enlargedIconSize = 35;

  const handleMouseOver = (icon) => {
    setIsHovered({ ...isHovered, [icon]: true });
  };

  const handleMouseOut = (icon) => {
    setIsHovered({ ...isHovered, [icon]: false });
  };

  const getIconStyle = (icon) => ({
    fontSize: isHovered[icon] ? enlargedIconSize : iconSize,
    transition: 'font-size 0.2s ease-in-out' // Transition effect for font-size change
  });

  return (
    <nav id="navbar" className="navbar" style={{ position: 'fixed', top: '50%', right: '50px', width: '60px', height: '294px', borderRadius: '30px', background: '#3E3E3E', transform: 'translateY(-50%)', boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" }}>
      <ul className="nav-menu">
        <li>
          <Link href="/user/dashboard/home">
            <div className="dot" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2rem" }} onMouseOver={() => handleMouseOver('home')} onMouseOut={() => handleMouseOut('home')}>
              <div id='icon' style={getIconStyle('home')}>
                <IoIosHome />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/leaderboard">
            <div className="dot" style={{ display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "2rem" }} onMouseOver={() => handleMouseOver('leaderboard')} onMouseOut={() => handleMouseOut('leaderboard')}>
              <div id='icon' style={getIconStyle('leaderboard')}>
                <MdOutlineLeaderboard />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/viewpost">
            <div className="dot" style={{ display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "2rem" }} onMouseOver={() => handleMouseOver('images')} onMouseOut={() => handleMouseOut('images')}>
              <div id='icon' style={getIconStyle('images')}>
                <FaImages />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/collageInfo">
            <div className="dot" style={{ display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "2rem" }} onMouseOver={() => handleMouseOver('info')} onMouseOut={() => handleMouseOut('info')}>
              <div id='icon' style={getIconStyle('info')}>
                <FaInfoCircle />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard/notification">
            <div className="dot" style={{ display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "2rem" }} onMouseOver={() => handleMouseOver('notifications')} onMouseOut={() => handleMouseOut('notifications')}>
              <div id='icon' style={getIconStyle('notifications')}>
                <IoNotificationsCircle />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
