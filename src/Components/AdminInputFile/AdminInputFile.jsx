import React from "react";
import "./AdminInputFile.css";

const AdminInputFile = ({ text, handleInputChange, image }) => {
  return (
    <div className="admin-input-file">
      <label htmlFor="store-logo">
        <h4>{text}</h4>
        <div
          style={
            image
              ? {
                  backgroundImage: `url(${image})`,
                }
              : {}
          }
        ></div>
      </label>
      <input
        onChange={handleInputChange}
        type="file"
        id="store-logo"
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default AdminInputFile;
