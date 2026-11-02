import React, { useState, useEffect } from 'react';
function App() {
 const [users, setUsers] = useState([]); // Store fetched users
 const [loading, setLoading] = useState(true); // Track loading state
 const [error, setError] = useState(null); // Store error message
useEffect(() => {
 // API call inside useEffect
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
 if (!response.ok) {
 throw new Error('Failed to fetch users');
 }
 return response.json(); // Convert response to JSON
 })
 .then((data) => {
 setUsers(data); // Set fetched user data
 setLoading(false); // Stop loading
 })
 .catch((err) => {
 setError(err.message); // Store error message
 setLoading(false); // Stop loading
 });
 }, []); // Runs only once when component mounts
return (
 <div style={{ padding: '20px' }}>
 <h1>User List</h1>
{loading && <p>Loading...</p>} {/* Show while fetching */}
 {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Show error
*/}
{!loading && !error && (
 <ul>
 {users.map((user) => (
 <li key={user.id}>
 {user.name} ({user.email})
 </li>
 ))}
 </ul>
 )}
 </div>
 );
}
export default App;