import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">Tourist</h2>
          <p className="footer-tagline">For Explorers Everywhere</p>
          <div className="footer-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaPinterestP className="social-icon" />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h3>SUBSCRIBE</h3>
          <p className="footer-offer">Get 20% off your first order.</p>
          <input type="email" placeholder="Email address" className="footer-input" />
          <button className="footer-button">Subscribe now</button>
          <p className="footer-policy">
            Subscribe to Tourist newsletters and promotions. Read our{" "}
            <span className="footer-link">Privacy Policy</span>.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>TOP DESTINATIONS</h3>
            <ul>
              {["New York City", "Paris", "Italy", "Costa Rica", "Japan", "USA", "Amsterdam", "Portugal", "Cancún", "Chicago", "England", "Tokyo", "France", "Thailand", "Ireland", "Rome", "London", "Los Angeles", "Mexico", "San Francisco"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>TRAVEL INTERESTS</h3>
            <ul>
              {["Adventure Travel", "Art and Culture", "Beaches, Coasts and Islands", "Family Holidays", "Festivals", "Food and Drink", "Honeymoon and Romance", "Road Trips", "Sustainable Travel", "Travel on a Budget", "Wildlife and Nature"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>SHOP</h3>
            <ul>
              {["Destination Guides", "Lonely Planet Kids", "Lonely Planet Shop", "Non-English Guides"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>ABOUT US</h3>
            <ul>
              {["About Lonely Planet", "Contact Us", "Trade and Advertising", "Privacy Policy", "Terms and Conditions", "Work For Us", "Write For Us", "Sitemap", "Consumer Health Data Privacy Policy", "Cookie Settings", "Do Not Sell or Share My Personal Information"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
