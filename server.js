const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Enable JSON body parsing
app.use(cors()); // Enable CORS for frontend requests

// ✅ MongoDB Connection String
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://nancyelorm:nancy0000@cluster0.calpq.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB connected successfully!'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Define User Schema & Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// ✅ Registration Route
app.post('/register', async (req, res) => {
    console.log("📌 Register route hit!");
    const { username, password } = req.body;

    try {
        // Check if the username exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password & store user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// ✅ Login Route
app.post('/login', async (req, res) => {
    console.log("📌 Login route hit!");
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// ✅ Root Route (to check server)
app.get('/', (req, res) => {
    res.send('🚀 Server is running!');
});

// ✅ Set the server to listen on a port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🎯 Server running on port ${port}`);
});
   
