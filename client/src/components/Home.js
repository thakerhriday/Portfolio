import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import linkedinProfilePic from '../assets/linkedin-profile-pic.jpg'; // Import your image

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation duration
    const timer = setTimeout(() => {
      setLoading(false); // Automatically switch to the homepage content
    }, 3000); // 3 seconds for the animation

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div id="home" className="home">
      {loading ? (
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-bar-fill"></div>
          </div>
          <div className="loading-text">Loading your portfolio...</div>
        </div>
      ) : (
        <div className="id-card">
          <img
            src={linkedinProfilePic}
            alt="Hriday Thaker"
            className="profile-pic"
          />
          <h1>Hi, I'm Hriday Thaker</h1>
          <p>Welcome to my portfolio! Explore below:</p>
          <div className="links">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
