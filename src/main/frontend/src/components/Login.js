import "./../css/generate_css.css";

function Login() {
  return (
    <div className="container">
      <div className="child">
        {/* <label className="form-label mt-4">Login</label> */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">ID</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="off"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="buttonArea">
          <button type="button" class="btn btn-light btn-sm">
            로그인
          </button>
          <br />
          <button type="button" class="btn btn-link">
            회원정보 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
