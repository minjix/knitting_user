import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ChgPw() {
  let navigate = useNavigate();

  let [password, setPassword] = useState("");
  let [passwordCk, setPasswordCk] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  let pwdCheck = /^[A-Za-z0-9]{8,}$/;

  const handlePwChk = () => {
    if (password === "" || password == null) {
      setErrorMsg("비밀번호를 입력해주세요.");
      return;
    }

    if (!pwdCheck.test(password)) {
      setErrorMsg("영문과 숫자를 조합하여 8자 이상 입력해 주세요.");
      return;
    }

    if (passwordCk === "" || passwordCk == null) {
      setErrorMsg("비밀번호 확인을 입력해주세요.");
      return;
    }

    if (password !== passwordCk) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return;
    }

    //navigate("/findMemRes");
  };

  return (
    <div>
      <form className="join-form short">
        <fieldset>
          <legend>비밀번호 변경</legend>
          <div>
            <label htmlFor="password" className="form-label mt-4">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
            />
          </div>
          <div>
            <label htmlFor="passwordCk" className="form-label mt-4">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordCk"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setPasswordCk(e.target.value);
                setErrorMsg("");
              }}
            />
          </div>
          {errorMsg && (
            <div className="invalid-feedback d-block">{errorMsg}</div>
          )}
          <div className="buttonArea">
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={handlePwChk}
            >
              변경
            </button>
            <button
              type="button"
              className="btn btn-dark btn-sm"
              onClick={() => {
                navigate("/");
              }}
            >
              취소
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ChgPw;
