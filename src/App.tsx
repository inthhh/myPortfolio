import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./SubPages/Profile";
import MainPage from "./MainPage";
import Channel from "./SubPages/Channel";
import MainPj from "./SubPages/MainPj";
import Others from "./SubPages/Others";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/main-projects" element={<MainPj />} />
        <Route path="/other-experiences" element={<Others />} />
      </Routes>
    </Router>
  );
}

export default App;
