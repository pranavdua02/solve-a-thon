import React from "react";
import "./HeroSection.css";
import vid from "../../assets/vid.mp4"
import { BsGlobeAmericas } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={vid} type="video/mp4" />
    </video>

      
      <div className="hero-overlay">
        <div className="hero-logo">
          <BsGlobeAmericas/>
        </div>
        <h1 className="hero-title">Best in Travel</h1>
        <p className="hero-year">2025</p>
        {/* <button className="hero-button">Discover the winners</button> */}
      </div>
    </div>
  );
};

console.log(vid);
export default HeroSection;