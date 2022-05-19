import React from 'react';
import renderer from 'react-test-renderer';
import LowestPriceBanner from './lowestPriceBanner';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <LowestPriceBanner />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});