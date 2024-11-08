import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQHNfWaP0uikHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726332471399?e=1736380800&v=beta&t=LUS_iGrKw-evw2dcTmFBI01hON-FzCZ966veM6y6aLE.jpg" alt="Hriday Thaker" className="about-image" />
      <p>
        Hi, I'm Hriday Thaker, an enthusiastic and ambitious third-year BTech student majoring in Computer Science and Engineering at Symbiosis Institute of Technology, Pune. I'm an active member of the Cyber Blockchain Club (CBC), where I've had the opportunity to share my passion for blockchain technology through organizing workshops and creating engaging content for our club's LinkedIn page. Proficient in Java, C, C++, Python, Prolog, SQL, Solidity, and assembly level programming. I possess a diverse skill set that allows me to approach problems from different angles. Eager to combine my technical skills and creativity, I am seeking opportunities to collaborate with industry professionals, contribute to innovative projects, and make a lasting impact in the technology sector.
      </p>
      <p>
        <strong>Education:</strong>
        <br>
        BTech. CSE
        </br>
      </p>
      <p>
        Currently, I'm contributing to <strong>Project Human City</strong> as a Blockchain Developer Intern and leading workshops as the Vice President of the <strong>Cyber Blockchain Club</strong>.
      </p>
      <p>
        
      </p>
      <a href="https://www.linkedin.com/in/hridaythaker/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
      <a href="https://github.com/thakerhriday" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
    </div>
  );
};

export default About;
