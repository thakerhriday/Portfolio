// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to handle contact form
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send('Form submitted successfully!');
});

app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
