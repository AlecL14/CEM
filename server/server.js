require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/database/connection');
const eventRoutes = require('./src/routes/event.route');

const app = express();

// Enable CORS support
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse requests of content-type - application/json
app.use(express.json());

// Connect to MongoDB and start the server
const startServer = async () => {
    try {
        await connectDB(); // Wait for the database connection
        eventRoutes(app); // Initialize event routes
        const port = 4000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

startServer(); // Call the function to start the server