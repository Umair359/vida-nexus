import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ isDashboard = false }) => {
  const navigate = useNavigate();
  return (
    <div className="product">
      <img src="/Images/product1.png" alt="product1.png" />
      <div>
        <p>
          Price:<span></span>
        </p>
        <div>
          <p>$ 12.00</p>
          <p>$ 13.00</p>
        </div>
      </div>
      <h3>Product name</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div>
        <button onClick={() => navigate("edit")} className="btn-primary">
          {isDashboard ? "EDIT" : "ADD TO CART"}
        </button>
        <button
          style={
            isDashboard ? { color: "white", backgroundColor: "#FA2108" } : {}
          }
          className="btn-secondary"
        >
          <Link to={"/practitioner/123456789/product/1234596789"}>
            {isDashboard ? "DELETE" : "VIEW DETAIL"}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
