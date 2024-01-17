import React from "react";
import AdminInput from "../../Components/AdminInput/AdminInput";
import AdminInputDes from "../../Components/AdminInputDes/AdminInputDes";
import AdminTimeInput from "../../Components/AdminTimeInput/AdminTimeInput";

const ServiceSettingsEdit = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile">
        <div>
          <h3>Service Edit</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture">
          <div>
            <img src="/Images/service1.png" alt="service1.png.png" />
          </div>
          <button>
            <img src="/Images/AddPictureIcon.png" alt="AddPictureIcon.png" />
            <p>CHANGE PICTURE</p>
          </button>
        </div>
        <AdminInput
          text={"Change Service Name"}
          id={"product-name"}
          type={"text"}
        />
        <AdminInputDes text={"Change Service Description"} />
        <AdminInput
          text={"Change Service Price"}
          id={"product-price"}
          type={"number"}
        />
        <AdminTimeInput text="Change Service Timings" />
        <div className="product-setting-btn">
          <button
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
          ></button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                id="Icon_awesome-save"
                data-name="Icon awesome-save"
                d="M19.372,6.622,15.628,2.878a2.143,2.143,0,0,0-1.515-.628H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V8.138a2.143,2.143,0,0,0-.628-1.515ZM10,19.393a2.857,2.857,0,1,1,2.857-2.857A2.857,2.857,0,0,1,10,19.393ZM14.286,5.8v4.487a.536.536,0,0,1-.536.536H3.393a.536.536,0,0,1-.536-.536V5.643a.536.536,0,0,1,.536-.536h10.2a.536.536,0,0,1,.379.157l.155.155a.536.536,0,0,1,.157.379Z"
                transform="translate(0 -2.25)"
                fill="#fff"
              />
            </svg>
            <p>SAVE CHANGES</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSettingsEdit;
