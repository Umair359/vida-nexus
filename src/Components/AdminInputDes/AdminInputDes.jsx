import React from "react";
import "./AdminInputDes.css";
const AdminInputDes = ({ text }) => {
  return (
    <div className="admin-input-des">
      <label for="store-des">
        <h4>{text}</h4>
      </label>
      <textarea id="store-des" rows="4" cols="50"></textarea>
    </div>
  );
};

export default AdminInputDes;
