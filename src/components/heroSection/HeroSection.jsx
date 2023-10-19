import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/1.png";
import slider2 from "../../assets/2.png";
import slider3 from "../../assets/3.png";
import slider4 from "../../assets/4.png";
const HeroSection = () => {
  const sliderSettings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="mt-3">
      <Slider {...sliderSettings}>
        <div>
          <img src={slider1} alt="Image 1" />
        </div>
        <div>
          <img src={slider2} alt="Image 1" />
        </div>
        <div>
          <img src={slider3} alt="Image 1" />
        </div>
        <div>
          <img src={slider4} alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
