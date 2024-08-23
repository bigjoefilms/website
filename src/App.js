import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import Verify from './routes/Verify';
import { Plant } from './routes/Plant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/verify/:userId" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plant" element={<Plant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
