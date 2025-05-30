import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QA from './pages/QA';
import Article from './pages/Article';
import Principles from './pages/Principles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/qa/playwright/:articleId" element={<Article />} />
        <Route path="/principles" element={<Principles />} />
      </Routes>
    </Router>
  );
}

export default App;
