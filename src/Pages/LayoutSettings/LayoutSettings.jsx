import React from "react";
import "./LayoutSettings.css";
import AdminInputDes from "../../Components/AdminInputDes/AdminInputDes.jsx";
import AdminInputFile from "../../Components/AdminInputFile/AdminInputFile.jsx";
import ColorSelect from "../../Components/ColorSelect/ColorSelect.jsx";
import UpdateBtn from "../../Components/UpdateBtn/UpdateBtn.jsx";
const LayoutSettings = () => {
  return (
    <div className="admin-container">
      <div className="admin-layout-settings">
        <form>
          <div>
            <label for="store-name">
              <h4>Update Store Name</h4>
            </label>
            <input type="text" id="store-name" />
          </div>
          <AdminInputFile text="Change Store Logo" />
          <AdminInputDes text="Change Store Description" />
          <ColorSelect />

          <div>
            <UpdateBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LayoutSettings;
