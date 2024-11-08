// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-item">
        <h3>Project 1</h3>
        <p>Project description goes here. This is a sample project.</p>
      </div>
      <div className="project-item">
        <h3>Project 2</h3>
        <p>Project description goes here. This is a sample project.</p>
      </div>
    </div>
  );
}

export default Projects;
