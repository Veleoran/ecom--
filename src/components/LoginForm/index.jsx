import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from "../../common/InputWithLabel";
import Typography from "../../common/Typography";
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {
  const formRef = useRef(null);
  const [error, setError] = useState(null);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log('Tentative de connexion avec :', loginData);

    try {
      const response = await fetch('https://passerelle-shop-api.julienpoirier-webdev.com/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const responseBody = await response.text();
        throw new Error(responseBody);
      }
      const data = await response.json();
      localStorage.setItem('jwt', data.jwt);
      setUser(data.jwt); 
      navigate('/nos-produits'); 
    
      console.log('Connexion réussie :', data);

    } catch (error) {
        setError("Erreur de connexion");
        console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div className="mt-20 bg-dark-primary p-20">
      <Typography variant="white" tag="h1" customClasses="text-4xl font-semibold mb-4 text-center">Se connecter</Typography>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={formRef} onSubmit={handleSubmit}>
          <InputWithLabel label="Email" name="email" id="email" type="email" autocomplete="username" />
          <InputWithLabel label="Mot de passe" name="password" id="password" type="password" autocomplete="current-password" />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;