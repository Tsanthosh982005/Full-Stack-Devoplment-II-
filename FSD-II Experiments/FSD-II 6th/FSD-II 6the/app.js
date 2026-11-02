// Import modules
const express = require('express');
const mysql = require('mysql2');
// Create Express app
const app = express();
const port = 3000;
// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',    // your MySQL host
  user: 'root',         // your MySQL username
  password: 'Santhosh@2005',         // your MySQL password
  database: 'studentdb' // your database name
});
// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// Simple API route
app.get('/', (req, res) => {
  res.send('API and MySQL Database Connected Successfully!');
});
// Example route to get data from a table
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});