import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainLayout from '../layout/MainLayout';

it('<MainLayout />', () => {
  const component = renderer.create(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
