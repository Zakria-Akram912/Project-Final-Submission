import React from "react";
import "./banner.css";

const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${props.bannerImage})` }}
    >
      <h1>{props.bannerHeading}</h1>
    </div>
  );
};

export default Banner;
