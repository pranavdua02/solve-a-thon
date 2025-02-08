import React, { useState } from "react";
import "./startPage.css";

const StartPage = () => {
  const [personality, setPersonality] = useState("");

  const handleInputChange = (e) => {
    setPersonality(e.target.value);
  };

  const handleRecommendation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Map personality to tourist-specific place types
        const placeType = personality.toLowerCase().includes("adventure")
          ? "adventure+tourist+attractions"
          : personality.toLowerCase().includes("relax")
          ? "relaxing+parks"
          : "landmarks+tourist+attractions";

        // Redirect to Google Maps with tourist-focused search
        const url = `https://www.google.com/maps/search/${placeType}/@${latitude},${longitude},14z`;
        window.location.href = url; // Redirect user to Google Maps
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="start-page-container">
      <div className="start-page-card">
        <h1>Discover Tourist Attractions Near You</h1>
        <p>
          Describe your personality, and we'll recommend nearby tourist spots
          tailored for you!
        </p>
        <input
          type="text"
          placeholder="e.g., adventurous, relaxed"
          value={personality}
          onChange={handleInputChange}
          className="personality-input"
        />
        <button onClick={handleRecommendation} className="recommend-button">
          Show Tourist Places
        </button>
      </div>
    </div>
  );
};

export default StartPage;
