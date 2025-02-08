
import React from "react";
import "./inspirationPage.css";

const TravelStoriesPage = () => {
  const stories = [
    {
      id: 1,
      name: "Arjun Sharma",
      location: "Jaipur, Rajasthan",
      story:
        "The avatar guide enhanced my experience in Jaipur by taking me to the royal palaces and local markets. I especially loved the mesmerizing sunset at Nahargarh Fort!",
      image: "https://example.com/jaipur-palace.jpg",
    },
    {
      id: 2,
      name: "Neha Gupta",
      location: "Manali, Himachal Pradesh",
      story:
        "The avatar guide helped me find the best trekking routes and hidden cafes in Old Manali. The trip was peaceful and adventurous at the same time!",
      image: "https://example.com/manali-trek.jpg",
    },
    {
      id: 3,
      name: "Rajiv Nair",
      location: "Kerala Backwaters",
      story:
        "The avatar guide curated a houseboat journey through Kerala's serene backwaters. The cultural insights and local food stops were unforgettable!",
      image: "https://example.com/kerala-backwaters.jpg",
    },
    {
      id: 4,
      name: "Sneha Rao",
      location: "Varanasi, Uttar Pradesh",
      story:
        "The avatar guide led me to the evening Ganga Aarti and the vibrant ghats of Varanasi. The tips for exploring local delicacies made the experience divine!",
      image: "https://example.com/varanasi-ghat.jpg",
    },
  ];

  return (
    <div className="travel-stories-page">
      <h1 className="page-title">Travel Stories</h1>
      <p className="page-subtitle">
        Discover how the avatar guide has transformed travel experiences in India.
      </p>

      <div className="stories-container">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.location} className="story-image" />
            <div className="story-content">
              <h2 className="story-title">{story.location}</h2>
              <h3 className="story-author">{story.name}</h3>
              <p className="story-description">"{story.story}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelStoriesPage;
