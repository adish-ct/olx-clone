import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';


function App() {

  return (
    <div>
      {/* context wrapping */}
      <Post>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" />
          <Route path="/create" element={<Create />} />
          <Route path="/view-product" element={<ViewPost />} />
        </Routes>
      </Post>
    </div>
  );
}

export default App;
