import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-lg">
        <img
          onClick={() => navigate("/")}
          src={"/Images/Logo.png"}
          alt="Logo"
        />
        <nav className="header-lg-links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT US</Link>
          <Link to={"/practitioner"}>PRACTITIONER</Link>
          <Link to={"/pricing"}>PRICING</Link>
          <Link to={"/contact"}>CONTACT US</Link>
        </nav>
        <div>
          <div className="header-login-container">
            <img src="/Images/Login.png" alt="signInIcon" />

            <p>Already have an Account?</p>
            <Link to={"/login"}>Sign in</Link>
          </div>
          <div className="btn-container">
            <button
              onClick={() => navigate("/register-as-practitioner")}
              className="btn-primary"
            >
              REGISTER AS PRACTITIONER
            </button>
            <button
              onClick={() => navigate("/register-as-buyer")}
              className="btn-secondary"
            >
              REGISTER AS BUYER
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="dropdown-btn"
                onClick={() => setIsDrawerOpen(true)}
              >
                <IoMenu />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-8 menu p-2 shadow bg-base-100 rounded-box w-48"
              >
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"/about"}>ABOUT US</Link>
                </li>
                <li>
                  <Link to={"/practitioner"}>PRACTITIONER</Link>
                </li>
                <li>
                  <Link to={"/pricing"}>PRICING</Link>
                </li>
                <li>
                  <Link to={"/contact"}>CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer header-drawer">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn drawer-button"
              onClick={() => setIsDrawerOpen(true)}
            >
              <IoMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li onClick={() => setIsDrawerOpen(false)}>
                <Link to={"/"}>HOME</Link>
              </li>
              <li onClick={() => setIsDrawerOpen(false)}>
                <Link to={"/about"}>ABOUT US</Link>
              </li>
              <li onClick={() => setIsDrawerOpen(false)}>
                <Link to={"/practitioner"}>PRACTITIONER</Link>
              </li>
              <li onClick={() => setIsDrawerOpen(false)}>
                <Link to={"/pricing"}>PRICING</Link>
              </li>
              <li onClick={() => setIsDrawerOpen(false)}>
                <Link to={"/contact"}>CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
