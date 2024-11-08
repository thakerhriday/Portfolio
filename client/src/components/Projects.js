import React, { useEffect, useState } from 'react';
import '../styles/Projects.css'; // Ensure this file exists

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')  // Assuming your backend is running locally
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-tile">
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies && project.technologies.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
