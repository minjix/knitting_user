import "./App.css";
import "./bootstrap.min.css";
import "./css/generate_css.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Layout from "./Layout.js";
import JoinMem from "./components/JoinMem.js";
import FindMem from "./components/FindMem.js";
import FindMemRes from "./components/FindMemRes.js";
import ChgPw from "./components/ChgPw.js";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="join" element={<JoinMem />} />
        <Route path="find" element={<FindMem />} />
        <Route path="findMemRes" element={<FindMemRes />} />
        <Route path="findPW" element={<ChgPw />} />
      </Route>
    </Routes>
  );
}

export default App;
