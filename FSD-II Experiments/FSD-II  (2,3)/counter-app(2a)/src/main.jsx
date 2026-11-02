import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./App"; // or wherever your Counter component is
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Counter />);
