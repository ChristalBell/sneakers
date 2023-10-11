import React from "react";
import pic from "./image-avatar.png";

const HeaderProfile = () => {
  return (
    <div>
      <div className="header-profile">
        <a href="/" alt="Profile">
          <img src={pic} alt="Profile" />
        </a>
      </div>
    </div>
  );
};

export default HeaderProfile;
