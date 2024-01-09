import React from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsBuyer.css";
const RegisterAsBuyer = () => {
  return (
    <div className="my-container">
      <form className="register-as-user">
        <h1>Register as User</h1>
        <div>
          <AdminInput type="text" id="register-user-name" text="Name" />
          <AdminInput
            type="text"
            id="register-user-contact"
            text="Contact No"
          />
          <AdminInput type="text" id="register-user-email" text="Email" />
          <AdminInput
            type="password"
            id="register-user-password"
            text="Password"
          />
          <AdminInput
            type="password"
            id="register-user-confirm-password"
            text="Confirm Password"
          />
        </div>
        <button className="btn-primary">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default RegisterAsBuyer;
