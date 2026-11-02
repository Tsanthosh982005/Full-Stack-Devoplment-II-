const express = require('express');

const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Website</h1><p>This is the Home Page.</p>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the About Page.</p>');
});

// Services route
app.get('/services', (req, res) => {
    res.send('<h1>Our Services</h1><p>We provide web development services.</p>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: example@gmail.com</p>');
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
