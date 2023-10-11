import React from "react";
import logo from "./logo.svg";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="header-button header-button-inner hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/" alt="Sneakers Home Page">
        <img src={logo} alt="Sneakers Logo" />
      </a>
    </div>
  );
};

export default MobileMenu;
