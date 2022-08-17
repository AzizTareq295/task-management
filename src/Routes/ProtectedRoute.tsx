import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const token = localStorage.getItem("tokens");
  const auth = token && token !== "undefined" ? true : false;
  
  return auth ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default ProtectedRoute