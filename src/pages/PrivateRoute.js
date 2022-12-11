import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../components";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  } else {
    if (!isAuthenticated) {
      return <Navigate to="login" />;
    }
  }
  return children;
};

export default PrivateRoute;
