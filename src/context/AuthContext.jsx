import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  user: null,
  setUser: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('jwt') || null);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};