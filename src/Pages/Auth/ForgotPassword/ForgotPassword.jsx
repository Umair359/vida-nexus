import React, { useState } from "react";
import AdminInput from "../../../Components/AdminInput/AdminInput";
import Loader from "../../../Helper/Loader";
import { useFotgotPasswordMutation } from "../../../api/appApi";
import { errorNotify } from "../../../Helper/Toast";
import EmailSendModal from "../../../Pages/EmailSendModal/EmailSendModal.jsx";

const ForgotPassword = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [forgotPassword] = useFotgotPasswordMutation();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (!userData.email) {
      errorNotify("Email feild is missing");
    } else {
      try {
        const formData = {
          email: userData.email,
          password: userData.password,
        };
        const res = await forgotPassword(formData);
        console.log(res);
        if (res.error) {
          errorNotify(res.error.data.error);
        } else {
          document.getElementById("my_modal_3").showModal();
          setUserData({
            email: "",
          });
        }
      } catch (error) {
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
      <EmailSendModal />
      <form onSubmit={handleForgotPassword} className="register-as-user">
        <h1>Forgot Password</h1>
        <p>Enter your email and we'll send you a link to reset your password</p>
        <div>
          <AdminInput
            handleInputChange={handleInputChange}
            type="text"
            id="email"
            text="Email"
            display={userData.email}
          />
        </div>
        <button className="btn-primary">{loading ? <Loader /> : "Send"}</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
