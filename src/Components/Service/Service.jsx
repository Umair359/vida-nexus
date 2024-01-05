import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Service = () => {
  const serviceSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...serviceSliderSettings}>
      <div className="card">
        <img src="/Images/service1.png" alt="service1" />
        <div className="card-text">
          <h3>Service 01</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service1.png" alt="service1" />
        <div className="card-text">
          <h3>Service 01</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service2.png" alt="service2" />
        <div className="card-text">
          <h3>Service 02</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service3.png" alt="service3" />
        <div className="card-text">
          <h3>Service 03</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
      <div className="card">
        <img src="/Images/service4.png" alt="service4" />
        <div className="card-text">
          <h3>Service 04</h3>
          <p>
            Lorem Ipsum is simply text of the pricing and typesetting industry
          </p>
          <Link to="">Get Stated</Link>
        </div>
      </div>
    </Slider>
  );
};

export default Service;
