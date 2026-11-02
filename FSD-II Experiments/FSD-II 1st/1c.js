// 1. Click Event
const button = document.getElementById("clickBtn");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});

// 2. Mouseover Event
const heading = document.getElementById("heading");
heading.addEventListener("mouseover", function () {
  heading.style.color = "blue";
  heading.textContent = "You hovered over me!";
});

heading.addEventListener("mouseout", function () {
  heading.style.color = "black";
  heading.textContent = "Hover over me!";
});

// 3. Input Key Event
const inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});