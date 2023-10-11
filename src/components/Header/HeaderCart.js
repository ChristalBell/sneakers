import React from "react";
import cart from "./icon-cart.svg";

const HeaderCart = () => {
  return (
    <div>
      <div className="header-cart">
        <a href="/" alt="Shopping Cart">
          <img src={cart} alt="Shopping Cart" />
        </a>
      </div>
    </div>
  );
};

export default HeaderCart;
