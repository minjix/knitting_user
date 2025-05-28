import { useNavigate } from "react-router-dom";

function FindMemRes() {
  let navigate = useNavigate();

  return (
    <div className="container">
      {/* 1번째 카드 - Id 찾기 성공 */}
      <div className="card">
        <div className="card-body">
          <h6 className="card-subtitle mb-2">ooo님의 아이디입니다.</h6>
          <br />
          <p className="card-text">아이디 : test1234</p>
        </div>
        <div className="d-flex justify-content-end btn-center">
          <button
            type="button"
            className="btn btn-dark btn-sm d-block mx-auto"
            style={{ marginBottom: "15px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            로그인 화면으로 이동
          </button>
        </div>
      </div>
      {/* 2번째 카드 - Id 찾기 실패 */}
      <div className="card" style={{ display: "none" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">존재하는 아이디가 없습니다.</h6>
          <br />
          <p className="card-text">회원가입 후 이용 가능합니다.</p>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-dark btn-sm d-block mx-auto"
            style={{ marginBottom: "15px" }}
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입 화면으로 이동
          </button>
        </div>
      </div>
      {/* 3번째 카드 - 비밀번호 변경 성공 */}
      <div className="card" style={{ display: "none" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">비밀번호 변경 완료!!</h6>
          <br />
          <p className="card-text">로그인 후 이용부탁드립니다.</p>
        </div>
        <div className="d-flex justify-content-end btn-center">
          <button
            type="button"
            className="btn btn-dark btn-sm d-block mx-auto"
            style={{ marginBottom: "15px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            로그인 화면으로 이동
          </button>
        </div>
      </div>
      {/* 4번째 카드 - 회원가입입 성공 */}
      <div className="card" style={{ display: "none" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">회원가입 완료!!</h6>
          <br />
          <p className="card-text">로그인 후 이용부탁드립니다.</p>
        </div>
        <div className="d-flex justify-content-end btn-center">
          <button
            type="button"
            className="btn btn-dark btn-sm d-block mx-auto"
            style={{ marginBottom: "15px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            로그인 화면으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindMemRes;
