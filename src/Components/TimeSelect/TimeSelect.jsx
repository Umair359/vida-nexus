import React from "react";
import "./TimeSelect.css";
const TimeSelect = ({ text }) => {
  return (
    <div className="time-select">
      <select>
        <option>{text}</option>
        <option>1:00AM</option>
        <option>2:00AM</option>
        <option>3:00AM</option>
        <option>4:00AM</option>
        <option>5:00AM</option>
        <option>6:00AM</option>
        <option>7:00AM</option>
        <option>8:00AM</option>
        <option>9:00AM</option>
        <option>10:00AM</option>
        <option>11:00AM</option>
      </select>
    </div>
  );
};

export default TimeSelect;
