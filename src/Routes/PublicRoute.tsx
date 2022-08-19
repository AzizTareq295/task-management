import React from 'react'
import { useAppSelector } from 'Hooks/reduxHelper';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PublicRoute