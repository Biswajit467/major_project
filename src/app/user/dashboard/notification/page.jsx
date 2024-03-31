"use client"
import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { MAIN_URL } from '@/app/common/urls';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNotificationRef, setSelectedNotificationRef] = useState(null);

  const toggleExpand = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].expanded = !updatedNotifications[index].expanded;
    setNotifications(updatedNotifications);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MAIN_URL}/get-notifications/`);
        setNotifications(response.data);  
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
    <div style={{display:'block' , fontFamily: 'sans-serif',letterSpacing:'2px',wordSpacing:'0.5px'}}>
      {/* Notifications */}
      <div style={{alignItems:'center'}} className="w-3/4 p-4 flex flex-col justify-center">
        <div className="flex flex-row">
          <h1
            style={{
             
            
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              overflow: 'hidden',
              color: 'orange',
              marginLeft: '20rem',
              marginBottom: '2rem',
            }}
            className="text-4xl font-inter font-extrabold text-white py-4"
          >
            Notifications
          </h1>
          {/* Calendar */}
          <div style={{position:'absolute', marginLeft:'67rem'}} className="h-fit">
            <h2
              style={{
              
                color: 'orange',
              }}
              className="text-xl font-bold mb-4 text-white"
            >
              Select Date
            </h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bg-gray-800 p-2 rounded w-full text-white"
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
        </div>
        <div className="w-auto h-full overflow-y-auto ">
          {notifications.map((notification, index) => (
            <div
              ref={(ref) => {
                if (isDateSelectedNotification(notification.created_at)) {
                  setSelectedNotificationRef(ref);
                }
              }}
              key={notification.id}
              className={`text-xl font-inter flex flex-col items-center space-y-2 ${
                isDateSelectedNotification(notification.created_at)
                  ? 'bg-[#05223f]'
                  : 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900'
              }`}
              style={{
                borderRadius: '10px',
                padding: '20px',
                margin: '10px',
                fontFamily: 'sans-serif',
                marginLeft:'18rem',
                width: '85rem', // Adjusted width
                // maxWidth: '1200px', // Adjusted max width
                height: notification.expanded ? 'auto' : 'fit-content',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="flex justify-between items-center w-full mb-4">
                <div className="flex items-center space-x-2">
                  {notification.senderImage && (
                    <img
                      src="https://icons8.com/icon/60960/administrator-male"
                      alt="alt"
                      className="w-14 h-12 rounded-full bg-blue-50"
                    />
                  )}
                  <span style={{fontSize:'2rem'}}>{notification.user_name}</span>
                </div>
                <span>{new Date(notification.created_at).toLocaleString()}</span>
              </div>
              <div>
                {notification.expanded ? (
                  notification.notification
                ) : (
                  <>
                    {`${notification.notification.length > 500 ? notification.notification.substring(0, 500) + '...' : notification.notification}`}
                    {notification.notification.length > 500 && (
                      <button 
                        style={{color:'#76b4df'}}
                        onClick={() => toggleExpand(index)}
                      >
                        Read more
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
  );
};

export default Notification;
