import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import LocationSearch from './components/LocationSearchInput'; // Update to real file name

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<LocationSearch />} /> {/* <- Fixed */}
      <Route
        path="/dashboard"
        element={token ? <HomeDashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
