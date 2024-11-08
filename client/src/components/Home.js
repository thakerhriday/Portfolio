// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>Hi, I'm [Your Name]</h1>
                <p>I'm a passionate Web Developer.</p>
                <button className="btn-primary">See My Work</button>
            </div>
        </section>
    );
}

export default Home;
