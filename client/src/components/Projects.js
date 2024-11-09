import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
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
              {project.technologies && project.technologies.map((tech, idx) => (
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
