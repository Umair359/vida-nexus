import React from "react";

const Loader = () => {
    const loaderStyle = {
        width: "20px",
        height: "20px",
        border: "3px solid #FFF",
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
