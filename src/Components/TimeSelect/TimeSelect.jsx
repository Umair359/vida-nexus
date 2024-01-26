import React from "react";
import "./TimeSelect.css";
const TimeSelect = ({
  isList = false,
  text,
  id = "",
  value,
  days = false,
  handleInputChange = (id, e) => {},
  handleSheduleChange = () => {},
  index = "",
  name = "",
  item = "",
  isProduct = false,
}) => {
  console.log(item);
  return (
    <div className="time-select">
      <select
        onChange={
          isList || isProduct
            ? (e) => handleInputChange(id, e.target.value)
            : (e) => handleSheduleChange(e.target.value, index, name)
        }
        style={
          isList || isProduct
            ? { paddingLeft: "15px", backgroundImage: "none" }
            : {}
        }
      >
        {isList ? (
          <option value={value?._id}>{value?.name}</option>
        ) : (
          <option value={""}>{item === "" ? text : item}</option>
        )}

        {isList ? (
          <>
            <option value={"65b0e179e9ced837aa67cde8"}>neurologist</option>
            <option value={"65b0e15ce9ced837aa67cde0"}>psychologist</option>
            <option value={"65b0e16be9ced837aa67cde4"}>physiotherapist</option>
          </>
        ) : days ? (
          <>
            <option value={"Monday"}>Monday</option>
            <option value={"Tuesday"}>Tuesday</option>
            <option value={"Wednesday"}>Wednesday</option>
            <option value={"Thursday"}>Thursday</option>
            <option value={"Friday"}>Friday</option>
            <option value={"Saturday"}>Saturday</option>
            <option value={"Sunday"}>Sunday</option>
          </>
        ) : isProduct ? (
          <>
            <option value={"65b3b97ffdb1bd74da33b337"}>healthcare</option>
            <option value={"65b3b953fdb1bd74da33b332"}>therapy</option>
            <option value={"65b3b927fdb1bd74da33b32d"}>sleep aids</option>
          </>
        ) : (
          <>
            <option value={"00:00"}>12:00AM</option>
            <option value={"01:00"}>01:00AM</option>
            <option value={"02:00"}>02:00AM</option>
            <option value={"03:00"}>03:00AM</option>
            <option value={"04:00"}>04:00AM</option>
            <option value={"05:00"}>05:00AM</option>
            <option value={"06:00"}>06:00AM</option>
            <option value={"07:00"}>07:00AM</option>
            <option value={"08:00"}>08:00AM</option>
            <option value={"09:00"}>09:00AM</option>
            <option value={"10:00"}>10:00AM</option>
            <option value={"11:00"}>11:00AM</option>
            <option value={"12:00"}>12:00PM</option>
            <option value={"13:00"}>01:00PM</option>
            <option value={"14:00"}>02:00PM</option>
            <option value={"15:00"}>03:00PM</option>
            <option value={"16:00"}>04:00PM</option>
            <option value={"17:00"}>05:00PM</option>
            <option value={"18:00"}>06:00PM</option>
            <option value={"19:00"}>07:00PM</option>
            <option value={"20:00"}>08:00PM</option>
            <option value={"21:00"}>09:00PM</option>
            <option value={"22:00"}>10:00PM</option>
            <option value={"23:00"}>11:00PM</option>
          </>
        )}
      </select>
    </div>
  );
};

export default TimeSelect;
