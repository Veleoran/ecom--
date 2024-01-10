import React, { useRef, useState } from 'react';
import InputWithLabel from "../../common/InputWithLabel";
import Typography from "../../common/Typography";

const AddressForm = () => {
    return (
      <div className="mb-4">
        <InputWithLabel label="Adresse" name="addressLine1" id="addressLine1" />
        <InputWithLabel label="Ville" name="city" id="city" />
        <InputWithLabel label="Etat" name="state" id="state" />
        <InputWithLabel label="Code postal" name="postalCode" id="postalCode" />
        <InputWithLabel label="Pays" name="country" id="country" />
      </div>
    );
  };
  
  const PersonalForm = () => {
    return (
      <div className="mb-4">
        <InputWithLabel label="Votre nom" name="name" id="name" />
        <InputWithLabel label="Email" name="email" id="email" type="email" />
        <InputWithLabel label="Mot de passe" name="password" id="password" type="password" />
        <InputWithLabel label="Confirmation du mot de passe" name="passwordConfirm" id="passwordConfirm" type="password" />
      </div>
    );
  };

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const fields = ["name", "email", "password", "passwordConfirm", "addressLine1", "city", "state", "postalCode", "country"];
    for (let field of fields) {
      if (!formData.get(field)) {
        setError(`Le champ ${field} est requis`);
        return;
      }
    }

    // Validation des données
    if(formData.get("password") !== formData.get("passwordConfirm")) {
      setError("Les mots de passe ne sont pas identiques");
      return;
    }
    if(!formData.get("email").includes("@")) {
      setError("L'email n'est pas valide");
      return;
    }

    // Construction du corps de la requête
    const requestBody = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      address: { 
        addressLine1: formData.get("addressLine1"),
        city: formData.get("city"),
        state: formData.get("state"),
        postalCode: formData.get("postalCode"),
        country: formData.get("country")
      }
    };

    // Envoi de la requête
    try {
      const response = await fetch("http://passerelle-shop-api.julienpoirier-webdev.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error("Échec de l'inscription");
      }

      const data = await response.json();
      console.log("Inscription réussie :", data);
      // Gérer la réussite de l'inscription (redirection, etc.)
    } catch (error) {
      console.error("Erreur d'inscription :", error);
    }
  };

  return (
    <div className="m-16 mt-20 bg-dark-primary p-20">
      <Typography variant="white" tag="h1" customClasses="text-4xl font-semibold mb-4 text-center">Inscription</Typography>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={formRef} onSubmit={handleRegister}>
          <PersonalForm />
          <AddressForm />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Inscription</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
