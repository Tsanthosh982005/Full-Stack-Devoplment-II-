import React, { useState } from 'react';
function App() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
 };
 return (
 <div>
 <h2>React Form Example</h2>
 <form onSubmit={handleSubmit}>
 <div>
 <label>Name: </label>
 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Enter your name"
 />
 </div>
 <div>
 <label>Email: </label>
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="Enter your email"
 />
 </div>
 <button type="submit">Submit</button>
 </form>
 </div>
 );
}
export default App;