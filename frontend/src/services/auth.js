import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Set token in local storage and Axios headers
const setToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Initialize token from localStorage
const initToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
  }
};

// Register new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    const { token, user } = response.data;
    setToken(token);
    return user;
  } catch (error) {
    throw error.response?.data?.error || 'Registration failed';
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    const { token, user } = response.data;
    setToken(token);
    return user;
  } catch (error) {
    throw error.response?.data?.error || 'Login failed';
  }
};

// Logout user
export const logoutUser = () => {
  setToken(null);
};

// Get current user
export const getCurrentUser = async () => {
  try {
    // Initialize token from localStorage
    initToken();
    
    const response = await axios.get(`${API_URL}/auth/user`);
    return response.data;
  } catch (error) {
    // If token is invalid or expired, clear it
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      setToken(null);
    }
    throw error;
  }
};