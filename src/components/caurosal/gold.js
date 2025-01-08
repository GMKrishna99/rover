// src/components/BannerCarousel.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner_1 from "../../assets/Gold_Banner_Imges/gold-b1.jpg";
import banner_2 from "../../assets/Gold_Banner_Imges/gold-b2.jpg";
import banner_3 from "../../assets/Gold_Banner_Imges/gold-b3.jpg";

const BannerCarousel = () => {
  return (
    <div className="mt-24 ">
      <Carousel showThumbs={false} autoPlay infiniteLoop className="h-[600px]">
        <div className="h-[600px]">
          <img src={banner_1} alt="Banner 1" />
        </div>
        <div className="h-[600px]">
          <img src={banner_2} alt="Banner 2" />
        </div>
        <div className="h-[600px]">
          <img src={banner_3} alt="Banner 3" />
        </div>
        {/* <div>
  <img
    src={banner_1}
    alt="Banner 1"
    className="mx-auto object-contain"
  />
</div>
<div>
  <img
    src={banner_2}
    alt="Banner 2"
    className="mx-auto object-contain"
  />
</div>
<div>
  <img
    src={banner_3}
    alt="Banner 3"
    className="mx-auto object-contain"
  />
</div> */}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
