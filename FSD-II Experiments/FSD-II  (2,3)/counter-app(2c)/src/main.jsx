import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Make sure the file path is correct
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);