import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('user'));

  const login = async (email, password) => {
    try {
      const response = await fetch('https://agrolux.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user to localStorage
        setUser(data.user);
        setLoggedIn(true);
        return { success: true }; // Indicate successful login
      } else {
        console.error('Login failed:', data.message);
        setLoggedIn(false);
        return { success: false, message: data.message }; // Indicate failed login
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoggedIn(false);
      return { success: false, message: 'An unexpected error occurred.' }; // Indicate failed login
    }
  };

  const register = async (firstName, email, password) => {
    try {
      const response = await fetch('https://agrolux.onrender.com/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user to localStorage
        setUser(data.user);
        setLoggedIn(true);
        return { success: true }; // Indicate successful registration
      } else {
        console.error('Registration failed:', data.message);
        return { success: false, message: data.message }; // Indicate failed registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { success: false, message: 'An unexpected error occurred.' }; // Indicate failed registration
    }
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    setUser(null);
    setLoggedIn(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
