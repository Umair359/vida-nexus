import React, { useState } from "react";
import Loader from "../../../Helper/Loader";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import { errorNotify, successNotify } from "../../../Helper/Toast";
import { useUpdateResetPasswordMutation } from "../../../api/appApi";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [resetPassword] = useUpdateResetPasswordMutation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!userData.password || !userData.confirmPassword) {
      errorNotify("Feilds are missing");
    }
    if (userData.confirmPassword !== userData.password) {
      errorNotify("Password and Confirm Password do not match");
    }
    try {
      const formData = {
        email: userData.email,
        password: userData.password,
      };
      const res = await resetPassword({ token, formData });
      console.log(token);
      if (res.error) {
        errorNotify(res.error.data.error);
      } else {
        setUserData({
          password: "",
          confirmPassword: "",
        });
        successNotify("Password Changed Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      errorNotify("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="my-container">
      <form onSubmit={handleLogin} className="register-as-user">
        <h1>Password</h1>
        <div>
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
          {loading ? <Loader /> : "CHANGE"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
