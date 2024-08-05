import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import Home from './Screens/Home/Home';
import Product from './Screens/Product/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;

