const express = require('express');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json()); // to handle POST requests with JSON data

const PORT = process.env.PORT || 5000;

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
