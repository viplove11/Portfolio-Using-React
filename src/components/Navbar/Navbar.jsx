import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar-div">
      <div className="navbar-logo">
        <p>
          Viplove <span>Parsai</span>
        </p>
      </div>
      <div className="navbar-links">
        <a
          className={menu === "Home" ? 'active' : ""}
          onClick={() => handleMenuClick("Home")}
          href="#"
        >
          Home
        </a>
        <a
          className={menu === "Projects" ? 'active' : ""}
          onClick={() => handleMenuClick("Projects")}
          href="#"
        >
          Projects
        </a>
        <a
          className={menu === "About" ? 'active' : ""}
          onClick={() => handleMenuClick("About")}
          href="#"
        >
          About
        </a>
        <a
          className={menu === "Services" ? 'active' : ""}
          onClick={() => handleMenuClick("Services")}
          href="#"
        >
          Services
        </a>
        <a
          className={menu === "Contact" ? 'active' : ""}
          onClick={() => handleMenuClick("Contact")}
          href="#"
        >
          Contact
        </a>
        <a
          className={menu === "Hire me" ? 'active' : ""}
          onClick={() => handleMenuClick("Hire me")}
          href="#"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};