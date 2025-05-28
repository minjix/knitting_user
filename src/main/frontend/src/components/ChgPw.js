import { useNavigate } from "react-router-dom";

function ChgPw() {
  let navigate = useNavigate();

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
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label mt-4">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className="buttonArea">
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => {
                navigate("/findMemRes");
              }}
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
