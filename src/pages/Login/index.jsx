import React from 'react';
import LoginForm from '../../components/LoginForm';
import Typography from "../../common/Typography";

const LoginPage = () => {
  return (
    <div className="page-container">
      <Typography variant="white" tag="h1" customClasses="text-4xl font-semibold mb-4">
        Page de connexion
      </Typography>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
