import React from 'react';
import CustomForm from '../../components/CustomForm';
import { registerFields, registerInitValues } from './registerFields';

function Register() {
  return (
    <CustomForm
      initialValues={registerInitValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      fields={registerFields}
      btnTitle="Sign Up"
    />
  );
}

export default Register;
