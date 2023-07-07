import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./SubPages/Profile";
import MainPage from "./MainPage";
import Channel from "./SubPages/Channel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;
