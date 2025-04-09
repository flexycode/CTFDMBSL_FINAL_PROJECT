import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '../services/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.log("Not authenticated or server not available");
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);
  
  const login = async (email, password) => {
    try {
      setError(null);
      const user = await loginUser(email, password);
      setCurrentUser(user);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  const register = async (userData) => {
    try {
      setError(null);
      const user = await registerUser(userData);
      setCurrentUser(user);
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  
  const logout = () => {
    logoutUser();
    setCurrentUser(null);
  };
  
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}