import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Cart from './pages/cart';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';
import "./styles/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
