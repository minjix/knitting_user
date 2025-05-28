import Calendar from "./../module/Calendar.js";
import { useNavigate } from "react-router-dom";

function JoinMem() {
  let navigate = useNavigate();

  return (
    <div>
      <form className="join-form">
        <fieldset>
          <legend>회원가입</legend>
          <div>
            <label htmlFor="userName" className="form-label mt-4">
              이름
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label htmlFor="userId" className="form-label mt-4">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              placeholder="Enter ID"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label mt-4">
              Password
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
            <label htmlFor="userName" className="form-label mt-4">
              생년월일
            </label>
            <div>
              <Calendar />
            </div>
          </div>
          <div className="buttonArea">
            <button type="button" className="btn btn-light btn-sm">
              회원가입
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

export default JoinMem;
