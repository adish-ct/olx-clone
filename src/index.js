import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseProvider } from "./store/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Router>
        <App />
      </Router>
    </FirebaseProvider>
  </React.StrictMode>
);
