import React, { useContext, createContext, useState } from "react";
import userData from "./mockData.js/mockUser";
import reposData from "./mockData.js/mockRepos";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(userData);
  const [repos, setRepos] = useState(reposData);
  return (
    <AppContext.Provider value={{ user, repos }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGloblaContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
