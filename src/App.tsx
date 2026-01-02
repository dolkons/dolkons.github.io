import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Years from './pages/Years';
import YearSummary from './pages/YearSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/years" element={<Years />} />
        <Route path="/years/:yearId" element={<YearSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
