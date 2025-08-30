import React, { useState } from "react";
import logo from "../assets/medi-logo.png";
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile
  };


  return (
<nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item" onClick={() => scrollToSection("home")}>Home</li>
          <li className="nav-item" onClick={() => scrollToSection("stats")}>Stats</li>
          <li className="nav-item" onClick={() => scrollToSection("services")}>Services</li>
          <li className="nav-item" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
