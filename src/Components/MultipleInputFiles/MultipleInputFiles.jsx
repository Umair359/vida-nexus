import React, { useState } from "react";
import "./MultipleInputFiles.css";
const MultipleInputFiles = ({ id = "first", text }) => {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const imagesArray = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = () => {
          imagesArray.push(reader.result);

          if (imagesArray.length === files.length) {
            setBackgroundImages(imagesArray);
          }
        };

        reader.readAsDataURL(files[i]);
      }
    }
  };
  console.log(backgroundImages);
  return (
    <div className="admin-input-file-multiple">
      <label for={`multiple_image_${id}`}>
        <h4>{text}</h4>
        {backgroundImages.length === 0 ? (
          <div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div>
            {backgroundImages.map((item) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${item})`,
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </label>
      <input
        onChange={handleFileChange}
        multiple
        type="file"
        id={`multiple_image_${id}`}
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default MultipleInputFiles;
