import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "./store/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
