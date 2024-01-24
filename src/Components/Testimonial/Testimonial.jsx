import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { ImagebaseUrl } from "../../Helper/constant";

const Testimonial = ({ reviews }) => {
  console.log(reviews);
  const sliderRef = useRef(null);
  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          dots: true,
        },
      },
    ],
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
    <div className="testimonial-slider">
      <Slider ref={sliderRef} {...testimonialSliderSettings}>
        {reviews.map((item, index) => {
          return (
            <div className="testimonial-card">
              <img src="/Images/testimonial-bg.png" alt="testimonial-bg.png" />
              <p>
                {item.review}
                {index}
              </p>
              <div>
                <img
                  src={`${ImagebaseUrl}/users/${item?.customer?.userId?.userImages[0]?.filename}`}
                  alt={`${ImagebaseUrl}/users/${item?.customer?.userId?.userImages[0]?.filename}`}
                />

                <h4>
                  {item?.customer?.userId?.name}
                  {index}
                </h4>
                <p>Director</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="testimonial-btn">
        <button className="tesimonial-prev-btn" onClick={goToPrevious}>
          <GrLinkPrevious />
        </button>
        <button className="tesimonial-next-btn" onClick={goToNext}>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

// <div className="testimonial-card">
//   <img src="/Images/testimonial-bg.png" alt="testimonial-bg.png" />
//   <p>
//     Lorem Ipsum is simply dummy text of the printing and typesetting
//     industry. Lorem Ipsum has been the industry's standard dummy text
//     ever since the 1500s, when an unknown printer took a galley of type
//     and scrambled it to make a type specimen book.{" "}
//   </p>
//   <div>
//     <img src="/Images/testimonail1.png" alt="testimonail1.png" />
//     <h4>John Anderson</h4>
//     <p>Director</p>
//   </div>
// </div>
// <div className="testimonial-card">
//   <img src="/Images/testimonial-bg.png" alt="testimonial-bg.png" />
//   <p>
//     Lorem Ipsum is simply dummy text of the printing and typesetting
//     industry. Lorem Ipsum has been the industry's standard dummy text
//     ever since the 1500s, when an unknown printer took a galley of type
//     and scrambled it to make a type specimen book.{" "}
//   </p>
//   <div>
//     <img src="/Images/testimonail1.png" alt="testimonail1.png" />
//     <h4>John Anderson</h4>
//     <p>Director</p>
//   </div>
// </div>
