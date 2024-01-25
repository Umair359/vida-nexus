import React from "react";
import "./AdminInputDes.css";
const AdminInputDes = ({
  id = "store-des",
  text,
  handleInputChange = "",
  value = "",
}) => {
  return (
    <div className="admin-input-des">
      <label for="store-des">
        <h4>{text}</h4>
      </label>
      <textarea
        id={id}
        placeholder={value}
        onChange={(e) => handleInputChange(id, e.target.value)}
        rows="4"
        cols="50"
      ></textarea>
    </div>
  );
};

export default AdminInputDes;
