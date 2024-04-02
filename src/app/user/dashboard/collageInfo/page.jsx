"use client"
import React, { useState, useEffect } from 'react';
import './card.css';
import Card from '../../../components/Card'; 
import clginfo from '../../../utils/clginfo.json'; 


// 学院信息数据


const CollageInfo = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [activeSection, setActiveSection] = useState('admins');
  const [filteredData, setFilteredData] = useState(clginfo);

  useEffect(() => {
    filterData(activeSection);
  }, [activeSection]);
  

  const handleSearchInputChange = () => {
    const searchValue = document.getElementById('searchbox').querySelector('input').value.toLowerCase();
    setIsSearching(searchValue.trim() !== '');

   
  const filtered = clginfo.filter(item => 
    (item.name && item.name.toLowerCase().includes(searchValue)) ||
    (item.email && item.email.toLowerCase().includes(searchValue)) ||
    (item.phone_number && item.phone_number.toLowerCase().includes(searchValue)) ||
    (item.department && item.department.toLowerCase().includes(searchValue)) ||
    (item.position && item.position.toLowerCase().includes(searchValue)) ||
    (item.category && item.category.toLowerCase().includes(searchValue))
  );

  setFilteredData(filtered);

  
    // Check if search box is cleared
    if (searchValue.trim() === '') {
      window.location.reload();
    }

  
};


  const filterData = (activeSection) => {
    switch (activeSection) {
      case 'admins':
        setFilteredData(clginfo.filter(item => item.category.toLowerCase() === 'admin'));
        break;
      case 'teachers':
        setFilteredData(clginfo.filter(item => item.category.toLowerCase() === 'lecture'));
        break;
      case 'staffs':
        setFilteredData(clginfo.filter(item => item.category.toLowerCase() === 'staff'));
        break;
      default:
        setFilteredData(clginfo);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const getSectionStyle = (sectionId) => ({
    display: activeSection === sectionId ? 'block' : 'none',
    marginTop: '2rem',
  });

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: '', color: 'white', padding: '2%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className='w-12 h-12' src="https://synergyinstitute.ac.in/assets/img/Synergy-Logo.gif" alt="" />
          <p style={{ fontSize: '1rem', fontWeight: 'bold', fontFamily: 'cursive', marginLeft:'5px' }}>SYNERGY INSTITUTE OF TECHNOLOGY</p>
          <div style={{ display: 'flex' , marginLeft:'16%' }}>
            <button
              onClick={() => scrollToSection('admins')}
              className="ml-8 mr-2 text-blue-000 hover:text-green-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-green-400 duration-700"
            >
              Admins
            </button>
            <button
              onClick={() => scrollToSection('teachers')}
              className="ml-8 mr-2 text-blue-000 hover:text-green-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-green-400 duration-700"
            >
              Teachers
            </button>
            <button
              onClick={() => scrollToSection('staffs')}
              className="ml-8 mr-2 text-blue-000 hover:text-green-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-xl py-2 px-6 shadow hover:shadow-green-400 duration-700"
            >
              Staffs
            </button>
          </div>
          <form className="form relative ml-[18%]" id='searchbox' onChangeCapture={handleSearchInputChange}>
            <button className="absolute  left-2 -translate-y-1/2 top-1/2 p-1">
              <svg
                className="w-5 h-5 text-gray-700"
                aria-labelledby="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16"
                width="17"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.333"
                  stroke="currentColor"
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                ></path>
              </svg>
            </button>
            <input 
              style={{color:'black'}}
              type="text"
              required=""
              placeholder="Search..."
              className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
            <button className="absolute right-3 -translate-y-1/2 top-1/2 p-1" type="reset">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </nav>

      {/* Admins Section */}
      <section id="admins" style={getSectionStyle('admins')}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          textAlign: 'center',
          textTransform: 'uppercase',
          background: 'linear-gradient(120deg, #00f7ff, #ff00e6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          
          // textDecoration: 'underline',
          textDecorationColor: 'wheat',
          paddingBottom: '10px',
          marginBottom: '30px',
          letterSpacing: '1px'
        }}>
         {isSearching ? 'Searching...' : 'Admins'}
        </h2>
        <Card data={filteredData} />
      </section>

      {/* Teachers Section */}
      <section id="teachers" style={getSectionStyle('teachers')}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          textAlign: 'center',
         
          textTransform: 'uppercase',
          background: 'linear-gradient(120deg, #00f7ff, #ff00e6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          // textDecoration: 'underline',
          textDecorationColor: 'wheat', backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',

          paddingBottom: '10px',
          marginBottom: '30px',
          letterSpacing: '1px'
        }}>
          {isSearching ? 'Searching...' : ' Teachers'}
        </h2>
        <Card data={filteredData} />
      </section>

      {/* Staffs Section */}
      <section id="staffs" style={getSectionStyle('staffs')}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
        
          color: 'transparent',
          textAlign: 'center',
          textTransform: 'uppercase',
          background: 'linear-gradient(120deg, #00f7ff, #ff00e6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          // textDecoration: 'underline',
          textDecorationColor: 'wheat',
          paddingBottom: '10px',
          marginBottom: '30px',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          letterSpacing: '1px'
        }}>
          {isSearching ? 'Searching...' : 'Staffs'}
        </h2>
        <Card data={filteredData} />
      </section>
    </div>
  );
};

export default CollageInfo;
