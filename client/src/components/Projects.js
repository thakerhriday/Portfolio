import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the Express backend
    axios.get('http://localhost:5000/projects')  // Your backend API URL
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;
