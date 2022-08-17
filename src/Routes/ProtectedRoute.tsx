import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  const auth = token && token !== "undefined" ? true : false;
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default ProtectedRoute