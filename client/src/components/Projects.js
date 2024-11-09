import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Fire Detection System",
      description: "IoT project using Node MCU to detect fire inside a house using CO and other sensors.",
      technologies: ["IoT", "NodeMCU", "Sensors", "CO Detection", "Alert System"],
    },
    {
      title: "ERP System using Java",
      description: "Made an ERP System using Java JFrame. The system provided two logins, one for admin and another for users.",
      technologies: ["Java", "JFrame", "ERP", "Admin Login", "User Login"],
      link: "https://github.com/himanshuchopade97/ERP",
    },
    {
      title: "Cryptography",
      description: "Worked on an encryption project using Hill Cipher. Improved the encryption algorithm for better security.",
      technologies: ["Cryptography", "Hill Cipher", "Encryption", "Algorithm", "Security"],
      link: "https://github.com/thakerhriday/Cryptography",
    },
    {
      title: "Wine Quality Classification",
      description: "The objective of this project is to classify wine quality into three categories: Not Good, Average, and Good.",
      technologies: ["Python", "Machine Learning", "Classification", "Wine Quality"],
      link: "https://github.com/thakerhriday/Wine_Quality_Classification",
    },
    {
      title: "Smart Contracts",
      description: "Developed and deployed smart contracts on Ethereum using Solidity, focusing on token creation and exchange.",
      technologies: ["Solidity", "Ethereum", "Smart Contracts", "Token Creation"],
      link: "https://github.com/thakerhriday/SmartContracts",
    },
    {
      title: "Cache Simulator",
      description: "Built a cache memory simulator to mimic cache behavior in a system with different cache replacement policies.",
      technologies: ["C++", "Simulator", "Cache", "Replacement Policies"],
      link: "https://github.com/thakerhriday/Cache-Simulator",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-tile">
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech">{tech}</span>
              ))}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project on GitHub
              </a>
            ) : (
              <p className="no-link">No link available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
