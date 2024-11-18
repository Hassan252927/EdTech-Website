const bcrypt = require('bcryptjs');

// Simulate a "database" with an in-memory array
const mockAdmins = [];

// Hash password function
const hashPassword = async (plainTextPassword) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainTextPassword, salt);
};

// Simulate adding a new admin
const addNewAdmin = async (username, plainTextPassword) => {
  try {
    // Hash the password
    const hashedPassword = await hashPassword(plainTextPassword);

    // Simulate storing the admin in memory
    const newAdmin = { username, password: hashedPassword };
    mockAdmins.push(newAdmin);

    console.log('New admin added successfully');
  } catch (error) {
    console.error('Error adding new admin:', error);
  }
};

// Simulate logging in the user
const loginAdmin = async (username, plainTextPassword) => {
  try {
    const admin = mockAdmins.find(admin => admin.username === username);
    
    if (!admin) {
      return console.log('Admin not found!');
    }

    // Check if the password matches the hashed password
    const isMatch = await bcrypt.compare(plainTextPassword, admin.password);

    if (isMatch) {
      console.log('Login successful!');
    } else {
      console.log('Invalid password!');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Add new admin (for testing)
const username = 'JohnNew@gmail';
const plainTextPassword = 'JohnNew321';
addNewAdmin(username, plainTextPassword);

// Attempt to login with the correct credentials
setTimeout(() => {
  loginAdmin('JohnNew@gmail', 'JohnNew321'); // Correct password
  loginAdmin('JohnNew@gmail', 'WrongPassword'); // Incorrect password
}, 1000);
