'use client'
import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <nav id="navbar" class="navbar">
    <ul class="nav-menu">
      <li>
        <a data-scroll="home" href="#home" class="dot active">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a data-scroll="about" href="#about" class="dot">
          <span>About me</span>
        </a>
      </li>
      <li>
        <a data-scroll="services" href="#services" class="dot">
          <span>Services</span>
        </a>
      </li>
      <li>
        <a data-scroll="test" href="#test" class="dot">
          <span>Testimonials</span>
        </a>
      </li>
      <li>
        <a data-scroll="contact" href="#contact" class="dot">
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar