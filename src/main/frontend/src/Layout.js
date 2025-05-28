import { Outlet } from "react-router-dom";
import knittingIcon from "./icon/knitting_icon.png";

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h2>Knitting Record</h2>
          <img src={knittingIcon} alt="뜨개 아이콘" />
        </div>
      </header>
      <div className="App-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
