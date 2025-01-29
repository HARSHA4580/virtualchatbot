// server.js (Back-End)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS to allow cross-origin requests (if needed)
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse incoming requests
app.use(express.json());

// Simple route for chatbot interaction
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    let botResponse = "I'm not sure how to respond to that.";

    // Simple chatbot logic for response
    if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
        botResponse = 'Sure, I can help! What do you need assistance with?';
    } else if (userMessage.toLowerCase().includes('bye')) {
        botResponse = 'Goodbye! Have a nice day!';
    }

    // Send response back to front-end
    res.json({ message: botResponse });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
