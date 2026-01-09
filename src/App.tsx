import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Years from './pages/Years';
import YearSummary from './pages/YearSummary';
import Principles from "./pages/Principles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/years" element={<Years />} />
        <Route path="/years/:yearId" element={<YearSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
