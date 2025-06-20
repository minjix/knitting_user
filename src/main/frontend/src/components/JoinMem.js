import { useEffect, useState } from "react";
import Calendar from "./../module/Calendar.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function JoinMem() {
  let navigate = useNavigate();

  let [formValues, setFormValues] = useState({
    userName: "",
    loginId: "",
    password: "",
    passwordChk: "",
    birthdate: "",
  });

  let [formErrors, setFormErrors] = useState({
    userName: "",
    loginId: "",
    password: "",
    passwordChk: "",
  });
  let [isDuplicate, setIsDuplicate] = useState(false);
  const [userInfo] = useState({}); // 회원가입시 parameter로 전달할 로그인 정보

  let idCheck = /^[A-Za-z0-9]{6,15}$/;
  let pwdCheck = /^[A-Za-z0-9]{8,}$/;

  useEffect(() => {
    setIsDuplicate(false);
  }, [formErrors]);

  const handleChange = (field) => (e) => {
    const val = e.target.value;

    //값 변할 때마다 객체 값 변경
    setFormValues((prev) => ({ ...prev, [field]: val }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));

    if (field === "loginId") {
      setIsDuplicate(false);
    }
  };

  const handleIdCheck = async () => {
    if (formValues.loginId === "" || formValues.loginId == null) {
      setFormErrors((prev) => ({ ...prev, loginId: "ID를 입력해 주세요." }));
      setIsDuplicate(false);
      return;
    }

    if (!idCheck.test(formValues.loginId)) {
      setFormErrors((prev) => ({
        ...prev,
        loginId: "ID는 6~15자리 영문과 숫자 조합이어야 합니다.",
      }));
      setIsDuplicate(false);
      return;
    }

    // 아이디 중복 체크 api 호출 영역
    axios.post("/chkDupId", {id:formValues.loginId}).then(function(res){
        console.log(res)
        console.log("id 중복체크 성공!")

        if(res.result == "available") {
            setIsDuplicate(false);
            setFormErrors((prev) => ({ ...prev, loginId: "이미 사용중인 아이디입니다." }));
        } else {
            setIsDuplicate(true);
            setFormErrors((prev) => ({ ...prev, loginId: "" }));
        }
    }).catch(function(error){
        console.log(error)
    })

  };

  const validSubmitChk = () => {
    if (formValues.userName === "" || formValues.userName == null) {
      setFormErrors((prev) => ({ ...prev, userName: "이름을 입력해주세요." }));
      return;
    }

    if (!isDuplicate) {
      setFormErrors((prev) => ({
        ...prev,
        loginId: "ID 중복 확인을 해주세요.",
      }));
      setIsDuplicate(false);
    }

    if (formValues.password === "" || formValues.password == null) {
      setFormErrors((prev) => ({
        ...prev,
        password: "비밀번호를 입력해주세요.",
      }));
      return;
    }

    if (formValues.passwordChk === "" || formValues.passwordChk == null) {
      setFormErrors((prev) => ({
        ...prev,
        passwordChk: "비밀번호 확인을을 입력해주세요.",
      }));
      return;
    }

    if (!pwdCheck.test(formValues.password)) {
      setFormErrors((prev) => ({
        ...prev,
        password: "영문과 숫자를 조합하여 8자 이상 입력해 주세요.",
      }));
      return;
    }

    if (formValues.password !== formValues.passwordChk) {
      setFormErrors((prev) => ({
        ...prev,
        passwordChk: "비밀번호가 일치하지 않습니다.",
      }));
      return;
    }

    regUser();
  };

  const regUser = () => {
    userInfo.userName = formValues.userName;
    userInfo.loginId = formValues.loginId;
    userInfo.password = formValues.password;
    userInfo.birthdate = formValues.birthdate;

    console.log(userInfo);

    // axios.post("/regUser", {param : userInfo}).then(function(res){
    //   console.log(res)
    //   console.log("회원가입 성공!")
    // }).catch(function(error){
    //   console.log(error)
    // })
  };

  return (
    <div className="container">
      <form className="join-form long">
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
              onChange={handleChange("userName")}
            />
            {formErrors.userName && (
              <div
                className={
                  isDuplicate === false
                    ? "invalid-feedback d-block"
                    : "valid-feedback d-block"
                }
              >
                {formErrors.userName}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="loginId" className="form-label mt-4">
              ID
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="loginId"
                placeholder="Enter ID"
                onChange={handleChange("loginId")}
              />

              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={handleIdCheck}
              >
                중복확인
              </button>
            </div>
            {formErrors.loginId && (
              <div
                className={
                  isDuplicate === false
                    ? "invalid-feedback d-block"
                    : "valid-feedback d-block"
                }
              >
                {formErrors.loginId}
              </div>
            )}
          </div>
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
              onChange={handleChange("password")}
            />
            {formErrors.password && (
              <div
                className={
                  isDuplicate === false
                    ? "invalid-feedback d-block"
                    : "valid-feedback d-block"
                }
              >
                {formErrors.password}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="form-label mt-4">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordChk"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange("passwordChk")}
            />
            {formErrors.passwordChk && (
              <div
                className={
                  isDuplicate === false
                    ? "invalid-feedback d-block"
                    : "valid-feedback d-block"
                }
              >
                {formErrors.passwordChk}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="birthDate" className="form-label mt-4">
              생년월일
            </label>
            <div>
              <Calendar
                onSelDate={(date) => {
                  setFormValues((prev) => ({
                    ...prev,
                    birthdate: date,
                  }));
                }}
              />
            </div>
          </div>
          <div className="buttonArea">
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => {
                validSubmitChk();
                //navigate("/findMemRes");
              }}
            >
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
