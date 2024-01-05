import React from "react";
import "./LayoutSettings.css";
import AdminInputDes from "../../Components/AdminInputDes/AdminInputDes.jsx";
import AdminInputFile from "../../Components/AdminInputFile/AdminInputFile.jsx";

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
          <div>
            <h4>Select Color</h4>
            <div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-1"
                  type="radio"
                />
                <label for="color-1">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-2"
                  type="radio"
                />
                <label for="color-2">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-3"
                  type="radio"
                />
                <label for="color-3">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-4"
                  type="radio"
                />
                <label for="color-4">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-5"
                  type="radio"
                />
                <label for="color-5">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-6"
                  type="radio"
                />
                <label for="color-6">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-7"
                  type="radio"
                />
                <label for="color-7">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-8"
                  type="radio"
                />
                <label for="color-8">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-9"
                  type="radio"
                />
                <label for="color-9">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-10"
                  type="radio"
                />
                <label for="color-10">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-11"
                  type="radio"
                />
                <label for="color-11">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-12"
                  type="radio"
                />
                <label for="color-12">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-13"
                  type="radio"
                />
                <label for="color-13">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-14"
                  type="radio"
                />
                <label for="color-14">
                  <div></div>
                </label>
              </div>
              <div className="select-color-container">
                <input
                  name="color"
                  className="select-color"
                  id="color-15"
                  type="radio"
                />
                <label for="color-15">
                  <div></div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className="admin-btn btn-primary">
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
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LayoutSettings;
