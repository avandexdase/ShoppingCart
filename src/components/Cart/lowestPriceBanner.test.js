import React from 'react';
import renderer from 'react-test-renderer';
import LowestPriceBanner from './lowestPriceBanner';

it('LowestPriceBanner', () => {
  const component = renderer.create(
    <LowestPriceBanner />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});