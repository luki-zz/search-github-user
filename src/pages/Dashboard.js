import React from "react";
import { useGloblaContext } from "../context/context";
import { Info, Repos, User, Search, Navbar, Loading } from "../components";

const Dashboard = () => {
  const { isLoading } = useGloblaContext();
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
