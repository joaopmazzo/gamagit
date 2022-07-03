import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';
import Repositories from './pages/Repositories/index';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}