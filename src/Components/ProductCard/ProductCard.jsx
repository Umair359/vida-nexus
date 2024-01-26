import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImagebaseUrl } from "../../Helper/constant";
import "./ProductCard.css";

const ProductCard = ({ isDashboard = false, item = null }) => {
  const navigate = useNavigate();
  return (
    <div className="product">
      <img
        src={`${ImagebaseUrl}products/${item?.productImages[0]?.filename}`}
        alt={item?.productImages[0]?.filename}
      />
      <div>
        <p>
          Price:<span></span>
        </p>
        <div>
          <p>{`$ ${item?.price}.00`}</p>
          <p>{`$ ${item?.price + Math.floor(item?.price / 3)}.00`}</p>
        </div>
      </div>
      <h3>{item?.name}</h3>
      <p>{item?.description}</p>
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
