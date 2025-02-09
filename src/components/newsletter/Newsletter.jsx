import React from "react";
import "./Newsletter.css"; // Import the CSS file

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="icon">📩</div>
        <h2>Travel inspiration delivered directly to your inbox</h2>
        <p>Subscribe to our newsletters and promotions.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe now</button>
        </div>
        <p className="privacy-text">
          Read our <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
