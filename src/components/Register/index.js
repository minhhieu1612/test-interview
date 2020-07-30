import React from "react";
import "./index.css";
import logoFestival from "./logo-festival.png";
import logoHueMoi from "./logo-hue-moi.png";
import headBanner from "./head-banner.png";
export default function Register(params) {
  return (
    <div className="register-page">
      <div className="logo-festival">
        <img src={logoFestival} alt="" />
      </div>
      <div className="logo-hue-moi">
        <img src={logoHueMoi} alt="" />
      </div>
      <div className="head-banner">
        <img src={headBanner} alt="" />
      </div>
    </div>
  );
}
