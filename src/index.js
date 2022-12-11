import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0config = {
  domain: "dev-3js0jnfn3mzg07rm.us.auth0.com",
  clientId: "OEKth2HphZ5LRko2V02DxXJnqDenj12m",
  redirectUri: window.location.origin,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider {...auth0config}>
        <AppProvider>
          <App />
        </AppProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
