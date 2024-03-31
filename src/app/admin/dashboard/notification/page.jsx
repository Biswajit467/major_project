"use client";
import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import CreateNotificationPopUp from "./CreateNotificationPopUp";
import { MdNotificationAdd, MdNotificationsActive } from "react-icons/md";

const Page = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNotificationRef, setSelectedNotificationRef] = useState(null);
  const [showComponent, setShowComponent] = useState(false);
  const [isBlurActive, setIsBlurActive] = useState(false);

  const closePopup = () => {
    setShowComponent(false);
  };

  const handleClick = () => {
    setShowComponent(!showComponent);
    setIsBlurActive(!isBlurActive);
  };

  const toggleExpand = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].expanded =
      !updatedNotifications[index].expanded;
    setNotifications(updatedNotifications);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MAIN_URL}/get-notifications/`);
        setNotifications(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedNotificationRef) {
      selectedNotificationRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedNotificationRef]);

  const isDateSelectedNotification = (notificationDate) => {
    return (
      selectedDate.getDate() === new Date(notificationDate).getDate() &&
      selectedDate.getMonth() === new Date(notificationDate).getMonth() &&
      selectedDate.getFullYear() === new Date(notificationDate).getFullYear()
    );
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backdropFilter: isBlurActive ? "blur(10px)" : "none", // Apply blur effect conditionally
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          width: "100%",
          maxWidth: "5xl",
          padding: "4px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {showComponent && <CreateNotificationPopUp onClose={closePopup} />}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "orange",
            marginRight: "1rem",
          }}
        >
          <button onClick={handleClick}>
            {" "}
            <MdNotificationAdd
              style={{
                fontSize: "2rem",
                marginLeft: "2rem",
              }}
            />
          </button>{" "}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "800",
              fontFamily: "Inter",
              color: "orange",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginRight: "1rem", // Add margin for spacing
            }}
          >
            Notifications
          </h1>
        </div>
        {/* Calendar */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "orange",
              marginRight: "1rem",
            }}
          >
            Select Date
          </h2>
          <div
            style={{
              backgroundColor: "#4B5563",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
              color: "black",
            }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              calendarClassName="bg-gray-800 text-white"
            />
          </div>
        </div>
      </div>
      {/* Notifications */}
      <div style={{ overflowY: "auto", width: "90%" }}>
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              background: isDateSelectedNotification(notification.created_at)
                ? "#05223f"
                : "linear-gradient(90deg, rgba(12,12,12,1) 6%, rgba(54,54,54,1) 50%, rgba(18,18,18,1) 100%)",
              borderRadius: "0.5rem",
              padding: "1rem",
              marginBottom: "1rem",
              width: "100%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
            ref={(ref) => {
              if (isDateSelectedNotification(notification.created_at)) {
                setSelectedNotificationRef(ref);
              }
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                {notification.expanded ? (
                  notification.notification
                ) : (
                  <>
                    {`${
                      notification.notification.length > 500
                        ? notification.notification.substring(0, 500) + "..."
                        : notification.notification
                    }`}
                    {notification.notification.length > 500 && (
                      <button
                        className="text-blue-400"
                        onClick={() => toggleExpand(index)}
                      >
                        Read more
                      </button>
                    )}
                  </>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>
                    {notification.user_name}
                  </span>
                </div>
                <span>
                  {new Date(notification.created_at).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
