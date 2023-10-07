import React from "react";
import MobileMenu from "./MobileMenu";

import DesktopMenu from "./DesktopMenu";
import HeaderCart from "./HeaderCart";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <div className="header">
      <MobileMenu />
      <DesktopMenu />
      <HeaderCart />
      <HeaderProfile />
    </div>
  );
};

export default Header;
