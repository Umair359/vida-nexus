import React from "react";
import "./PractitionerStore.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
const PractitionerStore = () => {
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
        <div className="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default PractitionerStore;
