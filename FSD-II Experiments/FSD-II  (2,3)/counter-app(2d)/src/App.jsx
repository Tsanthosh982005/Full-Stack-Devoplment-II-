import React, { useState } from "react";
export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const handleLoginToggle = () => {
 setIsLoggedIn(!isLoggedIn);
 };
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 {isLoggedIn ? (
 <div>
 <h2>Welcome, User! ✅</h2>
 <button onClick={handleLoginToggle}>Logout</button>
 </div>
 ) : (
 <div>
 <h2>Please log in 🔒</h2>
 <button onClick={handleLoginToggle}>Login</button>
 </div>
 )}
 </div>
 );
}
