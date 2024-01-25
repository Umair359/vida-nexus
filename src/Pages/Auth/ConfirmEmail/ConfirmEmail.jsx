import React from "react";
import {
  useCreatePractitionerMutation,
  useGetConfirmEmailQuery,
} from "../../../api/appApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmEmail.css";
import Loader from "../../../Helper/Loader";
import { useEffect } from "react";
import { errorNotify } from "../../../Helper/Toast";
const ConfirmEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createPractitioner] = useCreatePractitionerMutation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const { data, isLoading } = useGetConfirmEmailQuery(`?token=${token}`);

  useEffect(() => {
    const handleCreatePractitioner = async () => {
      try {
        const res = await createPractitioner();
        console.log(res);
      } catch (error) {
        errorNotify("Something went wrong");
      }
    };
    if (!isLoading && data?.success) {
      setTimeout(() => {
        if (data?.user?.role === "practitioner") {
          navigate("/admin");
          handleCreatePractitioner();
        } else {
          navigate("/");
        }
      }, 5000);
    }
  }, [data, isLoading, navigate, createPractitioner]);
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
