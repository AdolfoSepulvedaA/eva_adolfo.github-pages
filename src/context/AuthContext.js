// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setLoggedIn(true);
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setLoggedIn(true);
    setCurrentUser(user);
    navigate('/perfil'); // Redirect to profile after login
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setLoggedIn(false);
    setCurrentUser(null);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <AuthContext.Provider value={{ loggedIn, currentUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
