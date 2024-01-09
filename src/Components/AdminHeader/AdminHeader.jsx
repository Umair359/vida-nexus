import React from "react";
import "./AdminHeader.css";
import { useLocation } from "react-router-dom";
const AdminHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="admin-header">
      <h1>
        {pathname === "/admin/invoice"
          ? "List of Invoice"
          : pathname === "/admin/profile"
          ? "Profile Settings"
          : pathname === "/admin/setting/layout"
          ? "Layout Setting"
          : "Product Setting"}
      </h1>
      <div>
        <div>
          <img src="/Images/admin.png" alt="admin" />
          <p>Name Here</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.75"
          height="31.759"
          viewBox="0 0 31.75 31.759"
        >
          <path
            id="Icon_ionic-ios-settings"
            data-name="Icon ionic-ios-settings"
            d="M33.629,20.375a4.086,4.086,0,0,1,2.621-3.812,16.2,16.2,0,0,0-1.96-4.721,4.14,4.14,0,0,1-1.662.356A4.077,4.077,0,0,1,28.9,6.46,16.146,16.146,0,0,0,24.187,4.5a4.082,4.082,0,0,1-7.623,0,16.2,16.2,0,0,0-4.721,1.96A4.077,4.077,0,0,1,8.113,12.2a4.006,4.006,0,0,1-1.662-.356A16.553,16.553,0,0,0,4.5,16.572,4.084,4.084,0,0,1,4.508,24.2a16.2,16.2,0,0,0,1.96,4.721A4.078,4.078,0,0,1,11.851,34.3a16.289,16.289,0,0,0,4.721,1.96,4.075,4.075,0,0,1,7.607,0A16.2,16.2,0,0,0,28.9,34.3a4.082,4.082,0,0,1,5.383-5.383,16.289,16.289,0,0,0,1.96-4.721A4.105,4.105,0,0,1,33.629,20.375ZM20.45,26.982a6.615,6.615,0,1,1,6.615-6.615A6.613,6.613,0,0,1,20.45,26.982Z"
            transform="translate(-4.5 -4.5)"
            fill="#fa8708"
          />
        </svg>
        <svg
          id="notification_3602091"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
        >
          <g
            id="Group_3527"
            data-name="Group 3527"
            transform="translate(7.644 25.375)"
          >
            <path
              id="Path_71911"
              data-name="Path 71911"
              d="M10.765,24.625A4.538,4.538,0,0,0,15.2,21H6.326A4.538,4.538,0,0,0,10.765,24.625Z"
              transform="translate(-6.326 -21)"
              fill="#fa8708"
            />
          </g>
          <path
            id="Path_71912"
            data-name="Path 71912"
            d="M21.238,17.516c-.031,0-.06,0-.092,0A9.65,9.65,0,0,1,13.292,2.24V1.208a1.208,1.208,0,0,0-2.417,0V2.513a8.464,8.464,0,0,0-7.25,8.362v3.369a8.1,8.1,0,0,1-2.886,6.2,2.114,2.114,0,0,0,1.375,3.72H22.052a2.114,2.114,0,0,0,1.363-3.73A8.106,8.106,0,0,1,21.238,17.516Z"
            transform="translate(0 0)"
            fill="#fa8708"
          />
          <path
            id="Path_71913"
            data-name="Path 71913"
            d="M18.854,0a7.854,7.854,0,1,0,7.854,7.854A7.863,7.863,0,0,0,18.854,0Zm1.208,10.573a.906.906,0,0,1-1.812,0V6.646h-.6a.906.906,0,0,1,0-1.812h1.51a.907.907,0,0,1,.906.906Z"
            transform="translate(2.292)"
            fill="#fa8708"
          />
        </svg>
      </div>
    </div>
  );
};

export default AdminHeader;
