require('dotenv').config(); // Add this at the top
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9992; // Use environment variable for the port

// Middleware
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

// MongoDB connection
const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/petopiadb"; // Use environment variable for MongoDB URI
mongoose.connect(dbUri)
    .then(() => console.log("Successfully connected to DB"))
    .catch(error => console.log("Error connecting to DB:", error));

// Routes
const routes = require('./route/routes');
app.use(routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Starting the server
app.listen(port, function(err) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});