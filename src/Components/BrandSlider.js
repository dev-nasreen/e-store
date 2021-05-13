import React from 'react';
import Slider from "react-slick";



const BrandSlider = () => {
  const settings2 = {
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return(
    <Slider {...settings2}>
    <div className="brand-item"><img src="assets/img/brand-1.png" alt="" /></div>
    <div className="brand-item"><img src="assets/img/brand-2.png" alt="" /></div>
    <div className="brand-item"><img src="assets/img/brand-3.png" alt="" /></div>
    <div className="brand-item"><img src="assets/img/brand-4.png" alt="" /></div>
    <div className="brand-item"><img src="assets/img/brand-5.png" alt="" /></div>
    <div className="brand-item"><img src="assets/img/brand-6.png" alt="" /></div>
</Slider>
  );
};

export default BrandSlider;
