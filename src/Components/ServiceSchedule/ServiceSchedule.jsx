import React from "react";
import AdminTimeInput from "../AdminTimeInput/AdminTimeInput";
import "./ServiceSchedule.css";
const ServiceSchedule = ({
  schedule,
  handleSheduleChange,
  handleAddSchedule,
  handleDeleteSchedule,
}) => {
  return (
    <div className="shedule">
      <AdminTimeInput
        text="Schedule"
        schedule={schedule}
        handleSheduleChange={handleSheduleChange}
        handleDeleteSchedule={handleDeleteSchedule}
      />
      <button onClick={handleAddSchedule}>
        <img src="/Images/AddIcon.png" alt="AddIcon.png" />
        <p>Add Day</p>
      </button>
    </div>
  );
};

export default ServiceSchedule;
