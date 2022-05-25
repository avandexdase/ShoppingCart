import React from 'react';
import Product from './index';
import { render, waitForElement, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const data = {
  name: 'Fresho Kiwi - Green, 3 pcs',
  imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
  description:
    'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
  price: 87,
  stock: 50,
  category: '5b6899953d1a866534f516e2',
  sku: 'fnw-kiwi-3',
  id: '5b6c6a7f01a7c38429530883',
};

describe('<product/>', () => {
  test('test product name displayed correctly', () => {
    render(<Product product={data} />);
    const name = screen.getByTestId('productCardName');
    expect(screen.getByTestId('productCardName')).toBeInTheDocument();
  });
  test('test product image displayed correctly', () => {
    render(<Product product={data} />);
    const image = screen.getByAltText('Fresho Kiwi - Green, 3 pcs');
    expect(image).toHaveAttribute(
      'src',
      '/static/images/products/fruit-n-veg/kiwi-green.jpg'
    );
  });
});
