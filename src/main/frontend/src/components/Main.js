import { Routes, Route } from "react-router-dom";
import MainNav from "./../module/MainNav.js";
import MyKnits from "./MyKnits.js";
import FriendKnits from "./FriendKnits.js";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<MainNav />}>
        <Route index element={<MyKnits />} />
        <Route path="/myknits" element={<MyKnits />} />
        <Route path="freknits" element={<FriendKnits />} />
      </Route>
    </Routes>
  );
}

export default Main;
