import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<Signup />} path="/signup" />
          <Route exact element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
