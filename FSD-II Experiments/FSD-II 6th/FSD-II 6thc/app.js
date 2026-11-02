const express = require('express');

const app = express();
const port = 3000;

// Route to print Hello World in browser console
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Open the browser console</h1>
            <script>
                console.log("Hello World");
            </script>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
