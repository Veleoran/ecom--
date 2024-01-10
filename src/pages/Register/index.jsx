import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import Typography from "../../common/Typography";

const RegisterPage = () => {
  return (
    <div className="mt-20 bg-dark-primary p-20">
      <Typography/>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
