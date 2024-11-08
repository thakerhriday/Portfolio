import React from 'react';
import '../styles/Home.css';
import linkedinProfilePic from '../assets/linkedin-profile-pic.jpg';  // Import your image

const Home = () => {
  return (
    <div id="home" className="home">
      <img src={linkedinProfilePic} alt="Hriday Thaker" className="profile-pic" />
      <h1>Welcome to My Portfolio Website</h1>
      <p>Hi, I'm Hriday Thaker. Explore my work, projects, and achievements.</p>
    </div>
  );
};

export default Home;
