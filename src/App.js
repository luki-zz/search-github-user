import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Error, PrivateRoute } from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
