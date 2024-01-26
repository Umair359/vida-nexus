import React from "react";
import Slider from "react-slick";
import ServiceCard from "../../Components/ServiceCard/ServiceCard.jsx";

const Service = ({ serviceSchedule }) => {
  console.log(serviceSchedule);
  const serviceSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      {serviceSchedule?.map((item) => {
        return <ServiceCard item={item} />;
      })}
    </Slider>
  );
};

export default Service;
