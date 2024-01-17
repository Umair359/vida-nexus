import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsBuyer.css";
import { useRegisterUserMutation } from "../../../api/adminHome";
import { errorNotify, successNotify } from "../../../Helper/Toast";
const RegisterAsBuyer = () => {
  const [loading, setLoading] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.contact);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      formData.append("role", "customer");
      const res = await registerUser(formData);
      if (res.error) {
        errorNotify("Something went wrong");
      } else {
        successNotify("You are Registed Successfully");
      }
    } catch (error) {
      errorNotify("Something went wrong");
    }
  };

  return (
    <div className="my-container">
      <form onSubmit={handleRegisterUser} className="register-as-user">
        <h1>Register as User</h1>
        <div>
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="name"
            text="Name"
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="contact"
            text="Contact No"
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="email"
            text="Email"
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="password"
            id="password"
            text="Password"
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="password"
            id="confirmPassword"
            text="Confirm Password"
          />
        </div>
        <button className="btn-primary">
          {loading ? "Loading" : "CREATE ACCOUNT"}
        </button>
      </form>
    </div>
  );
};

export default RegisterAsBuyer;
