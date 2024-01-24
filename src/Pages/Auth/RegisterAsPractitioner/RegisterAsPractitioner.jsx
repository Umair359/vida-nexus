import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsPractitioner.css";
import { useRegisterUserMutation } from "../../../api/appApi";
import { errorNotify } from "../../../Helper/Toast.js";
import Loader from "../../../Helper/Loader.js";
import ResgiterConfirmModal from "../../ResgiterConfirmModal/ResgiterConfirmModal.jsx";
const RegisterAsPractitioner = () => {
  const [loading, setLoading] = useState(false);
  const [registerUser] = useRegisterUserMutation();
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
          document.getElementById("my_modal_2").showModal();
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
        <ResgiterConfirmModal />
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
