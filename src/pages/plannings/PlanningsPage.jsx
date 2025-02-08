import React from "react";
import "./planningsPage.css";

const ItinerariesPage = () => {
  const itineraries = [
    {
      id: 1,
      location: "Rajasthan: The Land of Royals",
      duration: "7 Days",
      highlights: [
        "Visit the majestic Amer Fort in Jaipur",
        "Explore the blue city of Jodhpur",
        "Experience the golden dunes of Jaisalmer",
        "Stay in a heritage haveli"
      ],
      image: "https://example.com/rajasthan-tour.jpg",
    },
    {
      id: 2,
      location: "Kerala: God's Own Country",
      duration: "5 Days",
      highlights: [
        "Cruise on a houseboat in Alleppey",
        "Witness the tea gardens of Munnar",
        "Relax at the beaches of Kovalam",
        "Experience Ayurveda massages"
      ],
      image: "https://example.com/kerala-tour.jpg",
    },
    {
      id: 3,
      location: "Himachal Pradesh: Mountains and More",
      duration: "6 Days",
      highlights: [
        "Enjoy paragliding in Bir-Billing",
        "Visit the monasteries of Dharamshala",
        "Explore the serene valley of Manali",
        "Trek to the Triund Hills"
      ],
      image: "https://example.com/himachal-tour.jpg",
    },
    {
      id: 4,
      location: "Varanasi & Khajuraho: Spiritual Sojourn",
      duration: "4 Days",
      highlights: [
        "Witness the Ganga Aarti in Varanasi",
        "Explore the ancient temples of Khajuraho",
        "Take a boat ride on the Ganges",
        "Discover local street food"
      ],
      image: "https://example.com/varanasi-tour.jpg",
    },
  ];

  return (
    <div className="itineraries-page">
      <h1 className="page-title">Travel Itineraries</h1>
      <p className="page-subtitle">Plan your next adventure with our curated itineraries.</p>

      <div className="itineraries-container">
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} className="itinerary-card">
            <img
              src={itinerary.image}
              alt={itinerary.location}
              className="itinerary-image"
            />
            <div className="itinerary-content">
              <h2 className="itinerary-title">{itinerary.location}</h2>
              <p className="itinerary-duration">Duration: {itinerary.duration}</p>
              <ul className="itinerary-highlights">
                {itinerary.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItinerariesPage;
