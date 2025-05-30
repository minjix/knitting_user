import "./App.css";
import "./bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/generate_css.css";
import "./css/pagination-reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initMDB } from "mdb-ui-kit";
import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Layout from "./module/Layout.js";
import JoinMem from "./components/JoinMem.js";
import FindMem from "./components/FindMem.js";
import FindMemRes from "./components/FindMemRes.js";
import ChgPw from "./components/ChgPw.js";

function App() {
  useEffect(() => {
    initMDB();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="join" element={<JoinMem />} />
        <Route path="find" element={<FindMem />} />
        <Route path="findMemRes" element={<FindMemRes />} />
        <Route path="findPW" element={<ChgPw />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
