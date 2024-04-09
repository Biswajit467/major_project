"use client"
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { MAIN_URL } from '../../../common/urls';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNotificationRef, setSelectedNotificationRef] = useState(null);

  const toggleExpand = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].expanded = !updatedNotifications[index].expanded;
    setNotifications(updatedNotifications);
  };

  const toggleCollapse = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].expanded = false;
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
    <div style={{ display: 'block', fontFamily: 'sans-serif', letterSpacing: '2px', wordSpacing: '0.5px', position: 'relative' , backgroundColor: "#030439" }}>
      {/* Notifications */}
      <div style={{ alignItems: 'center' }} className="w-full mb-4 p-2 flex flex-col justify-center">
        {/* Calendar */}
        <div style={{ position: 'absolute', top: '10px', left:'1rem' }}>
          <h2
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              color:'#00ff00',
              marginTop: '0rem',
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
            className="font-bold mb-1 text-white"
          >
            Select Date
          </h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-gray-800 p-1 md:p-2 rounded w-[9rem] text-white"
            style={{
              fontFamily: 'Inter, sans-serif',
              borderRadius: '8px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #333',
              color: '#fff',
            }}
            calendarStyle={{
              borderRadius: '8px',
              backgroundColor: '#1a1a1a',
              color: '#fff',
            }}
            dayClassName={(date) => (date.getDay() === 0 || date.getDay() === 6) ? 'weekend' : undefined}
            dayStyle={{
              color: '#fff',
            }}
            selectedDayStyle={{
              backgroundColor: '#444',
              color: '#fff',
            }}
            navigationStyle={{
              border: '1px solid #555',
              backgroundColor: '#333',
              color: '#fff',
            }}
            navigationPrevStyle={{
              border: '1px solid #555',
              backgroundColor: '#333',
              color: '#fff',
            }}
            navigationNextStyle={{
              border: '1px solid #555',
              backgroundColor: '#333',
              color: '#fff',
            }}
          />
        </div>
        <h1
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #FFFFFF, #3B82F6)',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            textDecoration:'underline',
            fontFamily:'gillroy',
            fontSize: '2.5rem',
          }}
          className="font-inter font-extrabold text-white py-2"
        >
         Notice Board 
        </h1>
        <div style={{ marginTop: '3rem', marginBottom: '1rem' }}>
          {/* Rest of the code remains the same */}
          <div style={{marginTop:''}} className="w-full overflow-y-auto">
            {notifications.map((notification, index) => (
              <div
                ref={(ref) => {
                  if (isDateSelectedNotification(notification.created_at)) {
                    setSelectedNotificationRef(ref);
                  }
                }}
                key={notification.id}
                className={`text-xs md:text-xl font-inter flex flex-col items-center space-y-2 p-1 m-1 w-full h-auto ${
                  isDateSelectedNotification(notification.created_at) ? 'bg-[#05223f]' : 'bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-900'
                } rounded-lg p-4 m-4 ml-8 font-sans max-w-[88%] ${
                  notification.expanded ? 'h-auto' : 'h-fit-content'
                } shadow-lg text-base`}
              >
                <div className="flex justify-between items-center w-full mb-3 md:mb-4">
                  <div className="flex items-center space-x-2">
                    {notification.senderImage && (
                      <img
                        src="https://icons8.com/icon/60960/administrator-male"
                        alt="alt"
                        className="w-12 h-10 md:w-14 md:h-12 rounded-full bg-blue-50"
                      />
                    )}
                    <span style={{ fontSize: '1.5rem', maxWidth: '80%' }}>{notification.user_name}</span>
                  </div>
                  <span style={{ fontSize: '0.rem' }}>{new Date(notification.created_at).toLocaleString()}</span>
                </div>
                <div>
                  {notification.expanded ? (
                    <>
                      {notification.notification}
                      <button
                        style={{ color: '#76b4df', fontSize: '1rem', marginLeft: '1rem' }}
                        onClick={() => toggleCollapse(index)}
                      >
                      ... Read Less
                      </button>
                    </>
                  ) : (
                    <>
                      {`${notification.notification.length > 400 ? notification.notification.substring(0, 400) + '...' : notification.notification}`}
                      {notification.notification.length > 400 && (
                        <button
                          style={{ color: '#76b4df', fontSize: '1rem', marginLeft: '1rem' }}
                          onClick={() => toggleExpand(index)}
                        >
                          Read More
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
