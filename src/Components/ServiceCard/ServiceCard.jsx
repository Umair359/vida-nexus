import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceCard.css";
const ServiceCard = ({ isDashboard = false }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src="/Images/service1.png" alt="service1" />
      <div className="card-text">
        <h3>Service 01</h3>
        <p>
          Lorem Ipsum is simply text of the pricing and typesetting industry
        </p>
        {isDashboard ? (
          <div className="edit-delete-btn">
            <button onClick={() => navigate("edit")} className="edit-btn">
              <img src="/Images/editIcon.png" alt="editIcon.png" />
              <p>EDIT</p>
            </button>
            <button className="delete-btn">
              <img src="/Images/deleteIcon.png" alt="deleteIcon.png" />
              <p>DELETE</p>
            </button>
          </div>
        ) : (
          <Link to="">Get Stated</Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
