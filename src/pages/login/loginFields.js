import TextInput from '../../components/TextInput';

export const requiredValidate = (value) => {
  if (!value) {
    return 'Required....';
  }
  return '';
};

export const compareValidate = (value, compareValue) => {
  if (value !== compareValue) {
    return 'not matched...';
  }
  return '';
};

export const loginInitValues = {
  email: '',
  password: '',
};

export const loginFields = [
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
