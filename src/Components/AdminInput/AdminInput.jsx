import React from "react";
import "./AdminInput.css";
const AdminInput = ({
  className = "admin-input",
  type,
  id,
  text,
  handleInputChange,
  value = "",
  display = "",
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        <h4>{text}</h4>
      </label>
      <input
        placeholder={value}
        type={type}
        id={id}
        value={display}
        onChange={(e) => handleInputChange(id, e.target.value)}
      />
    </div>
  );
};

export default AdminInput;
