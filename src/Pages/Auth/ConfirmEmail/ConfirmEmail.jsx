import React from "react";
import { useGetConfirmEmailQuery } from "../../../api/appApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmEmail.css";
import Loader from "../../../Helper/Loader";
import { useEffect } from "react";
const ConfirmEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const { data, isLoading } = useGetConfirmEmailQuery(`?token=${token}`);

  useEffect(() => {
    if (!isLoading && data.success) {
      setTimeout(() => {
        if (data?.user?.role === "practitioner") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 5000);
    }
  }, [data, isLoading, navigate]);
  console.log(data, isLoading);

  return (
    <div className="confirm-mail">
      {isLoading ? (
        <div>
          <Loader />
          <p>Verifying your email</p>
        </div>
      ) : data?.success ? (
        <div>
          <h1 id="success">Email Verified</h1>
          <p>
            You will be redirecting to{" "}
            {data?.user?.role === "practitioner"
              ? "dashboard page"
              : "home page"}
          </p>
        </div>
      ) : (
        <div>
          <h1 id="delete">Couldn't Verify</h1>
          <p>Please try again or contact support</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmEmail;
