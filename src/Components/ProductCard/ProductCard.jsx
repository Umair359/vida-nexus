import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
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
        <button className="btn-primary">ADD TO CART</button>
        <button className="btn-secondary">
          <Link to={"/practitioner/123456789/product/1234596789"}>
            VIEW DETAIL
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
