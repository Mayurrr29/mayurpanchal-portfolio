import React, { useState } from "react";
import "./App.css"; // Import CSS file

function Head1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state for mobile
  // Toggle the menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="logo">MAYUR PANCHAL</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* You can replace this with an icon if preferred */}
      </div>

      <nav>
        {/* Conditionally render the nav links */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
      </nav>
<div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
      <div className="contact-btn">
        <a href="#contact" className="btn">CONTACT</a>
      </div>
      </div>
    </header>
  );
}

export default Head1;
