import React, { createContext, useState, useEffect } from 'react';

const addCartItems = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) =>
      cartItem.id !== productToRemove.id
    );
  }
  return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState(0);
  useEffect(()=>{
    const newCartCount = cartItems.length;
    setCartCount(newCartCount);
    const total = cartItems.reduce((sum,curr)=>{
      sum+=(curr.quantity*curr.price)
      return sum;
    }, 0);
    setCartTotalValue(total)
  },[cartItems])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };
  const value = { addItemToCart, cartItems, isCartOpen, setIsCartOpen, cartCount, removeItemFromCart, cartTotalValue };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
