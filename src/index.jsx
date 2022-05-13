import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { ThemeProvider } from './context/themeContext';
import './style.scss';
import { CartProvider } from './context/cartContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </ThemeProvider>
);
