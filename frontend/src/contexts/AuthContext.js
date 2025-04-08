import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '../services/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, []);
  
  const login = async (email, password) => {
    const user = await loginUser(email, password);
    setCurrentUser(user);
    return user;
  };
  
  const register = async (userData) => {
    const user = await registerUser(userData);
    setCurrentUser(user);
    return user;
  };
  
  const logout = async () => {
    await logoutUser();
    setCurrentUser(null);
  };
  
  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}