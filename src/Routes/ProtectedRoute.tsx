import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from 'Hooks/reduxHelper';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const location = useLocation();
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default ProtectedRoute