const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

// Create an Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the schema and model
const formSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    dob: String,
    gender: String,
    currentRole: String,
    organization: String,
    fieldOfStudy: String,
    graduationYear: String,
    linkedin: String,
    teamName: String,
    teamMembers: String,
    skills: String,
    projectIdea: String,
    github: String,
    tShirtSize: String,
    portfolio: String,
    codeOfConduct: Boolean,
    photographyConsent: Boolean,
    dataPrivacy: Boolean,
    referralSource: String,
    previousHackathon: String,
    emergencyContact: String,
});

const Form = mongoose.model('Form', formSchema);

// Define routes
app.post('/submit-form', async (req, res) => {
    try {
        const formData = new Form(req.body);
        await formData.save();
        res.status(200).send('Form data saved successfully');
        console.log(res.data)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving form data');
    }
});
// Define route to get all form data
app.get('/get-forms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving form data');
    }
});


// Start the server
// const PORT = process.env.PORT || 5000;
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
