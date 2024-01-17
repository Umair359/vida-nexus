import React from "react";
import "./ServiceHistoryDetail.css";
import ServiceInfo from "../../Components/ServiceInfo/ServiceInfo.jsx";
const ServiceHistoryDetail = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile admin-service-detail">
        <div>
          <h3>Service Detail</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture">
          <div className="admin-picture-container">
            <img src="/Images/service1.png" alt="service1.png.png" />
          </div>
        </div>
        <ServiceInfo heading="Service Name" text="Service name 01" />
        <ServiceInfo
          heading="Service Description"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
        />
        <ServiceInfo heading="Practitioner Name" text="Practitioner name 01" />
        <ServiceInfo
          heading="Practitioner Detail"
          text="Practitioner Detail here"
        />
        <ServiceInfo heading="Service Price" text="$ 120.00" />
        <ServiceInfo
          heading="Service Timings"
          text="Tuesday 1:00 PM - 3:00 PM"
        />
        <button className="btn-primary">SERVICE INVOICE DETAIL</button>
      </div>
    </div>
  );
};

export default ServiceHistoryDetail;
