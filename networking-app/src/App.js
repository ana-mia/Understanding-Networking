// this file is the main component of your app
// it includes the routing logic to switch between the home page and differnet chapters

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chapter from './components/Chapter';
import ChapterTen from './components/ChapterTen';  // Import the new chapter

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path="/wireshark" element={<ChapterTen />} />  {/* Add route for Wireshark chapter */}
      </Routes>
    </Router>
  );
};

export default App;