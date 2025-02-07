import React from "react";
import "./travelgrid.css"; // Import the CSS file
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import { FaArrowRight } from "react-icons/fa";

const TravelGrid = () => {
  const items = [
    {
      title: "Big adventure in Central America's smallest country",
      image: img1,
    },
    {
      title: "The 18 best things to do in Valletta",
      image: img2,
    },
    {
      title: "6 day trips from Cancún: cenotes, Mayan ruins and more",
      image: img3,
    },
  ];

  return (
    <div className="grid-container">
    <h1 className="main-heading">Discover story-worthy travel moments</h1>
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={item.image} alt={item.title} className="grid-image" />
          <div className="overlay"></div>
          <div className="text-container">
            <div className="title">{item.title}</div>
            <div className="arrow"><FaArrowRight/></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelGrid;