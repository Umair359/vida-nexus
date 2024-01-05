import React from "react";
import "./ProfileSettings.css";
import AdminInput from "../../Components/AdminInput/AdminInput.jsx";
const ProfileSettings = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile">
        <div>
          <h3>Update Profile</h3>
          <h3>-</h3>
        </div>
        <div className="admin-profile-section1">
          <img src="/Images/admin.png" alt="admin.png" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21.71"
            viewBox="0 0 24 21.71"
          >
            <g id="camera_5382757" transform="translate(-3 -4.145)">
              <path
                id="Path_71910"
                data-name="Path 71910"
                d="M23.52,8.005H20.65l-1.71-3.03a1.635,1.635,0,0,0-1.42-.83h-5.4a1.626,1.626,0,0,0-1.48.96L9.34,8H6.48A3.483,3.483,0,0,0,3,11.485v10.9a3.465,3.465,0,0,0,3.47,3.47H23.52A3.483,3.483,0,0,0,27,22.375V11.485A3.483,3.483,0,0,0,23.52,8ZM6.6,12.525a1.21,1.21,0,0,1-1.21-1.19,1.174,1.174,0,0,1,1.16-1.19H6.6a1.19,1.19,0,1,1,0,2.38ZM15,23.005a6.585,6.585,0,1,1,6.58-6.59A6.589,6.589,0,0,1,15,23.005Z"
                fill="#083239"
              />
              <circle
                id="Ellipse_449"
                data-name="Ellipse 449"
                cx="2.75"
                cy="2.75"
                r="2.75"
                transform="translate(12.25 13.665)"
              />
            </g>
          </svg>
          <p>Upload New Picture</p>
        </div>

        <h3>Change Description</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        <button className="btn-primary btn-generate">Save</button>
      </div>
      <div className="admin-password">
        <div>
          <h3>Change Password</h3>
          <h3>-</h3>
        </div>
        <form>
          <AdminInput
            type={"password"}
            id={"password"}
            text={"Current Password"}
          />
          <AdminInput
            type={"password"}
            id={"new-password"}
            text={"New Password"}
          />
          <AdminInput
            type={"password"}
            id={"confirm-password"}
            text={"Confirm Password"}
          />

          <button className="btn-primary btn-generate">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
