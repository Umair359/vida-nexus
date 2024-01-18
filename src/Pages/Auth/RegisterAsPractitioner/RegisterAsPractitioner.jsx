import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsPractitioner.css";
import {
  useCreatePractitionerMutation,
  useRegisterUserMutation,
} from "../../../api/appApi";
import { errorNotify, successNotify } from "../../../Helper/Toast.js";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Helper/Loader.js";
const RegisterAsPractitioner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const [createPractitioner] = useCreatePractitionerMutation();
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegisterPractitioner = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      userData.name === "" ||
      userData.contact === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      errorNotify("Feilds are missing");
    } else if (userData.password !== userData.confirmPassword) {
      errorNotify("Password does not match");
    } else {
      try {
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("phone", userData.contact);
        formData.append("email", userData.email);
        formData.append("password", userData.password);
        formData.append("role", "practitioner");
        const res = await registerUser(formData);
        if (res?.error?.data?.error) {
          errorNotify(res.error.data.error);
        } else {
          successNotify("You are Registed Successfully");
          try {
            const res = await createPractitioner();
            if (res?.error?.data?.error) {
              errorNotify(res.error.data.error);
            } else {
              successNotify("Practititioner is Created");
              navigate("/admin");
            }
          } catch (error) {
            console.log(error);
            errorNotify("Something went wrong");
          }
        }
      } catch (error) {
        console.log(error);
        errorNotify("Something went wrong");
      }
    }
    setLoading(false);
  };

  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };

  return (
    <div className="my-container">
      <form onSubmit={handleRegisterPractitioner} className="register-as-user">
        <h1>Register as Practitioner</h1>
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
        <button onClick={handleRegisterPractitioner} className="btn-primary">
          {loading ? <Loader /> : "CREATE ACCOUNT"}
        </button>
      </form>
    </div>
  );
};

export default RegisterAsPractitioner;
