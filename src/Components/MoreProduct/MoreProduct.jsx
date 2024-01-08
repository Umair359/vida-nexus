import React, { useState } from "react";
import AdminInput from "../AdminInput/AdminInput";
import AdminInputDes from "../AdminInputDes/AdminInputDes";
import MultipleInputFiles from "../MultipleInputFiles/MultipleInputFiles";
import { MdDelete } from "react-icons/md";
import "./MoreProduct.css";

const MoreProduct = ({ id }) => {
  const [showProduct, setShowProduct] = useState(true);
  const handleDeleteProduct = () => {
    setShowProduct(false);
  };
  return (
    <>
      {showProduct ? (
        <div className="more-product">
          <div>
            <h2>Product</h2>
            <button onClick={handleDeleteProduct}>
              <MdDelete />
              <p>Remove</p>
            </button>
          </div>
          <AdminInput text={"Product Name"} />
          <AdminInputDes text="Product Description" />
          <AdminInput text="Product Price" />
          <AdminInput text="Product Quality" />
          <MultipleInputFiles id={id} text="Product Images" />
        </div>
      ) : null}
    </>
  );
};

export default MoreProduct;
