import React from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsPractitioner.css";
import AdminInputDes from "../../../Components/AdminInputDes/AdminInputDes";
import AdminInputFile from "../../../Components/AdminInputFile/AdminInputFile";
import { useNavigate } from "react-router-dom";
const RegisterAsPractitioner = () => {
  const navigate = useNavigate();
  return (
    <div className="my-container">
      <form className="register-as-practioneer">
        <h1>Register as Practitioner</h1>
        <div>
          <AdminInput type="text" id="register-practioneer-name" text="Name" />
          <AdminInput
            type="text"
            id="register-user-contact"
            text="Contact No"
          />
          <AdminInput
            type="text"
            id="register-practioneer-email"
            text="Email"
          />
          <AdminInput
            type="password"
            id="register-practioneer-password"
            text="Password"
          />
          <AdminInput
            type="password"
            id="register-practioneer-confirm-password"
            text="Confirm Password"
          />
          <AdminInputDes text="Description" />
          <AdminInputFile text="Upload Picture" />
        </div>
        <button
          onClick={() => navigate("/admin/setting/service")}
          className="btn-primary"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default RegisterAsPractitioner;
