import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Dasboard from './routes/Dasboard';
import Verify from './routes/Verify';
// import { Overview } from './routes/Overview';
import { Plant } from './routes/Plant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/:userId" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/overview" element={<Dasboard/>} />
        <Route path="/verify/:userId" element={<Verify/>} />
        <Route path="/dashboard/:userId" element={<Dasboard/>} />
        <Route path="/plant" element={<Plant/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

