// Function to handle button clicks
function handleClick(message) {
  const output = document.getElementById("output");
  output.textContent = message;
}

// Add event listeners to each button
document.getElementById("btn1").addEventListener("click", function () {
  handleClick("You clicked Button 1!");
});

document.getElementById("btn2").addEventListener("click", function () {
  handleClick("Button 2 was clicked.");
});
document.getElementById("btn3").addEventListener("click", function () {
  handleClick("Button 3 click event triggered.");
});