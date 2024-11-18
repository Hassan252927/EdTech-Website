const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/adminDB';

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// Hash password function
const hashPassword = async (plainTextPassword) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainTextPassword, salt);
};

// Main function to add new admin
const addNewAdmin = async (username, plainTextPassword) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    // Hash the password
    const hashedPassword = await hashPassword(plainTextPassword);

    // Create a new admin record
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    console.log('New admin added successfully');
  } catch (error) {
    console.error('Error adding new admin:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

// Replace 'newAdminUser' and 'newAdminPassword' with your actual username and password
const username = 'JohnNew'; // Replace with the desired username
const plainTextPassword = 'JohnNew321'; // Replace with the desired password

addNewAdmin(username, plainTextPassword);