import React, { useState } from "react";
import AdminInput from "../AdminInput/AdminInput";
import AdminInputDes from "../AdminInputDes/AdminInputDes";
import Loader from "../../Helper/Loader";
import { errorNotify, successNotify } from "../../Helper/Toast";
import { useCreateProductMutation } from "../../api/appApi";
import TimeSelect from "../TimeSelect/TimeSelect";
import "./AddNewProduct.css";
import MultipleInputFiles from "../MultipleInputFiles/MultipleInputFiles";
const AddNewProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    productPrice: "",
    affiliateLink: "",
    stock: "",
    category: "",
  });
  const [createProduct] = useCreateProductMutation();
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (inputId, inputValue) => {
    setProductData((prevproductData) => ({
      ...prevproductData,
      [inputId]: inputValue,
    }));
  };

  const multipleImageHandler = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const imagesArray = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = () => {
          imagesArray.push(reader.result);

          if (imagesArray.length === files.length) {
            setImagePreview(imagesArray);
            setImage(files);
          }
        };

        reader.readAsDataURL(files[i]);
      }
    }
  };
  const handleAddNewProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(image);
    try {
      const formData = new FormData();
      if (productData.productName) {
        formData.append("name", productData.productName);
      }
      if (productData.description) {
        formData.append("description", productData.description);
      }
      if (productData.productPrice) {
        formData.append("price", productData.productPrice);
      }
      if (image.length > 0) {
        // Append each file in the array
        for (let i = 0; i < image.length; i++) {
          formData.append("productImages", image[i]);
        }
      }
      if (productData.category) {
        formData.append("category", productData.category);
      }
      if (productData.stock) {
        formData.append("stock", productData.stock);
      }
      if (productData.affiliateLink) {
        formData.append("affiliateLink", productData.affiliateLink);
      }

      console.log(formData);
      const res = await createProduct(formData);
      if (res.error) {
        errorNotify(res.error.data.error);
      } else {
        successNotify("Product Added");
        setProductData({
          productName: "",
          description: "",
          productPrice: "",
        });
      }
    } catch (error) {
      console.log(error);
      errorNotify("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="admin-profile">
      <div>
        <h3>Add New Products</h3>
        <h3>-</h3>
      </div>
      <AdminInput
        handleInputChange={handleInputChange}
        type={"text"}
        id={"productName"}
        text={"Product Name"}
        display={productData.productName}
      />
      <div className="add-new-Product-category">
        <h3>Category</h3>
        <TimeSelect
          handleInputChange={handleInputChange}
          id="category"
          text="Select Category"
          isProduct={true}
        />
      </div>

      <AdminInputDes
        handleInputChange={handleInputChange}
        text={"Product Description"}
        id={"description"}
        display={productData.description}
      />
      <MultipleInputFiles
        handleInputChange={multipleImageHandler}
        text={"Change Picture"}
        image={imagePreview}
      />
      <AdminInput
        handleInputChange={handleInputChange}
        text={"Product Price"}
        id={"productPrice"}
        type={"number"}
        display={productData.productPrice}
      />
      <AdminInput
        handleInputChange={handleInputChange}
        type={"number"}
        id={"stock"}
        text={"Stock"}
        display={productData.stock}
      />
      <AdminInput
        handleInputChange={handleInputChange}
        type={"text"}
        id={"affiliateLink"}
        text={"Affiliate Link (optional)"}
        display={productData.affiliateLink}
      />
      <div className="product-setting-btn">
        <button onClick={handleAddNewProduct}>
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
          <p>{loading ? <Loader /> : "SAVE CHANGES"}</p>
        </button>
      </div>
    </div>
  );
};

export default AddNewProduct;
