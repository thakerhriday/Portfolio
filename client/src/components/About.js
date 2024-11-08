import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQHNfWaP0uikHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726332471399?e=1736380800&v=beta&t=LUS_iGrKw-evw2dcTmFBI01hON-FzCZ966veM6y6aLE.jpg" alt="Hriday Thaker" className="about-image" />
      <p>
        Hi, I'm Hriday Thaker. I'm a Blockchain Developer, Cybersecurity Enthusiast, and Full Stack Developer.
      </p>
      <p>
        I'm a passionate developer specializing in blockchain and cryptography with experience in creating secure and scalable decentralized applications. 
        Currently, I'm contributing to <strong>Project Human City</strong> as a Blockchain Developer Intern and leading workshops as the Vice President of the <strong>Cyber Blockchain Club</strong>.
      </p>
      <a href="https://www.linkedin.com/in/hridaythaker/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
      <a href="https://github.com/thakerhriday" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
    </div>
  );
};

export default About;
