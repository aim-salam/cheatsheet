import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const AsideContext = createContext();

// 2. Create the provider component
export const AsideProvider = ({ children }) => {
  const [isAside, setIsAside] = useState(true);

  return (
    <AsideContext.Provider value={{ isAside, setIsAside }}>
      {children}
    </AsideContext.Provider>
  );
};

// 3. Create a custom hook for easier use of the context
export const useAside = () => {
  return useContext(AsideContext);
};
