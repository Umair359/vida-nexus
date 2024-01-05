import React from "react";
import "./AdminInputFile.css";

const AdminInputFile = ({ text }) => {
  return (
    <div className="admin-input-file">
      <label for="store-logo">
        <h4>{text}</h4>
        <div></div>
      </label>
      <input type="file" id="store-logo" accept=".png, .jpg, .jpeg" />
    </div>
  );
};

export default AdminInputFile;
