import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for easier use of the context
export const useAuth = () => {
  return useContext(AuthContext);
};
