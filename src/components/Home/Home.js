import React, { useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { groceryData } from "../constants/index";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Importing images
import image1 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.29.49_44be3ee5.jpg";
import image2 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.33.26_e5075cc5.jpg";
import image3 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 16.09.49_776a7a4f.jpg";
import Waterproof from '../../assets/images/cementImages/waterProof.jpg';
import EngineeringBrick from '../../assets/images/cementImages/engineering-bricks-178 (1).jpg';
import ConstructionSand from '../../assets/images/sandImages/constractionsand.jpg';
import Steel from '../../assets/images/steelrods.jpg'

const images = [image1, image2, image3];

// Sample data for construction materials
const constructionData = [
  {
    id: 1,
    name: "Cement",
    image: Waterproof, // Replace with actual image path
    discountedPrice: 300,
    originalPrice: 350,
    discount: "15% Off",
  },
  {
    id: 2,
    name: "Bricks",
    image: EngineeringBrick, // Replace with actual image path
    discountedPrice: 5000,
    originalPrice: 5500,
    discount: "10% Off",
  },
  {
    id: 3,
    name: "sand",
    image: ConstructionSand, // Replace with actual image path
    discountedPrice: 700,
    originalPrice: 800,
    discount: "12% Off",
  },
  {
    id: 3,
    name: "Steel Rods",
    image: Steel, // Replace with actual image path
    discountedPrice: 700,
    originalPrice: 1000,
    discount: "12% Off",
  },
];

// Sample data for gold
const goldData = [
  {
    id: 1,
    name: "Gold Necklace",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    discountedPrice: 50000,
    originalPrice: 55000,
    discount: "9% Off",
  },
  {
    id: 2,
    name: "Gold Ring",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    discountedPrice: 10000,
    originalPrice: 11000,
    discount: "8% Off",
  },
  {
    id: 3,
    name: "Gold Earrings",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    discountedPrice: 20000,
    originalPrice: 22000,
    discount: "10% Off",
  },
];

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const scrollRef = useRef(null);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }
  };

  const handleProductClick = (product, category) => {
    let route = "";

    // Determine route based on category
    if (category === "gold") {
      route = "/gold";
    } else if (category === "groceries") {
      route = "/groceries";
    } else {
      const formattedName = product.name.toLowerCase().replace(/\s+/g, "-"); // Format name for URL
      route = `/product-list/${formattedName}`;
    }

    navigate(route, { state: product });
  };

  const renderProductCards = (data, category) =>
    data.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-lg p-6 cursor-pointer w-80 flex-shrink-0 border border-gray-300 mb-4"
        onClick={() => handleProductClick(item, category)} // Pass category
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
    ));

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
        {/* Construction Materials Heading */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Construction Materials</h1>

        {/* Construction Materials Section */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(constructionData, "construction")}
        </div>

        {/* Gold Heading */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Gold</h1>

        {/* Gold Section */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(goldData, "gold")}
        </div>

        {/* Groceries Section */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Groceries</h1>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(groceryData, "groceries")}
        </div>
      </div>
    </div>
  );
};

export default Home;

