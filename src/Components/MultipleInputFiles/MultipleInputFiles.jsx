import React from "react";
import "./MultipleInputFiles.css";

const MultipleInputFiles = ({
  id = "first",
  text,
  handleInputChange,
  image,
}) => {
  return (
    <div className="admin-input-file-multiple">
      <label for={`multiple_image_${id}`}>
        <h4>{text}</h4>
        {image.length === 0 ? (
          <div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div>
            {image.map((item) => {
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
        onChange={handleInputChange}
        multiple
        type="file"
        id={`multiple_image_${id}`}
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default MultipleInputFiles;
