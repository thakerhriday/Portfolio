// src/App.js
import React from 'react';
import './App.css';
import './styles/About.css';
import './styles/Projects.css';
import './styles/Contact.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div id="home" className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a sample portfolio website created using React.</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate developer with a love for creating innovative solutions using modern web technologies.
      </p>
    </div>
  );
}

// Projects Component
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

// Contact Component
function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
