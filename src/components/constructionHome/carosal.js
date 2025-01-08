// src/components/BannerCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner_1 from "../../assets/images/BaneerImages/bulinding.jpg";

const BannerCarousel = () => {
  return (
    <div className='mt-24'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
      >
        <div>
          <img 
            src={banner_1} 
            alt="Banner 1" 
            className="w-full h-128 object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;


