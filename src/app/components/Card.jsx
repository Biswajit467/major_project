import React from 'react';
import './card.css';
import clginfo from '../utils/clginfo.json'; // Importing the data

const Card = (props) => {

  // Log the value and type of clginfo
  console.log('clginfo:', clginfo);

  return (
    <div className="teacher-info-container">

      {/* Check if clginfo is an array before mapping */}
      {props?.data ? props?.data.map((teacher, index) => (
        <div className="teacher-info" key={index}>
          <div className="card">
            <img src={teacher.image} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="teacher-details">
            <p className="heading" style={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive' }}>  {teacher.name}</p>
            <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>
              Email:
              <a style={{ fontSize: '18px', fontFamily: 'cursive' }} href={`mailto:${teacher.email}`}>
                {teacher.email}
              </a>
            </p>

            <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>
              Number:
              <a style={{ fontSize: '18px', fontFamily: 'cursive' }} href={`tel:${teacher.phone_number}`}>
                {teacher.phone_number}
              </a>
            </p>

            <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>Department: {teacher.department}</p>
            <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>Position: {teacher.position}</p>
            <p style={{ fontSize: '18px', fontFamily: 'cursive' }}>Category: {teacher.category}</p>
          </div>
        </div>
      )) : (
        <p style={{ borderRadius }}>No data available</p>
      )}

      <style jsx>{`
          .teacher-info-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
            max-width: 1200px;
            margin-left: auto;
            
            margin-right: auto;
            background-color: #030439;
          }

          /* ...rest of your styles */
          .teacher-info { width: 90%; height: 300px;  border-radius:  1%; background:  linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%);  padding: 1.5rem; margin-left: 10rem; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease-in-out; margin: 1rem 0; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; overflow: hidden; } .card { position: relative; width: 190px; height: 254px; background-color: #000; display: flex; flex-direction: column; justify-content: end; padding: 12px; gap: 12px; border-radius: 8px; cursor: pointer; } .card::before { content: ''; position: absolute; inset: 0; left: -5px; margin: auto; width: 200px; height: 264px; border-radius: 10px; background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%); z-index: -10; pointer-events: none; transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); } .card::after { content: ""; z-index: -1; position: absolute; inset: 0; background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%); transform: translate3d(0, 0, 0) scale(0.95); filter: blur(20px); } .heading { font-size: 20px; text-transform: capitalize; font-weight: 700; } .card p:not(.heading) { font-size: 18px; } .card p:last-child { color: #e81cff; font-weight: 600; } .card:hover::after { filter: blur(30px); } .card:hover::before { transform: rotate(-90deg) scaleX(1.34) scaleY(0.77); } .teacher-details { flex: 1; margin-right: 10rem; text-align: center; } .teacher-info:hover { transform: scale(1.05); box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      `}</style>
    </div>
  );
};

export default Card;
