import Calendar from "./../module/Calendar.js";
import { useNavigate } from "react-router-dom";

function FindMem() {
  let navigate = useNavigate();
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
                  />
                </div>
                {/* 생년월일 */}
                <div className="mb-3">
                  <label htmlFor="birthDate" className="form-label">
                    생년월일
                  </label>
                  <div>
                    <Calendar />
                  </div>
                </div>
                {/* 버튼 */}
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light btn-sm me-2"
                    onClick={() => {
                      navigate("/findMemRes");
                    }}
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label">
                    아이디
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="Enter ID"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => {
                      navigate("/findPW");
                    }}
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
