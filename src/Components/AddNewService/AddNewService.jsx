import React, { useState } from "react";
import AdminInput from "../AdminInput/AdminInput";
import AdminInputDes from "../AdminInputDes/AdminInputDes";
import AdminInputFile from "../AdminInputFile/AdminInputFile";
import AdminTimeInput from "../AdminTimeInput/AdminTimeInput";

const AddNewService = () => {
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
  });
  const [noOfDays, setNoOfDays] = useState(1);

  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };
  return (
    <div className="admin-profile">
      <div>
        <h3>Add New Services</h3>
        <h3>-</h3>
      </div>
      <AdminInput
        handleInputChange={handleInputChange}
        type={"text"}
        id={"serviceName"}
        text={"Service Name"}
      />
      <AdminInputDes
        handleInputChange={handleInputChange}
        text={"Service Description"}
        id={"description"}
      />
      <AdminInputFile text={"Change Picture"} />
      <AdminInput
        handleInputChange={handleInputChange}
        text={"Service Price"}
        id={"servicePrice"}
        type={"number"}
      />
      <AdminInput
        handleInputChange={handleInputChange}
        text={"Duration in Minutes"}
        id={"duration"}
        type={"number"}
      />
      <AdminTimeInput text="Schedule" noOfDays={noOfDays} />

      <div className="product-setting-btn">
        <button>
          <img src="/Images/AddIcon.png" alt="AddIcon.png" />
          <p onClick={() => setNoOfDays((prev) => prev + 1)}>Add Day</p>
        </button>

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
  );
};

export default AddNewService;
