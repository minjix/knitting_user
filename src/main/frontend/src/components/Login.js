import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // (1) 백엔드 API 호출 → 로그인 성공 시 토큰 받는 가정
    // 예시:
    // const response = await fetch("/api/login", { method: "POST", body: JSON.stringify({ username, password }) });
    // const data = await response.json();
    // if (data.token) { … 성공 처리 … }

    // 임시로 “로그인 성공”했다고 가정하고 토큰을 저장:
    const fakeToken = "eyJhbGci…(예시 JWT)";
    localStorage.setItem("token", fakeToken);

    // (2) 저장하고 나서 메인(‘/’)으로 이동하면 App.js에서 token을 감지하고 Main을 보여줍니다.
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <div className="child">
        <label className="form-label mt-4">Login</label>
        <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn btn-light btn-sm"
              onClick={() => {
                navigate("/");
              }}
            >
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
                navigate("/find");
              }}
            >
              아이디/비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
