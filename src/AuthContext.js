import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(""); // Add username state

  const login = (receivedToken, receivedUsername) => {
    setToken(receivedToken);
    setUsername(receivedUsername); // Store username
    setLoggedIn(true);
  };

  const logout = () => {
    setToken(null);
    setUsername(""); // Clear username
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, token, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
