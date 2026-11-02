import React from 'react';
function Greeting(props) {
 return <h1>Hello, {props.name}!</h1>;
}
function Message(props) {
 return <p>Welcome to the site, {props.name}. Enjoy your stay!</p>;
}
function App() {
 const userName = "Alice";
 return (
 <div>
 <Greeting name={userName} />
 <Message name={userName} />
 </div>
 );
}
export default App;
