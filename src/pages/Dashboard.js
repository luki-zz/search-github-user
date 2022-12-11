import React from "react";
import { useGloblaContext } from "../context/context";
import { Info, Repos, User, Search, Navbar, Loading } from "../components";

const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
    </main>
  );
};

export default Dashboard;
