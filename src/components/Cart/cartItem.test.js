import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './cartItem';
import '@testing-library/jest-dom/extend-expect';
import '../../styles/cartItem.scss';
import { CartContext } from '../../context/cartContext';
import { BrowserRouter } from 'react-router-dom';

const cartItem = {
  name: 'Fresho Kiwi - Green, 3 pcs',
  imageURL: '../../../static/images/products/fruit-n-veg/kiwi-green.jpg',
  description:
    'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
  price: 87,
  stock: 50,
  category: '5b6899953d1a866534f516e2',
  sku: 'fnw-kiwi-3',
  id: '5b6c6a7f01a7c38429530883',
  quantity: 1,
};
describe('<CartItem />', () => {

  test('display item name', () => {
    render(<CartItem cartItem={cartItem} />);
    expect(screen.getByTestId('cartItemName')).toHaveTextContent(
      'Fresho Kiwi - Green, 3 pcs'
    );
  });
  test('remove item on button click', () => {
    const addItemToCart = jest.fn();
    const removeItemFromCart = jest.fn();
    render(
      <BrowserRouter>
        <CartContext.Provider
          value={{  addItemToCart, removeItemFromCart }}
        >
         <CartItem cartItem={cartItem} />
        </CartContext.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('decrementCartBtn'));
    expect(removeItemFromCart).toHaveBeenCalledTimes(1);
  });
  test('adds item on button click', () => {
    const addItemToCart = jest.fn();
    const removeItemFromCart = jest.fn();
    render(
      <BrowserRouter>
        <CartContext.Provider
          value={{  addItemToCart, removeItemFromCart }}
        >
         <CartItem cartItem={cartItem} />
        </CartContext.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('incrementCartBtn'));
    expect(addItemToCart).toHaveBeenCalledTimes(1);
  });
});
