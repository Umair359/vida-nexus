import React from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { ImagebaseUrl } from "../../Helper/constant";
const PractionerCard = ({ image, name, description, id, rating }) => {
  const navigate = useNavigate();
  return (
    <div key={id} className="practionser">
      <div className="practionser-heading">
        <img src={`${ImagebaseUrl}/users/${image}`} alt={image} />
        <div>
          <h3>{name}</h3>
          <div>
            <IoStar fill={rating >= 1 ? "orange" : "#aaaaaa"} />
            <IoStar fill={rating >= 2 ? "orange" : "#aaaaaa"} />
            <IoStar fill={rating >= 3 ? "orange" : "#aaaaaa"} />
            <IoStar fill={rating >= 4 ? "orange" : "#aaaaaa"} />
            <IoStar fill={rating >= 5 ? "orange" : "#aaaaaa"} />
          </div>
        </div>
      </div>
      <div className="practionser-description">
        <p>{description}</p>
        <button
          onClick={() => navigate(`/practitioner/${id}`)}
          className="btn-primary"
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default PractionerCard;
