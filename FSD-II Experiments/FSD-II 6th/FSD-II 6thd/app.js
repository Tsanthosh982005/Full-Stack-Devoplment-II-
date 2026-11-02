const express = require('express');

const app = express();
const port = 3000;

// Middleware to read JSON data
app.use(express.json());

// Sample data
let students = [
    { id: 1, name: 'Ravi', age: 20 },
    { id: 2, name: 'Priya', age: 21 }
];

// CREATE - Add a new student
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json({
        message: 'Student added successfully',
        student: student
    });
});

// READ - Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// UPDATE - Modify a student
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    student.name = req.body.name ?? student.name;
    student.age = req.body.age ?? student.age;

    res.json({
        message: 'Student updated successfully',
        student: student
    });
});

// DELETE - Remove a student
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    students.splice(index, 1);

    res.json({
        message: 'Student deleted successfully'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
