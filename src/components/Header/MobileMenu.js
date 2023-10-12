import React from "react";
import logo from "./logo.svg";
import "./mobileMenu.scss";
const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <a id="header-button" className="hamburger" href="/">
        <div className="hamburger-inner"></div>
      </a>

      <a href="/" alt="Sneakers Home Page">
        <img src={logo} alt="Sneakers Logo" />
      </a>
    </div>
  );
};

export default MobileMenu;
