// myForm.test.js
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CustomForm from './index';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import TextInput from '../TextInput';

describe('<CustomForm />', () => {
  const handleLogin = jest.fn();
  const loginInitValues = {
    email: '',
    password: '',
  };
  test('test title of form field', () => {
    render(
      <CustomForm
        initialValues={loginInitValues}
        onSubmit={handleLogin}
        fields={[]}
        btnTitle="Login"
        pagedescription="Get Access to your Orders, Wishlist and Recommendations"
      />
    );
    expect(screen.getByTestId('customFormTitle')).toHaveTextContent('Login');
  });
  test('calling login function on onSubmit', async () => {
    const handleLogin = jest.fn();
    handleLogin.mockReturnValue({
      email: 'john@rendomemail.com',
      password: 'qwer',
    });
    const requiredValidate = jest.fn();
    const fields = [
      {
        component: TextInput,
        name: 'email',
        autoComplete: 'email',
        label: 'Email',
        validate: requiredValidate,
        type: 'email',
      },
      {
        component: TextInput,
        name: 'password',
        autoComplete: 'current-password',
        label: 'Password',
        type: 'password',
        validate: requiredValidate,
      },
    ];
    render(
      <CustomForm
        initialValues={loginInitValues}
        onSubmit={handleLogin}
        fields={fields}
        btnTitle="Login"
        pagedescription="Get Access to your Orders, Wishlist and Recommendations"
      />
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/email/i), 'john@rendomemail.com');
    await user.type(screen.getByLabelText(/password/i), 'qwer');
    await user.click(screen.getByRole('button'));
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });
});
