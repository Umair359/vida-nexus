import React from "react";

const Loader = ({ color = "#FFF", size = "20px" }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `3px solid ${color}`,
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
  };

  return (
    <>
      <span style={loaderStyle}></span>
      <style>
        {`
          @keyframes rotation {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Loader;
