import React from "react";
import TimeSelect from "../../Components/TimeSelect/TimeSelect.jsx";
import "./AdminTimeInput.css";
import { FaCircleMinus } from "react-icons/fa6";
const AdminTimeInput = ({
  schedule = [],
  text = "Select Time",
  handleDeleteSchedule = () => {},
  handleSheduleChange = () => {},
  value = "",
}) => {
  console.log(schedule);
  return (
    <div className="admin-input-time">
      <h4>{text}</h4>
      {schedule.map((_, index) => (
        <div>
          <TimeSelect
            text={`${index}`}
            days={true}
            handleSheduleChange={handleSheduleChange}
            index={index}
            key="day"
          />
          <TimeSelect
            text="Start Time"
            handleSheduleChange={handleSheduleChange}
            index={index}
            key="startTime"
          />
          <TimeSelect
            text="Close Time"
            handleSheduleChange={handleSheduleChange}
            index={index}
            key="endTime"
          />
          <button onClick={() => handleDeleteSchedule(index)}>
            <FaCircleMinus fill="white" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminTimeInput;
