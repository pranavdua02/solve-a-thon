import React from "react";
import "./Destinations.css";
import img1 from "../../assets/di1.png"
import img2 from "../../assets/di2.png"
import img3 from "../../assets/di3.png"

const destinations = [
  {
    name: "Nevada",
    image: img1,
    trending: true,
  },
  {
    name: "Canary Islands",
    image: img2,
    trending: false,
  },
  {
    name: "New Zealand",
    image: img3,
    trending: false,
  },
];

const Destination = () => {
  return (
    <div className="destinations-container">
      <div className="header">
        <div>
          <h2>Where to next?</h2>
        </div>
        <button className="view-all-btn">View all destinations</button>
      </div>

      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            {destination.trending && <span className="trending-badge">🔥 Trending destination</span>}
            <h3 className="destination-name">{destination.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
