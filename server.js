const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (Ensure this is correct)
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Mongoose Schema and Model
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
});

const Project = mongoose.model('Project', projectSchema);

// Route to get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
