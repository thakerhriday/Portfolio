import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import linkedinProfilePic from '../assets/linkedin-profile-pic.jpg'; // Your image

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-bar"></div>
          <p className="loading-text">Loading the portfolio...</p>
        </div>
      ) : (
        <div className="home-container">
          {/* Left Section: Text and Links */}
          <div className="home-text">
            <h1 className="animated-hi">Hi, I'm Hriday Thaker</h1>
            <p></p>
            <p className="welcome-message"><h2>Welcome to my portfolio! Explore my work, projects, and achievements.</h2></p>
            <div className="nav-links">
              <a href="about" className="nav-link">About</a>
              <a href="projects" className="nav-link">Projects</a>
              <a href="contact" className="nav-link">Contact</a>
            </div>
          </div>
          {/* Right Section: Profile Picture */}
          <div className="home-image">
            <img src={linkedinProfilePic} alt="Hriday Thaker" className="profile-pic" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
