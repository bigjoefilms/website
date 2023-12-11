// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
 

  const login = (receivedToken) => {
    // Set the received token to the state
    setToken(receivedToken);
    // Update the isLoggedIn state to true
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic and set isLoggedIn to false
    setToken(null);
    setLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{ loggedIn,login,token,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
