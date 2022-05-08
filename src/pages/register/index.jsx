import React from 'react';
import CustomForm from '../../components/CustomForm';
import { registerFields, registerInitValues } from './registerFields';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

function Register() {
  const navigate = useNavigate();
  const handleRegister = async (values, actions) => {
    try {
      const { confirm_password, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      console.log('res', res.data);
      actions.resetForm();
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-8 py-8 px-8">
      <CustomForm
        initialValues={registerInitValues}
        onSubmit={handleRegister}
        fields={registerFields}
        btnTitle="Sign Up"
        pagedescription="We do not share your personal details with anyone."
      />
    </div>
  );
}

export default Register;
