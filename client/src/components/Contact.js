import React from 'react';
import '../styles/Contact.css'; // Ensure this file exists for styles

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><strong>Mobile:</strong> +91 8275740243</p>
        <p><strong>Email:</strong> hriday.thaker2604@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/hridaythaker/" target="_blank" rel="noopener noreferrer">linkedin.com/in/hridaythaker</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
