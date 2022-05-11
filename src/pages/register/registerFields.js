import TextInput from '../../components/TextInput';

export const requiredValidate = (value) => {
  if (!value) {
    return 'Required....';
  }
  return '';
};

export const requiredValidatePsw = (value) => {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!value) {
    return 'Required....';
  } else if(value.lenght <= 6) {
    return 'Please enter strong password'
  } else if(!value.match(passw)){
    return 'Please include one uppercase, number and special character'
  }
  return '';
};

export const compareValidate = (value, compareValue) => {
  if (value !== compareValue) {
    return 'not matched...';
  }
  return '';
};

export const registerInitValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
};

export const registerFields = [
  {
    component: TextInput,
    name: 'first_name',
    autoComplete: 'given-name',
    label: 'First Name',
    validate: requiredValidate,
  },
  {
    component: TextInput,
    name: 'last_name',
    autoComplete: 'family-name',
    label: 'Last Name',
    validate: requiredValidate,
  },
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
    autoComplete: 'new-password',
    label: 'Password',
    type: 'password',
    validate: requiredValidatePsw,
  },
  {
    component: TextInput,
    name: 'confirm_password',
    autoComplete: 'new-password',
    label: 'Confirm Password',
    type: 'password',
    validate: (value) =>
    requiredValidatePsw(value) || compareValidate(value, password.value),
  },
];
