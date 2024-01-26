import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import "./RegisterAsBuyer.css";
import { useRegisterUserMutation } from "../../../api/appApi";
import { errorNotify, successNotify } from "../../../Helper/Toast";
import Loader from "../../../Helper/Loader";
import { useCreateCustomerMutation } from "../../../api/appApi";
import { useNavigate } from "react-router-dom";
const RegisterAsBuyer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const [createCustomer] = useCreateCustomerMutation();
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
        formData.append("role", "customer");
        const res = await registerUser(formData);
        console.log(res);
        if (res?.error?.data?.error) {
          errorNotify(res.error.data.error);
        } else {
          successNotify("You are Registed Successfully");
          try {
            const res = await createCustomer();
            if (res?.error?.data?.error) {
              errorNotify(res.error.data.error);
            } else {
              successNotify("Customer is Created");
              navigate("/");
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
            display={userData.name}
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="contact"
            text="Contact No"
            display={userData.contact}
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="email"
            text="Email"
            display={userData.email}
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="password"
            id="password"
            text="Password"
            display={userData.password}
          />
          <AdminInput
            handleInputChange={handleInputChange}
            type="password"
            id="confirmPassword"
            text="Confirm Password"
            display={userData.confirmPassword}
          />
        </div>
        <button className="btn-primary">
          {loading ? <Loader /> : "CREATE ACCOUNT"}
        </button>
      </form>
    </div>
  );
};

export default RegisterAsBuyer;
