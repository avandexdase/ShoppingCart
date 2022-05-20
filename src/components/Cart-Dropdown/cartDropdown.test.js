import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartDropdown from './cart-dropdown';
import '@testing-library/jest-dom/extend-expect';
import { CartContext } from '../../context/cartContext';
import CartItem from '../Cart/cartItem';
import '../../styles/index.scss';
import CartFooter from '../Cart/cartFooter';
import LowestPriceBanner from '../Cart/lowestPriceBanner';
import Close from '../../icons/close';
import { BrowserRouter } from 'react-router-dom';

const cartItems = [
  {
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
  },
];
const isCartOpen = false;
const cartTotalValue = 87;
const setIsCartOpen = jest.fn();
describe('<CartDropdown />', () => {
  test('display MyCart', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider
          value={{ cartItems, isCartOpen, setIsCartOpen, cartTotalValue }}
        >
          <CartDropdown />
        </CartContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('cart-dropdown-myCartText')).toHaveTextContent(
      'My Cart'
    );
  });
  test('component handles button click', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider
          value={{ cartItems, isCartOpen, setIsCartOpen, cartTotalValue }}
        >
          <CartDropdown />
        </CartContext.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('cart_dropdown_closeBtn'));
    expect(setIsCartOpen).toHaveBeenCalledTimes(1);
  });
});
