import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartFooter from './cartFooter';
import '@testing-library/jest-dom/extend-expect';

const cartItems = [
  {
    name: 'Fresho Kiwi - Green, 3 pcs',
    imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
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

describe('<CartFooter />', () => {
  const handleClick = jest.fn();

  test('display Total cart value', () => {
    render(
      <CartFooter
        cartItems={cartItems}
        handleClick={handleClick}
        cartTotalValue="0"
      />
    );
    expect(screen.getByTestId('totalCartValue')).toHaveTextContent('0');
  });

  test('display promo text', () => {
    render(
      <CartFooter
        cartItems={cartItems}
        handleClick={handleClick}
        cartTotalValue="0"
      />
    );
    expect(screen.getByTestId('cartPromoText')).toHaveTextContent(
      'Promocode can be applied on payment page'
    );
  });

  test('calls onClick prop when clicked', () => {
    render(
      <CartFooter
        cartItems={cartItems}
        handleClick={handleClick}
        cartTotalValue="0"
      />
    );
    const cartBtn = screen.getByTestId('cartNavigateBtn');
    fireEvent.click(cartBtn);
    expect(screen.getByTestId('cartNavigateBtn')).toHaveTextContent('0');
  });

  test('if there is no cartItems added in cart', () => {
    render(
      <CartFooter cartItems={[]} handleClick={handleClick} cartTotalValue="0" />
    );
    expect(screen.getByTestId('noItemInCart')).toHaveTextContent(
      'start shopping'
    );
  });
});
