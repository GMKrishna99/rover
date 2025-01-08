import React, { useRef } from "react";
import Slider from "react-slick";
import { groceryData } from "../constants/index";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Importing images
import image1 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.29.49_44be3ee5.jpg";
import image2 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.33.26_e5075cc5.jpg";
import image3 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 16.09.49_776a7a4f.jpg";

const images = [image1, image2, image3];

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true, // Display dots for navigation
    infinite: true, // Loop infinitely
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed (in ms)
  };
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({
          left: -300, // Adjust scroll distance as needed
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({
          left: 300, // Adjust scroll distance as needed
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="pt-34">
      {/* Carousel */}
      <div className="w-full h-[800px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-${index}`}
                className="object-cover w-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Cards below the carousel */}

      <div className="container mx-auto relative">
        {/* Heading */}
        <h1 className=" mx-auto py-6 text-4xl font-semibold">Groceries</h1>

        {/* Scroll Buttons */}
        <div className=" mb-4 absolute top-1/2 left-4 ">
          <button
            onClick={() => handleScroll("left")}
            className="bg-gray-400 text-white p-6 rounded-full"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className=" mb-4 absolute top-1/2 right-4 ">
          <button
            onClick={() => handleScroll("right")}
            className="bg-gray-400 text-white p-6 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Horizontal Card Layout with Overflow Hidden */}
        <div
          className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch"
          ref={scrollRef}
        >
          {groceryData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer w-80 flex-shrink-0 border border-gray-300 mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-4">
                  <span className="text-xl font-semibold text-red-500">
                    ₹{item.discountedPrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{item.originalPrice}
                  </span>
                </div>
                <p className="text-sm bg-red-500 p-2 rounded-lg text-white">
                  {item.discount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
