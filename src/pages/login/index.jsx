import React, { useContext } from 'react';
import CustomForm from '../../components/CustomForm';
import { useNavigate } from 'react-router-dom';
import { loginFields, loginInitValues } from './loginFields';
import axiosInstance from '../../utils/axiosInstance';
import { AuthContext } from '../../context/authContext';

function Login() {
  const navigate = useNavigate();
  const { storeToken } = useContext(AuthContext);
  const handleLogin = async (values, actions) => {
    try {
      const res = await axiosInstance.post('/login', {
        email: values.email,
        password: values.password,
      });
      storeToken(res.data.accessToken);
      actions.resetForm();
      navigate('/home');
    } catch (error) {}
  };
  return (
    <div id="login" className="container">
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
