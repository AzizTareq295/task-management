import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem("tokens");
  const auth = token && token !== "undefined" ? true : false;
  
  return !auth ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PublicRoute