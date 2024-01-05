import React from "react";
import Slider from "react-slick";
import Service from "../../Components/Service/Service.jsx";
import "./Home.css";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const practitionerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Slider {...settings}>
        <div>
          <img
            className="home-banner-img"
            src="/Images/Home-Banner.png"
            alt="home-banner"
          />
        </div>
        <div>
          <img
            className="home-banner-img"
            src="/Images/Home-Banner.png"
            alt="home-banner"
          />
        </div>
        <div>
          <img
            className="home-banner-img"
            src="/Images/Home-Banner.png"
            alt="home-banner"
          />
        </div>
      </Slider>
      <div className="home-section">
        <div className="home-section-heading">
          <img src="/Images/Section-Logo.png" alt="section-logo" />
          <h1>Service We Offers</h1>
        </div>
        <div className="home-service">
          <Service />
        </div>
      </div>
      <div className="practitioner-container">
        <div className="home-section-heading">
          <img src="/Images/Section-Logo.png" alt="section-logo" />
          <h1>Practitioners</h1>
        </div>
        <div className="slider-container">
          <Slider {...practitionerSliderSettings}>
            <div className="practitioner">
              <img src="/Images/practitioner1.png" alt="practitioner1.png" />
              <div className="practitioner-text">
                <h3>Anna Gates</h3>
                <p>Lorem Ipsum</p>
              </div>
              <div className="practitioner-des">
                <p>
                  Lorem Ipsum is simple dummyy text of the printing sand
                  typesetting industry
                </p>
                <div>
                  <img src="/Images/Group 3613.png" alt="facebookIcon.png" />
                  <img src="/Images/Group 3615.png" alt="instagramIcon.png" />
                  <img src="/Images/Group 3616.png" alt="linkedInIcon.png" />
                </div>
              </div>
            </div>
            <div className="practitioner">
              <img src="/Images/practitioner1.png" alt="practitioner1.png" />
              <div className="practitioner-text">
                <h3>Anna Gates</h3>
                <p>Lorem Ipsum</p>
              </div>
              <div className="practitioner-des">
                <p>
                  Lorem Ipsum is simple dummyy text of the printing sand
                  typesetting industry
                </p>
                <div>
                  <img src="/Images/Group 3613.png" alt="facebookIcon.png" />
                  <img src="/Images/Group 3615.png" alt="instagramIcon.png" />
                  <img src="/Images/Group 3616.png" alt="linkedInIcon.png" />
                </div>
              </div>
            </div>
            <div className="practitioner">
              <img src="/Images/practitioner1.png" alt="practitioner1.png" />
              <div className="practitioner-text">
                <h3>Anna Gates</h3>
                <p>Lorem Ipsum</p>
              </div>
              <div className="practitioner-des">
                <p>
                  Lorem Ipsum is simple dummyy text of the printing sand
                  typesetting industry
                </p>
                <div>
                  <img src="/Images/Group 3613.png" alt="facebookIcon.png" />
                  <img src="/Images/Group 3615.png" alt="instagramIcon.png" />
                  <img src="/Images/Group 3616.png" alt="linkedInIcon.png" />
                </div>
              </div>
            </div>
            <div className="practitioner">
              <img src="/Images/practitioner1.png" alt="practitioner1.png" />
              <div className="practitioner-text">
                <h3>Anna Gates</h3>
                <p>Lorem Ipsum</p>
              </div>
              <div className="practitioner-des">
                <p>
                  Lorem Ipsum is simple dummyy text of the printing sand
                  typesetting industry
                </p>
                <div>
                  <img src="/Images/Group 3613.png" alt="facebookIcon.png" />
                  <img src="/Images/Group 3615.png" alt="instagramIcon.png" />
                  <img src="/Images/Group 3616.png" alt="linkedInIcon.png" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
