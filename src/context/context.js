import React, { useContext, createContext, useState } from "react";
import userData from "./mockData.js/mockUser";
import reposData from "./mockData.js/mockRepos";
import followersData from "./mockData.js/mockFollowers";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(userData);
  const [repos, setRepos] = useState(reposData);
  const [followers, setFollowers] = useState(followersData);
  return (
    <AppContext.Provider value={{ user, followers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGloblaContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
