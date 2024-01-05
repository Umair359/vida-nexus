import React from "react";
import "./PractitionerDetail.css";
import Service from "../../Components/Service/Service.jsx";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import { Link } from "react-router-dom";
const PractitionerDetail = () => {
  return (
    <div className="practitioner-detail-container">
      <div>
        <h1>Practitioner Detail</h1>
        <button className="btn-primary">
          <img src="/Images/storeIcon.png" alt="storeIcon.png" />
          <Link to={"/practitioner/123456789/store"}>VISIT STORE</Link>
        </button>
      </div>
      <div className="practitioner-detail-header">
        <div>
          <img src="/Images/practitioner1.png" alt="practitioner1.png" />
        </div>
        <div>
          <h3>Name Here</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry printing and typesetting industry.Lorem Ipsum is simply
            dummy text of the printing and typesetting industryprinting and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className="practitioner-detail-service">
        <h1>Service</h1>
        <Service />
      </div>
      <div className="practitioner-detail-service">
        <h1>Testimonial</h1>
        <Testimonial />
      </div>
    </div>
  );
};

export default PractitionerDetail;
