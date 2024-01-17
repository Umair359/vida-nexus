import React from "react";
import "./AdminInput.css";
const AdminInput = ({ type, id, text, handleInputChange }) => {
  return (
    <div className="admin-input">
      <label htmlFor={id}>
        <h4>{text}</h4>
      </label>
      <input
        type={type}
        id={id}
        onChange={(e) => handleInputChange(id, e.target.value)}
      />
    </div>
  );
};

export default AdminInput;
