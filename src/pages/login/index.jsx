import React from 'react';
import CustomForm from '../../components/CustomForm';
import { loginFields, loginInitValues } from './loginFields';

function Login() {
  return (
    <div className="grid grid-cols-8 py-8 px-8">
      <div className="col-start-2 col-span-3">
        <h1 className="text-2xl font-bold tracking-tight mb-6">Login</h1>
        <p className="lg:text-sm tracking-tight text-xs">
          Get Access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div className="col-start-5 col-end-7">
        {' '}
        <CustomForm
          initialValues={loginInitValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          fields={loginFields}
          btnTitle="Login"
        />
      </div>
    </div>
  );
}

export default Login;
