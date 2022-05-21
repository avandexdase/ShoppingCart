import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  storeToken: () => {},
});
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function storeToken(res) {
    sessionStorage.setItem('token', res);
    if (res) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }

  const value = {
    isAuthenticated,
    storeToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
