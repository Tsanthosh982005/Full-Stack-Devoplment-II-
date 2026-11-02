import React from "react";
export default function App() {
 const name = "John";
 const age = 25;
 const greeting = "Welcome to the React world!";
 const intro = `My name is ${name} and I am ${age} years old.`;
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h1>Displaying Text Using String Literals</h1>
 <p>{greeting}</p>
 <p>{intro}</p>
 <p>{"React makes it easy to build UIs!"}</p>
 </div>
 );
}