import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import { useLoginUserMutation } from "../../../api/appApi";
import { errorNotify, successNotify } from "../../../Helper/Toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Helper/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        email: userData.email,
        password: userData.password,
      };
      const res = await loginUser(formData);
      console.log(res);
      if (res.error) {
        errorNotify("Something went wrong");
      } else {
        successNotify("You are Login Successfully");
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      errorNotify("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="my-container">
      <form onSubmit={handleLogin} className="register-as-user">
        <h1>Login</h1>
        <div>
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
        </div>
        <button className="btn-primary">
          {loading ? <Loader /> : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
