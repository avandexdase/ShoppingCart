import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './index';

it('<TextInput />', () => {
  const onChangeHandler = jest.fn();
  const onBlurHandler = jest.fn();
  const field = {
    name: 'abc',
    value: 'ram',
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
  };
  const form = { touched: 'false', errors: '' };
  const label = 'name';
  const component = renderer.create(
    <TextInput field={field} form={form} label={label} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
