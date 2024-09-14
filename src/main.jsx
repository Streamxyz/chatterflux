import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add event listener for messages from the parent window
window.addEventListener("message", (event) => {
  // Check if the origin is allowed (replace with your actual allowed origin)
  const allowedOrigin = "https://run.gptengineer.app";
  if (event.origin !== allowedOrigin) {
    console.error("Received message from disallowed origin:", event.origin);
    return;
  }

  // Process the message
  if (event.data === "getUserSnapshot") {
    const snapshot = JSON.stringify({
      // Add relevant user data here
      example: "User snapshot data"
    });

    // Send the snapshot back to the parent window
    window.parent.postMessage(snapshot, allowedOrigin);
  }
}, false);
