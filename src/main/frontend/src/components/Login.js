import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ onLogin }) {
  let navigate = useNavigate();

  let [loginId, setLoginId] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const chkValid = () => {
    if (loginId === "" || loginId == null) {
      //setMessage("ID를 입력해주세요.");
      return "ID를 입력해주세요.";
    }

    if (password === "" || password == null) {
      //setMessage("비밀번호를 입력해주세요.");
      return "비밀번호를 입력해주세요.";
    }

    return null;

    //아이디 db조회 api 호출 영역
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // (1) 백엔드 API 호출 → 로그인 성공 시 토큰 받는 가정
    // 예시:
    // const response = await fetch("/api/login", { method: "POST", body: JSON.stringify({ username, password }) });
    // const data = await response.json();
    // if (data.token) { … 성공 처리 … }

    const errors = chkValid();

    if (errors) {
      setMessage(errors);
      sessionStorage.removeItem("token");
      return;
    }

    // 임시로 “로그인 성공”했다고 가정하고 토큰을 저장:
    const fakeToken = "eyJhbGci…(예시 JWT)";
    sessionStorage.setItem("token", fakeToken);
    console.log("로그인 성공, navigate 전");
    onLogin(fakeToken);

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
              type="text"
              className="form-control"
              id="loginId"
              placeholder="ID"
              onChange={(e) => {
                setLoginId(e.target.value);
                if (message) setMessage("");
              }}
            />
            <label htmlFor="loginId">ID</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
                if (message) setMessage("");
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="buttonArea">
            <button type="submit" className="btn btn-light btn-sm">
              로그인
            </button>
            {message && (
              <div className="invalid-feedback d-block">{message}</div>
            )}
          </div>
        </form>
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
    </div>
  );
}

export default Login;
