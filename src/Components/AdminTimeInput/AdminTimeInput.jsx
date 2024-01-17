import React from "react";
import TimeSelect from "../../Components/TimeSelect/TimeSelect.jsx";
import "./AdminTimeInput.css";
const AdminTimeInput = ({ text = "Select Time" }) => {
  return (
    <div className="admin-input-time">
      <h4>{text}</h4>
      <div>
        <TimeSelect text="Start Time" />
        <TimeSelect text="Close Time" />
      </div>
    </div>
  );
};

export default AdminTimeInput;
