import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { CartProvider } from './context/cartContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
);
