import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Rotate as Hamburger } from 'hamburger-react';
import { AuthContext } from '../context/AuthContext'; 
import Typography from "../common/Typography";
import cartIcon from "../assets/icons/CartIcon.svg";
import profileIcon from "../assets/icons/ProfileIcon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext); 

  const paths = [
    { path: "/", name: "Accueil" },
    { path: "/nos-produits", name: "Nos produits" },
    { path: "/connexion", name: "Connexion" },
    { path: "/inscription", name: "Inscription" }
  ];
  const isLoggedIn = user !== null;

  return (
    
    <div className="flex items-center justify-between">
        <ul className="hidden md:flex flex-row gap-6 items-center">
          {paths.map((element) => (
            <NavLink to={element.path} key={element.path} className={({ isActive }) => isActive ? 'underline' : ''}>
              <Typography tag="li" variant="primary">{element.name}</Typography>
            </NavLink>
          ))}
          <NavLink to="/mon-compte" className="flex items-center">
            <img src={profileIcon} alt="Voir mon profil" className="h-6 mr-2" />
          </NavLink>
          <NavLink to="/panier" className="flex items-center">
            <img src={cartIcon} alt="Se rendre au panier" className="h-6 mr-2" />0
          </NavLink>
        </ul>
        <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>



        {isOpen && (
        <div className="md:hidden w-full text-center flex flex-col list-none">
          {paths.map((element) => (
            <NavLink to={element.path} key={element.path} onClick={() => setIsOpen(false)} className="py-2">
              <Typography tag="li" variant="primary">{element.name}</Typography>
            </NavLink>
          ))}
          <NavLink to="/mon-compte" onClick={() => setIsOpen(false)} className="py-2">
            <Typography tag="li" variant="primary">Mon compte</Typography>
          </NavLink>
          <NavLink to="/panier" onClick={() => setIsOpen(false)} className="py-2">
            <Typography tag="li" variant="primary">Mon panier</Typography>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;