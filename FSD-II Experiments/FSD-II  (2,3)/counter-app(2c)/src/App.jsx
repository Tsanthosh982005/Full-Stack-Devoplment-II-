import React, { useState } from "react";
export default function App() {
 const [message, setMessage] = useState("Click a button to see what happens!");
 const handleHelloClick = () => {
 setMessage("👋 Hello there!");
 };
 const handleByeClick = () => {
 setMessage("👋 Goodbye!");
 };
 const handleResetClick = () => {
 setMessage("Click a button to see what happens!");
 };
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h2>{message}</h2>
 <button onClick={handleHelloClick}>Say Hello</button>
 <button onClick={handleByeClick}>Say Bye</button>
 <button onClick={handleResetClick}>Reset</button>
 </div>
 );
}
