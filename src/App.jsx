import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Home";
import Profile from "./Profile";
import Quotes from "./Quotes";
import Community from "./Community";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
