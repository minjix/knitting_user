import { Outlet, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* 1) 고정 헤더 */}
      <header
        className="navbar bg-custom-header fixed-top d-flex justify-content-center align-items-center"
        style={{ height: "56px" }}
      >
        <h1 className="navbar-brand mb-0">Knitting Record</h1>
        {/* <button
          className="navbar-toggler position-absolute end-0 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </header>

      {/* 2) 네비게이션 (옵션) */}
      <nav
        className="navbar navbar-expand fixed-top bg-white"
        style={{ top: "56px", borderBottom: "none", padding: "0" }}
      >
        <div className="container-fluid px-0">
          <div
            className="collapse navbar-collapse justify-content-around"
            id="mainNav"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-around">
              {/* 1) 홈 메뉴 */}
              <li className="nav-item">
                <Link className="nav-link" to="/myknits">
                  home
                </Link>
              </li>

              {/* 2) 혼자뜨개 메뉴 */}
              <li className="nav-item">
                <Link className="nav-link" to="/myknits">
                  혼자뜨개
                </Link>
              </li>

              {/* 3) 같이뜨개 메뉴 */}
              <li className="nav-item">
                <Link className="nav-link" to="/freknits">
                  같이뜨개
                </Link>
              </li>

              {/* 4) MyPage 드롭다운 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="mypageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MyPage
                </a>
                <ul className="dropdown-menu" aria-labelledby="mypageDropdown">
                  {/* <li>
                    <Link
                      className="dropdown-item nav-font"
                      to="/mypage/profile"
                    >
                      프로필
                    </Link>
                  </li> */}
                  <li>
                    <Link className="dropdown-item nav-font" to="/myPage">
                      설정
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item nav-font" to="/logout">
                      로그아웃
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main-content container" style={{ marginTop: "56px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
