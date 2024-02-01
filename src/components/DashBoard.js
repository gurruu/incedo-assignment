// Dashboard.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import DashboardHome from './DashBoardHome';
import DashboardProfile from './DashBoardProfile';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="home">Dashboard Home</Link>
          </li>
          <li>
            <Link to="profile">Dashboard Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="home" element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
