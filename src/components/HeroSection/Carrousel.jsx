import React from "react";

// @packages
import Slider from "react-slick";

// @Url's
import { server } from "../../urls/urls";

const SimpleSlider = ({ image }) => {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 2000,

  };

  return (
    <div>
      <Slider {...settings}>
        {image.map((img, i) => (          
            <img key={i} src={`${server}${img}`} className="w-full" alt="img" />       
        ))} 
      </Slider>
    </div>
  );
};

export default SimpleSlider;
