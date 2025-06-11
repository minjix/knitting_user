import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyKnitsReg() {
  let navigate = useNavigate();

  let [knitName, setKnitName] = useState("");
  let [row, setRow] = useState(0);
  let [isPublic, setIsPublic] = useState(0);
  let [errorMsg, setErrorMsg] = useState("");

  let [info, setInfo] = useState({});

  const handleValidChk = () => {
    if (knitName === "" || knitName == null) {
      setErrorMsg("뜨개명을 입력해주세요.");

      return;
    }

    navigate("/myknits");
  };

  const regKnits = () => {
    info.knitName = knitName;
    info.row = row;
    info.isPublic = isPublic;
  };

  return (
    <div className="container">
      {/* ─── row: 가운데 정렬 ─── */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="pt-4">
            <label className="form-label fw-bold mb-5">
              뜨개를 등록해보자٩( 'ω' )و
            </label>

            <form>
              <fieldset className="mb-4">
                <legend className="fs-6">뜨개명</legend>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-sm custom-input"
                    id="knitName"
                    placeholder="뜨개명"
                    onChange={(e) => {
                      setKnitName(e.target.value);
                      setErrorMsg("");
                    }}
                  />
                  <label htmlFor="knitName">뜨개명</label>
                  {errorMsg && (
                    <div className="invalid-feedback d-block">{errorMsg}</div>
                  )}
                </div>
              </fieldset>
              <fieldset className="mb-4">
                <legend className="fs-6">총 단수</legend>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control form-control-sm custom-input"
                    id="totalRows"
                    placeholder="총 단수"
                    min={0}
                    max={1000}
                    autoComplete="off"
                    defaultValue={0}
                    onChange={(e) => {
                      setRow(e.target.value);
                    }}
                  />
                  <label htmlFor="totalRows">총 단수</label>
                </div>
              </fieldset>
              <fieldset className="mb-4">
                <legend className="fs-6">공개 여부</legend>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isPublic"
                      id="publicYes"
                      value="1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="publicYes">
                      공개
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isPublic"
                      id="publicNo"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="publicNo">
                      비공개
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="d-flex justify-content-start gap-2">
                <button
                  type="submit"
                  className="btn btn-light btn-sm px-3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleValidChk();
                  }}
                >
                  등록
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-3"
                  onClick={() => {
                    navigate("/myknits");
                  }}
                >
                  취소
                </button>
              </div>
            </form>
          </div>
          {/* ─── 실제 입력폼 영역 끝 ─── */}
        </div>
      </div>
    </div>
  );
}

export default MyKnitsReg;
