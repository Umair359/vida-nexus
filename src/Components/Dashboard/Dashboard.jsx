import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader/AdminHeader.jsx";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar.jsx";
import AdminFooter from "../../Components/AdminFooter/AdminFooter.jsx";
import "./Dashboard.css";
const Dashboard = () => {
  // let token = localStorage.getItem("token");
  let token = true;
  return (
    <>
      {token ? (
        <div className="dashboard-container">
          <img src="/Images/Header-Bg.png" alt="Header-Bg.png" />
          <div className="dashboard">
            <AdminSideBar />
            <div>
              <AdminHeader />
              <Outlet />
            </div>
          </div>
          <AdminFooter />
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Dashboard;
