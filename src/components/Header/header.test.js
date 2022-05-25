import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './index';
import '@testing-library/jest-dom';

describe('<Header/>', () => {
  it('rendering Header', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
