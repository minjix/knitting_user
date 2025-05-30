import { Outlet } from "react-router-dom";

function MainNav() {
  return (
    <div>
      {/* 1) 고정 헤더 */}
      <header
        className="navbar bg-custom-header fixed-top d-flex justify-content-center align-items-center"
        style={{ height: "56px" }}
      >
        <h1 className="navbar-brand mb-0">Knitting Record</h1>
        {/* 토글 버튼은 우측으로 */}
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
              {["home", "혼자뜨개", "같이뜨개", "따로뜨개"].map(
                (label, i, arr) => {
                  const isLast = i === arr.length - 1;
                  if (isLast) {
                    return (
                      <li className="nav-item dropdown" key={i}>
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/mypage"
                          id="mypageDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          MyPage
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="mypageDropdown"
                        >
                          <li>
                            <a
                              className="dropdown-item nav-font"
                              href="#/mypage/profile"
                            >
                              프로필
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-font"
                              href="#/mypage/settings"
                            >
                              설정
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-font"
                              href="#/logout"
                            >
                              로그아웃
                            </a>
                          </li>
                        </ul>
                      </li>
                    );
                  } else {
                    const path = label === "home" ? "myknits" : label;
                    return (
                      <li className="nav-item" key={i}>
                        <a className="nav-link" href={`#/${path}`}>
                          {label}
                        </a>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* 3) 본문 영역: 헤더+네비 높이만큼 padding-top을 줍니다 */}
      <main className="main-content container">
        <Outlet />
      </main>
    </div>
  );
}

export default MainNav;
