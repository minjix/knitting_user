import { Outlet, useNavigate } from "react-router-dom";
import knittingIcon from "./../icon/knitting_icon.png";
import homeBtnIcon from "./../icon/home_btn_icon.png";

function Layout() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <div
        className="homeBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={homeBtnIcon} alt="홈버튼" />
      </div>
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
