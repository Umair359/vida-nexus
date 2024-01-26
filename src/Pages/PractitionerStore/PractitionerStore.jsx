import React from "react";
import "./PractitionerStore.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import { useGetPractitionerProductQuery } from "../../api/appApi.js";
import { useLocation } from "react-router-dom";
import Loader from "../../Helper/Loader.js";
const PractitionerStore = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const idMatch = pathname.match(/\/practitioner\/([^/]+)\/store/);
  const id = idMatch ? idMatch[1] : null;
  const { data, isLoading } = useGetPractitionerProductQuery(id);
  console.log(data, isLoading, "useGetPractitionerProductQuery");
  return (
    <div className="practitioner-detail-container">
      <div className="practitioner-detail-header">
        <div>
          <img src="/Images/companyLogo.png" alt="companyLogo.png" />
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
      <div className="product-container">
        <h1>Products</h1>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Loader color="orange" size="60px" />
          </div>
        ) : (
          <div className="products">
            {data.data.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PractitionerStore;
