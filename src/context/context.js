import React, { useContext, createContext, useState, useEffect } from "react";
import userData from "./mockData.js/mockUser";
import reposData from "./mockData.js/mockRepos";
import followersData from "./mockData.js/mockFollowers";
import axios from "axios";

const API_URL = "https://api.github.com";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(userData);
  const [repos, setRepos] = useState(reposData);
  const [followers, setFollowers] = useState(followersData);
  const [requests, setRequests] = useState({ limit: 60, remaining: 60 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");

  const getUser = async (user) => {
    // try {
    setIsLoading(true);
    const userResp = await axios(`${API_URL}/users/${user}`).catch((err) => {
      setError({ show: true, msg: "User not found" });
    });

    if (userResp) {
      setError({ show: false, msg: "" });
      const userData = userResp.data;
      const { followers_url, repos_url } = userData;
      setUser(userData);

      await Promise.allSettled([
        axios(`${followers_url}?per_page=100`),
        axios(repos_url),
      ])
        .then((resp) => {
          const [followersResp, reposResp] = resp;
          const status = "fulfilled";
          if (followersResp.status === status && reposResp.status === status) {
            setFollowers(followersResp.value.data);
            setRepos(reposResp.value.data);
          } else {
            throw new Error("Error fetching data for followers and repos");
          }
        })
        .catch((err) => {
          setError({ show: true, msg: err.message });
        });
      setIsLoading(false);
    }
  };

  const getRequests = async () => {
    const response = await axios(`${API_URL}/rate_limit`);
    const { limit, remaining } = response.data.rate;
    setRequests({ limit, remaining });
  };

  const handleSubmit = (e, q) => {
    e.preventDefault();
    getUser(q);
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <AppContext.Provider
      value={{
        user,
        followers,
        repos,
        handleSubmit,
        requests,
        error,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGloblaContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
