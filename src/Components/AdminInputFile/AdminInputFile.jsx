import React, { useState } from "react";
import "./AdminInputFile.css";

const AdminInputFile = ({ text }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setBackgroundImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-input-file">
      <label htmlFor="store-logo">
        <h4>{text}</h4>
        <div
          style={
            backgroundImage
              ? {
                  backgroundImage: `url(${backgroundImage})`,
                }
              : {}
          }
        ></div>
      </label>
      <input
        type="file"
        id="store-logo"
        accept=".png, .jpg, .jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AdminInputFile;
