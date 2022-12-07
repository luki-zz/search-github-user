import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Error } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
