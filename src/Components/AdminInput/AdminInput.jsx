import React from "react";
import "./AdminInput.css";
const AdminInput = ({ type, id, text }) => {
  return (
    <div className="admin-input">
      <label for={id}>
        <h4>{text}</h4>
      </label>
      <input type={type} id={id} />
    </div>
  );
};

export default AdminInput;
