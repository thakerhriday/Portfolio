import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="about">

      <div className="section">
      <h2>About Me</h2>
        <p>
          Hi, I'm Hriday Thaker, an enthusiastic and ambitious third-year BTech student majoring in Computer Science and Engineering at Symbiosis Institute of Technology, Pune. I'm an active member of the Cyber Blockchain Club (CBC), where I've had the opportunity to share my passion for blockchain technology through organizing workshops and creating engaging content for our club's LinkedIn page. Proficient in Java, C, C++, Python, Prolog, SQL, Solidity, and assembly level programming. I possess a diverse skill set that allows me to approach problems from different angles. Eager to combine my technical skills and creativity, I am seeking opportunities to collaborate with industry professionals, contribute to innovative projects, and make a lasting impact in the technology sector.
        </p>
      </div>

      <div className="section">
        <h3>Education</h3>
        <p>
          <strong>Degree:</strong> Bachelor of Technology (Computer Science and Engineering) with Honors in Artificial Intelligence and Machine Learning
        </p>
        <p><strong>CGPA:</strong> 7.94</p>
      </div>

      <div className="section">
        <h3>Experience</h3>
        <ol className="experience">
          <li>
            <strong>Blockchain Developer Intern</strong>
            <p>Project Human City (Toronto based NGO) <br /> <em>July 2024 - Present</em></p>
            <p>1. Built an NFT Marketplace.</p>
            <p>2. Prepared relevant documentation.</p>
          </li>
          <li>
            <strong>Vice President</strong>
            <p>Cyber Blockchain Club <br /> <em>August 2024 - Present</em></p>
            <p>1. Conducted 4 workshops as the key speaker.</p>
            <p>2. Published 4 articles on the club's LinkedIn page.</p>
            <p>3. Conducted 2 recruitment drives for the club.</p>
          </li>
        </ol>
      </div>

      <div className="section">
        <h3>Certifications</h3>
        <ol className="certifications">
          <li>
            <strong>Google Data Analytics Professional</strong>
            <p>Learnt cleaning, analyzing, and visualizing data using spreadsheets, SQL, Tableau, and R.</p>
          </li>
          <li>
            <strong>Hashgraph Developer Course</strong>
            <p>Learnt how the Hedera Hyperledger works and how to build on it using Hedera SDK.</p>
          </li>
        </ol>
      </div>

      <div className="section">
        <h3>Achievements</h3>
        <ol className="achievements">
          <li>
            <strong>Presented Research Paper</strong>
            <p>Titled “Blockchain-based Fund Management System for Indian Temples” at IEEE 8th International Conference on Computing, Communication, Control and Automation (ICCUBEA-2024).</p>
          </li>
          <li>
            <strong>First Prize in Build-a-thon at IEEE Symposium 2024</strong>
            <p>Built a blockchain-based Bus Management System with a Solidity Smart Contract and a fully functional UI.</p>
          </li>
          <li>
            <strong>First Position in Smart Environmental Challenges Competition</strong>
            <p>American Society of Civil Engineers, SIT Chapter.</p>
          </li>
          <li>
            <strong>C++ & SQL Gold Badge on HackerRank</strong> - <a href="https://www.hackerrank.com/hriday_thaker261" target="_blank" rel="noopener noreferrer">View on HackerRank</a>
          </li>
        </ol>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/hridaythaker/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        <a href="https://github.com/thakerhriday" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      </div>
    </div>
  );
};

export default About;
