import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-section1">
          <img src="/Images/Logo.png" alt="Logo.png" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="footer-section2">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/practitioner"}>Practitioner</Link>
            </li>
            <li>
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <h4>Information</h4>
          <ul>
            <li>
              <img src="/Images/contactIcon.png" alt="contactIcon" />
              <p>00000-000-00</p>
            </li>
            <li>
              <img src="/Images/messageIcon.png" alt="messageIcon" />
              <p>Contact @gmail.com</p>
            </li>
            <li>
              <img src="/Images/locationIcon.png" alt="locationIcon" />
              <p>53 Washington Square S, New York, NY 10012, USA</p>
            </li>
          </ul>
        </div>
        <div className="footer-section4">
          <h4>Help Center</h4>
          <ul>
            <li>
              <Link to={"/support"}>Support</Link>
            </li>
            <li>
              <Link to={"/register"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="end-line">
        <p>© copyright 2023. All rights reserved.</p>
        <div>
          <Link style={{ border: "none" }} to={"/"}>
            Legal Disclaimer
          </Link>
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/"}>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
