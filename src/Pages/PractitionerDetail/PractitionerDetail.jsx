import React from "react";
import "./PractitionerDetail.css";
import Service from "../../Components/Service/Service.jsx";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import { Link, useLocation } from "react-router-dom";
import { useGetPractitionerDetailsQuery } from "../../api/appApi.js";
import Loader from "../../Helper/Loader.js";
import { ImagebaseUrl } from "../../Helper/constant.js";
const PractitionerDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const { isLoading, data } = useGetPractitionerDetailsQuery(id);
  console.log({ isLoading, data });

  return (
    <div className="practitioner-detail-container">
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader color="orange" size="60px" />
        </div>
      ) : (
        <>
          <div>
            <h1>Practitioner Detail</h1>
            <button className="btn-primary">
              <img src="/Images/storeIcon.png" alt="storeIcon.png" />
              <Link to={`/practitioner/${data?.data?.practitioner?._id}/store`}>
                VISIT STORE
              </Link>
            </button>
          </div>
          <div className="practitioner-detail-header">
            <div>
              <img
                src={`${ImagebaseUrl}users/${data?.data?.practitioner?.userId?.userImages[0].filename}`}
                alt={data?.data?.practitioner?.userId?.userImages[0].filename}
              />
            </div>
            <div>
              <h3>{data?.data?.practitioner?.userId?.name}</h3>
              <h5>{data?.data?.practitioner?.category?.name}</h5>
              <p>{data?.data?.practitioner?.description}</p>
            </div>
          </div>
          <div className="practitioner-detail-service">
            <h1>Service</h1>
            <Service
              serviceSchedule={data?.data?.practitioner?.serviceSchedule}
            />
          </div>
          <div className="practitioner-detail-service">
            <h1>Testimonial</h1>
            <Testimonial reviews={data?.data?.reviews} />
          </div>
        </>
      )}
    </div>
  );
};

export default PractitionerDetail;
