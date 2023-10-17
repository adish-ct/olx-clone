import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<SignupPage />} path="/signup" />
        <Route exact element={<LoginPage />} path="/login" />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
