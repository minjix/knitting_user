import "./App.css";
import "./bootstrap.min.css";
import "./css/generate_css.css";
import Login from "./components/Login.js";
import Layout from "./Layout.js";
import JoinMem from "./components/JoinMem.js";
import FindMem from "./components/FindMem.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="join" element={<JoinMem />} />
        <Route path="find" element={<FindMem />} />
      </Route>
    </Routes>
  );
}

export default App;
