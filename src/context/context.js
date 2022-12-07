import React, { useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

export const useGloblaContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
