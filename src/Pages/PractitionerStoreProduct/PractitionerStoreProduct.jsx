import React, { useRef } from "react";
import "./PractitionerStoreProduct.css";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GrFavorite } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";

const PractitionerStoreProduct = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
  };
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className="product_main">
      <div className="product-detail">
        <div className="product-detail-header">
          <div className="product-detail-header-images">
            <img src="/Images/productBanner.png" alt="productBanner.png" />
            <div className="product-detail-header-images-slider">
              <Slider ref={sliderRef} {...settings}>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product2.png" alt="product2.png" />
                </div>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product3.png" alt="product3.png" />
                </div>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product4.png" alt="product4.png" />
                </div>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product2.png" alt="product2.png" />
                </div>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product3.png" alt="product3.png" />
                </div>
                <div className="product-detail-header-images-slide">
                  <img src="/Images/product4.png" alt="product4.png" />
                </div>
              </Slider>
              <div className="product-detail-header-images-slide-btn">
                <button
                  className="product-detail-header-images-slide-btn-next"
                  onClick={goToPrevious}
                >
                  <GrFormPrevious />
                </button>
                <button
                  className="product-detail-header-images-slide-btn-prev"
                  onClick={goToNext}
                >
                  <GrFormNext />
                </button>
              </div>
            </div>
          </div>
          <div className="product-detail-header-text">
            <div className="product-detail-header-text-section1">
              <img src="/Images/starIcon2.png" alt="starIcon2" />
              <img src="/Images/starIcon2.png" alt="starIcon2" />
              <img src="/Images/starIcon2.png" alt="starIcon2" />
              <img src="/Images/starIcon2.png" alt="starIcon2" />
              <img src="/Images/starIcon2.png" alt="starIcon2" />
              <p>1 Review</p>
            </div>
            <h2>Product Name Here</h2>
            <div className="product-detail-header-text-section2">
              <p>Code:</p>
              <p>ABC 123</p>
            </div>
            <div className="product-detail-header-text-section3">
              <p>$12.00</p>
              <p>3 In Stock</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
              vel in risus sed. Laoreet volutpat vitae nisl commodo condimentum
              sit blandit nisl.
            </p>
            <div className="product-detail-header-text-section4">
              <p>QTY</p>
              <div>
                <button>
                  <GrFormPrevious />
                </button>
                <p>03</p>
                <button>
                  <GrFormNext />
                </button>
              </div>
              <button className="btn-primary">ADD TO CART</button>
            </div>
            <div className="product-detail-header-text-section5">
              <h3>Payment Method</h3>
              <div>
                <img src="/Images/payoption1.png" alt="payoption1" />
                <img src="/Images/payoption2.png" alt="payoption2" />
                <img src="/Images/payoption3.png" alt="payoption3" />
                <img src="/Images/payoption4.png" alt="payoption4" />
                <img src="/Images/payoption5.png" alt="payoption5" />
              </div>
            </div>
            <div className="product-detail-header-text-section6">
              <div>
                <GrFavorite />
                <p>Add To Wish List</p>
              </div>
              <div>
                <BiTransfer />
                <p>Add To Compare</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-detail-des">
          <h2>Description</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s withthe release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PractitionerStoreProduct;
