import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="child">
        <label className="form-label mt-4">Login</label>
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
          <button type="button" className="btn btn-light btn-sm">
            로그인
          </button>
          <br />
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입
          </button>
          /
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              navigate("/findMem");
            }}
          >
            아이디/비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
