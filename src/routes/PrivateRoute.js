// src/routes/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('Aryan'); // Example check for authentication
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
