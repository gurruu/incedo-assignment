// App.js
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/DashBoard';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />

        {/* Nested Routing */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
