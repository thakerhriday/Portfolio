// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-item">
                <h3>Project 1</h3>
                <p>Details about the project...</p>
            </div>
            <div className="project-item">
                <h3>Project 2</h3>
                <p>Details about the project...</p>
            </div>
        </section>
    );
}

export default Projects;
