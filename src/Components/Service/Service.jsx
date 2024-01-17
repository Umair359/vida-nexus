import React from "react";
import Slider from "react-slick";
import ServiceCard from "../../Components/ServiceCard/ServiceCard.jsx";

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
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Slider>
  );
};

export default Service;
