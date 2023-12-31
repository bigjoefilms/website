import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './store'; 
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <AuthProvider>
      <App />
    </AuthProvider>
 
  </React.StrictMode>
);
