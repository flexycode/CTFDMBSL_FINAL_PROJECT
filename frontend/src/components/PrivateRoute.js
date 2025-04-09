import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, admin = false }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  
  if (admin && (!currentUser.role || currentUser.role !== 'admin')) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default PrivateRoute;