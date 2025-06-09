import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './views/Login.jsx';
import { Callback } from './views/Callback.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} /> {/* O tu dashboard */}
      </Routes>
    </BrowserRouter>
  );
}
