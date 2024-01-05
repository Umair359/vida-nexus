import React from "react";
import { useNavigate } from "react-router-dom";
const PractionerCard = () => {
  const navigate = useNavigate();
  return (
    <div className="practionser">
      <div className="practionser-heading">
        <img src="/Images/practitioner1.png" alt="practitioner1" />
        <div>
          <h3>Name Here</h3>
          <div>
            <img src="/Images/startIcon.png" alt="starIcon" />
            <img src="/Images/startIcon.png" alt="starIcon" />
            <img src="/Images/startIcon.png" alt="starIcon" />
            <img src="/Images/startIcon.png" alt="starIcon" />
            <img src="/Images/startIcon.png" alt="starIcon" />
          </div>
        </div>
      </div>
      <div className="practionser-description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry printing and typesetting industry.
        </p>
        <button
          onClick={() => navigate("/practitioner/123456789")}
          className="btn-primary"
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default PractionerCard;
