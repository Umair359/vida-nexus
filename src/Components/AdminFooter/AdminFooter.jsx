import React from "react";
import { Link } from "react-router-dom";

const AdminFooter = () => {
  return (
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
  );
};

export default AdminFooter;
