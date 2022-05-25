import React from 'react';
import Categories from './categories';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
const data = {
  name: 'Beverages',
  key: 'beverages',
  description:
    'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
  enabled: true,
  order: 3,
  imageUrl: '/static/images/category/beverages.png',
  id: '5b675e5e5936635728f9fc30',
};

describe('<Categories/>', () => {
  test('test product name displayed correctly', () => {
    render(
      <BrowserRouter>
        <Categories data={data} />
      </BrowserRouter>
    );
    const name = screen.getByTestId('homecategoryName');
    expect(name).toBeInTheDocument();
    expect(screen.getByTestId('homecategoryDesc')).toBeInTheDocument();
  });
  test('test image displayed correctly', () => {
    render(
      <BrowserRouter>
        <Categories data={data} />
      </BrowserRouter>
    );
    const image = screen.getByAltText('Beverages');
    expect(image).toHaveAttribute(
      'src',
      '/static/images/category/beverages.png'
    );
  });
});
