import React from 'react';
function App() {
 // Sample array of student names
 const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
 return (
 <div>
 <h1>Student List</h1>
 <ul>
 {
 // Iterative rendering using map()
 students.map((student, index) => (
 <li key={index}>{student}</li>
 ))
 }
 </ul>
 </div>
 );
}
export default App;