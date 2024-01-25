import React from "react";
import TimeSelect from "../../Components/TimeSelect/TimeSelect.jsx";
import "./AdminTimeInput.css";
const AdminTimeInput = ({ noOfDays = 1, text = "Select Time" }) => {
  console.log(noOfDays, "noOfDays");
  const days = Array.from({ length: noOfDays });
  return (
    <div className="admin-input-time">
      <h4>{text}</h4>
      {days.map((_, index) => (
        <div>
          <TimeSelect text="Monday" days={true} />
          <TimeSelect text="Start Time" />
          <TimeSelect text="Close Time" />
        </div>
      ))}
    </div>
  );
};

export default AdminTimeInput;
