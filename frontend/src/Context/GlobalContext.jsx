import React, { createContext, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };
