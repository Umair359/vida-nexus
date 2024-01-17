import React from "react";
import "./ServiceInfo.css";
const ServiceInfo = ({ text, heading }) => {
  return (
    <div className="service-info">
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceInfo;
