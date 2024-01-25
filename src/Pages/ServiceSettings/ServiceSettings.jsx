import React from "react";

import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import AddNewService from "../../Components/AddNewService/AddNewService.jsx";
import "./ServiceSettings.css";
const ServiceSettings = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile admin-product-setting">
        <div>
          <h3>Edit Current Services</h3>
          <h3>-</h3>
        </div>
        <div className="admin-service-card">
          <ServiceCard isDashboard={true} />
          <ServiceCard isDashboard={true} />
          <ServiceCard isDashboard={true} />
          <ServiceCard isDashboard={true} />
        </div>
        <div>
          <button className="admin-btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                id="Icon_awesome-save"
                data-name="Icon awesome-save"
                d="M19.372,6.622,15.628,2.878a2.143,2.143,0,0,0-1.515-.628H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V8.138a2.143,2.143,0,0,0-.628-1.515ZM10,19.393a2.857,2.857,0,1,1,2.857-2.857A2.857,2.857,0,0,1,10,19.393ZM14.286,5.8v4.487a.536.536,0,0,1-.536.536H3.393a.536.536,0,0,1-.536-.536V5.643a.536.536,0,0,1,.536-.536h10.2a.536.536,0,0,1,.379.157l.155.155a.536.536,0,0,1,.157.379Z"
                transform="translate(0 -2.25)"
                fill="#fff"
              />
            </svg>
            SAVE CHANGES
          </button>
        </div>
      </div>
      <AddNewService />
    </div>
  );
};

export default ServiceSettings;
/*

<div className="card">
        <img src="/Images/service1.png" alt="service1" />
        <div className="card-text">
          <h3>Service 01</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service1.png" alt="service1" />
        <div className="card-text">
          <h3>Service 01</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service2.png" alt="service2" />
        <div className="card-text">
          <h3>Service 02</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service3.png" alt="service3" />
        <div className="card-text">
          <h3>Service 03</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service4.png" alt="service4" />
        <div className="card-text">
          <h3>Service 04</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
 */
