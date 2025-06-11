import Calendar from "./../module/Calendar.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FindMem() {
  let navigate = useNavigate();

  let [info, setInfo] = useState({
    userNameId: "",
    birthdate: new Date(),
    userNamePw: "",
    loginId: "",
  });

  console.log(info);

  let [errorMsg, setErrorMsg] = useState({
    userNameId: "",
    birthdate: "",
    userNamePw: "",
    loginId: "",
  });

  const handleChg = (field) => (e) => {
    let val = e.target.value;
    setInfo((prev) => ({ ...prev, [field]: val }));
    setErrorMsg((prev) => ({ ...prev, [field]: "" }));
  };

  const handleIdChk = () => {
    if (info.userNameId === "" || info.userNameId == null) {
      setErrorMsg((prev) => ({
        ...prev,
        userNameId: "이름을 입력해주세요.",
      }));

      return;
    }

    navigate("/findMemRes");
  };

  const handlePwChk = () => {
    if (info.userNamePw === "" || info.userNamePw == null) {
      setErrorMsg((prev) => ({
        ...prev,
        userNamePw: "이름을 입력해주세요.",
      }));

      return;
    }

    if (info.loginId === "" || info.loginId == null) {
      setErrorMsg((prev) => ({
        ...prev,
        loginId: "ID를 입력해주세요.",
      }));

      return;
    }

    navigate("/findPW");
  };

  return (
    <div className="container py-4">
      <div className="row gx-4 gy-4">
        {/* 1번째 카드 */}
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">ID 찾기</h5>
              <form className="mt-3 flex-grow-1">
                {/* 이름 */}
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    이름
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter Name"
                    onChange={handleChg("userNameId")}
                  />
                  {errorMsg.userNameId && (
                    <div className="invalid-feedback d-block">
                      {errorMsg.userNameId}
                    </div>
                  )}
                </div>
                {/* 생년월일 */}
                <div className="mb-3">
                  <label htmlFor="birthDate" className="form-label">
                    생년월일
                  </label>
                  <div>
                    <Calendar
                      onSelDate={(date) =>
                        setInfo((prev) => ({ ...prev, birthdate: date }))
                      }
                    />
                  </div>
                </div>
                {/* 버튼 */}
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light btn-sm me-2"
                    onClick={handleIdChk}
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 2번째 카드 */}
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">비밀번호 찾기</h5>
              <form className="mt-2 flex-grow-1">
                <div className="mb-3">
                  <label htmlFor="nameForPwd" className="form-label">
                    이름
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameForPwd"
                    placeholder="Enter Name"
                    onChange={handleChg("userNamePw")}
                  />
                  {errorMsg.userNamePw && (
                    <div className="invalid-feedback d-block">
                      {errorMsg.userNamePw}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="loginId" className="form-label">
                    아이디
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="loginId"
                    placeholder="Enter ID"
                    onChange={handleChg("loginId")}
                  />
                  {errorMsg.loginId && (
                    <div className="invalid-feedback d-block">
                      {errorMsg.loginId}
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={handlePwChk}
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMem;
