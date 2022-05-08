import React from 'react';
import CustomForm from '../../components/CustomForm';
import { useNavigate } from 'react-router-dom';
import { loginFields, loginInitValues } from './loginFields';
import axiosInstance from '../../utils/axiosInstance';

function Login() {
  const navigate = useNavigate();
  function btnSubmit() {}
  const handleLogin = async (values, actions) => {
    try {
      const res = await axiosInstance.post('/login', {
        email: values.email,
        password: values.password,
      });
      console.log('res', values, res.data);
      actions.resetForm();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-8 py-8 px-8">
      <CustomForm
        initialValues={loginInitValues}
        onSubmit={handleLogin}
        fields={loginFields}
        btnTitle="Login"
        pagedescription="Get Access to your Orders, Wishlist and Recommendations"
      />
    </div>
  );
}

export default Login;
