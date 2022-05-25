import React from 'react';
import { getByTestId, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<register />', () => {
  test('test title of form field', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByTestId('customFormTitle')).toHaveTextContent('Sign Up');
  });
  test('test description of form field', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByTestId('customFormDescription')).toHaveTextContent(
      'We do not share your personal details with anyone.'
    );
  });
  it('test value enter in input field', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
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
