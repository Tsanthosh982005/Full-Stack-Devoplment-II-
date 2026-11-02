import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Adjust path if needed
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);