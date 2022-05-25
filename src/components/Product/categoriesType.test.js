import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import CategoryType from './categoriesType';
import { fireEvent } from '@testing-library/dom';

const data = [
  {
    name: 'Beverages',
    key: 'beverages',
    description:
      'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
    enabled: true,
    order: 3,
    imageUrl: '/static/images/category/beverages.png',
    id: '5b675e5e5936635728f9fc30',
  },
  {
    name: 'Bakery Cakes and Dairy',
    key: 'bakery-cakes-dairy',
    description:
      'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
    enabled: true,
    order: 2,
    imageUrl: '/static/images/category/bakery.png',
    id: '5b6899123d1a866534f516de',
  },
];
describe('<categoryType/>', () => {
  const loadCondProductData = jest.fn();
  test('displayed the category', () => {
    const { getByTestId, asFragment } = render(
      <CategoryType
        data={data}
        selectedCategory=""
        loadCondProductData={loadCondProductData}
      />
    );
    const listNode = getByTestId('categoryUl');
    expect(listNode.children).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });
  test('test onclick of filtered data', () => {
    const { getByTestId, asFragment } = render(
      <CategoryType
        data={data}
        selectedCategory=""
        loadCondProductData={loadCondProductData}
      />
    );
    fireEvent.click(getByTestId('bakery-cakes-dairy'));
    expect(loadCondProductData).toHaveBeenCalledTimes(1)
  });
});
