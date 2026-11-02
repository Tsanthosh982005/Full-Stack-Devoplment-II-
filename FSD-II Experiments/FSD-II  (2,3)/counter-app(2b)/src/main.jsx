import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Make sure file path is correct
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);