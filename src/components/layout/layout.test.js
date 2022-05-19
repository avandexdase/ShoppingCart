import React from 'react';
import renderer from 'react-test-renderer';
import MainLayout from './MainLayout';

it('<footer />', () => {
  const component = renderer.create(
    <MainLayout />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});