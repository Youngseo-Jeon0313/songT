import React from "react";
import "./index.css";

const Page = ({ image }) => {
  return (
    <div className="container">
      <img className="academyimg"src={image} alt="학원 사진" />
    </div>
  );
};

export default Page;
