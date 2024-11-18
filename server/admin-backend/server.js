const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // Import cors

const app = express();
const port = 8000;  // same as login.jsx axios request - line 17

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/adminDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login Route
app.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate token
    const token = jwt.sign({ id: admin._id }, 'your_jwt_secret');
    
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected route example
app.get('/sidebar', authenticateToken, (req, res) => {
  // Handle sidebar logic here
  res.send('Welcome to the sidebar!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
