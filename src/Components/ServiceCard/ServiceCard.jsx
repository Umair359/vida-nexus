import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceCard.css";
import { ImagebaseUrl } from "../../Helper/constant";
const ServiceCard = ({ isDashboard = false, item = null }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div className="card">
      <img
        src={`${ImagebaseUrl}services/${item?.service?.serviceImages[0].filename}`}
        alt={item?.service?.serviceImages[0].filename}
      />
      <div className="card-text">
        <h3>{item?.service?.name}</h3>
        <p>{item?.service?.description}</p>
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
