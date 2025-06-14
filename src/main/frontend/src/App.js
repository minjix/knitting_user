import "./App.css";
import "./bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/generate_css.css";
import "./css/pagination-reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Layout from "./module/Layout.js";
import JoinMem from "./components/JoinMem.js";
import FindMem from "./components/FindMem.js";
import FindMemRes from "./components/FindMemRes.js";
import ChgPw from "./components/ChgPw.js";
import MyKnits from "./components/MyKnits.js";
import MyKnitsReg from "./components/MyKnitsReg.js";
import MyKnitsDetail from "./components/MyKnitsDetail.js";
import FriendKnits from "./components/FriendKnits.js";
import FreKnitsDetail from "./components/FreKnitsDetail.js";
import MyPage from "./components/MyPage.js";

function App() {
  const [token, setToken] = useState(() => sessionStorage.getItem("token"));

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/login"
          element={<Login onLogin={(newToken) => setToken(newToken)} />}
        />
        <Route path="join" element={<JoinMem />} />
        <Route path="find" element={<FindMem />} />
        <Route path="findMemRes" element={<FindMemRes />} />
        <Route path="findPW" element={<ChgPw />} />
      </Route>

      <Route
        path="/"
        element={token ? <Main /> : <Navigate to="/login" replace />}
      >
        <Route index element={<MyKnits />} />
        <Route path="myknits" element={<MyKnits />} />
        <Route path="myknitsreg" element={<MyKnitsReg />} />
        <Route path="myknitsdetail" element={<MyKnitsDetail />} />
        <Route path="freknits" element={<FriendKnits />} />
        <Route path="fredetail" element={<FreKnitsDetail />} />
        <Route path="myPage" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
