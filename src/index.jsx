import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { CartProvider } from './context/cartContext';
import { AuthProvider } from './context/authContext';
import swDev from './swDev';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
swDev();
