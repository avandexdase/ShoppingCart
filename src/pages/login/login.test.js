import React from 'react';
import { getByTestId, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<login />', () => {
  test('test title of form field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByTestId('customFormTitle')).toHaveTextContent('Login');
  });
  test('test description of form field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByTestId('customFormDescription')).toHaveTextContent(
      'Get Access to your Orders, Wishlist and Recommendations'
    );
  });
  it('test value enter in input field', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const email = getByTestId('email');
    const password = getByTestId('password');

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });
    expect(getByTestId('email').value).toEqual('user@test.com');
    expect(getByTestId('password').value).toEqual('Test1234');
  });
});
