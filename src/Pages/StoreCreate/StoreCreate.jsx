import React, { useState } from "react";
import AdminInput from "../../Components/AdminInput/AdminInput";
import AdminInputDes from "../../Components/AdminInputDes/AdminInputDes";
import ColorSelect from "../../Components/ColorSelect/ColorSelect";
import AdminInputFile from "../../Components/AdminInputFile/AdminInputFile";
import MultipleInputFiles from "../../Components/MultipleInputFiles/MultipleInputFiles.jsx";
import MoreProduct from "../../Components/MoreProduct/MoreProduct.jsx";
import "./StoreCreate.css";
const StoreCreate = () => {
  const [noOfMoreProdut, setNoOfMoreProdut] = useState(0);
  let moreProduct = [];
  for (let i = 0; i < noOfMoreProdut; i++) {
    moreProduct.push(<MoreProduct id={i} />);
  }
  const handleAddMoreProduct = () => {
    let newValue = noOfMoreProdut + 1;
    setNoOfMoreProdut(newValue);
  };
  return (
    <div className="my-container">
      <form className="store-create">
        <h1>Store Creation</h1>
        <AdminInput type="text" id="store-name" text="Store Name" />
        <AdminInputDes text="Store Description" />
        <AdminInputFile text="Upload Logo" />
        <ColorSelect />

        <div className="store-create-product">
          <h2>Product</h2>
          <AdminInput text={"Product Name"} />
          <AdminInputDes text="Product Description" />
          <AdminInput text="Product Price" />
          <AdminInput text="Product Quality" />
          <MultipleInputFiles text="Product Images" />
        </div>

        {moreProduct.map((item) => item)}
        <div onClick={handleAddMoreProduct} className="add-new-product">
          <h2>Add More Products</h2>
          <img
            src="/Images/Icon awesome-plus-circle.png"
            alt="Icon awesome-plus-circle.png"
          />
        </div>
        <div className="btn-container">
          <button className="btn-primary">UPDATE</button>
          <button className="btn-primary">CLEAR</button>
        </div>
      </form>
    </div>
  );
};

export default StoreCreate;
