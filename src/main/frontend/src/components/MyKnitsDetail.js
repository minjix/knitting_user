import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Radio from "./../module/Radio.js";
import RadioGroup from "./../module/RadioGroup.js";

function MyKnitsDetail() {
  let navigate = useNavigate();

  let [progStich, setProStich] = useState(10);
  let [totStich, setTotStich] = useState(0);
  let [progRow, setProRow] = useState(0);
  let [totRow, setTotRow] = useState(0);
  let [isPublic, setIsPublic] = useState(1);
  let [knitName, setKnitName] = useState("목도리");
  let [errorMsg, setErrorMsg] = useState("");
  let [info, setInfo] = useState({});
  let [imsi, setImsi] = useState({});

  const handleValidChk = () => {
    if (knitName === "" || knitName == null) {
      setErrorMsg("뜨개명을 입력해주세요.");

      return;
    }

    updKnitsInfo();
    //navigate("/myknits");
  };

  const updKnitsInfo = () => {
    info.knitName = knitName;
    info.isPublic = isPublic;

    console.log(info);
  };

  const updKnitsRows = () => {
    imsi.progStich = progStich;
    imsi.totStich = totStich;
    imsi.progRow = progRow;
    imsi.totRow = totRow;

    console.log(imsi);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="pt-4">
            {/* 제목 */}
            <label className="form-label fw-bold mb-5">
              나의 진행중인 뜨개는?٩( 'ω' )و
            </label>
            <div className="mb-4">
              <label className="form-label fw-normal mb-2">코 변경</label>
              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-2"
                  onClick={() => {
                    if (progStich > 0) {
                      setProStich(progStich - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control form-control-sm custom-input-sm"
                  id="progStich"
                  autoComplete="off"
                  value={progStich}
                  readOnly
                  onChange={updKnitsRows}
                />
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-2"
                  onClick={() => {
                    setProStich(progStich + 1);
                  }}
                >
                  +
                </button>
                <span>/</span>
                <input
                  type="text"
                  className="form-control form-control-sm custom-input-sm"
                  id="totStich"
                  autoComplete="off"
                  value={totStich}
                  onChange={(e) => {
                    setTotStich(e.target.value);
                    setProStich(0);
                    updKnitsRows();
                  }}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="form-label fw-normal mb-2">단 변경</label>
              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-2"
                  onClick={() => {
                    if (progRow > 0) {
                      setProRow(progRow - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control form-control-sm custom-input-sm"
                  id="progRow"
                  autoComplete="off"
                  value={progRow}
                  readOnly
                  onChange={updKnitsRows}
                />
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-2"
                  onClick={() => {
                    setProRow(progRow + 1);
                  }}
                >
                  +
                </button>
                <span>/</span>
                <input
                  type="text"
                  className="form-control form-control-sm custom-input-sm"
                  id="totRow"
                  autoComplete="off"
                  readOnly
                  value={totRow}
                  onChange={updKnitsRows}
                />
              </div>
            </div>

            <hr className="my-4" />

            <form>
              <fieldset className="mb-4">
                <legend className="fs-6">뜨개명</legend>
                <div>
                  <input
                    type="text"
                    className="form-control form-control custom-input"
                    readOnly
                    id="knitName"
                    placeholder="뜨개명"
                    value={knitName}
                    onChange={(e) => setKnitName(e.target.value)}
                  />
                  {errorMsg && (
                    <div className="invalid-feedback d-block">{errorMsg}</div>
                  )}
                </div>
              </fieldset>
              <fieldset className="mb-4">
                <legend className="fs-6">공개 여부</legend>
                <div>
                  <RadioGroup>
                    <div className="form-check form-check-inline">
                      <Radio
                        name="isPublic"
                        value="1"
                        defaultChecked="true"
                        onChange={(val) => {
                          setIsPublic(val);
                        }}
                      >
                        공개
                      </Radio>
                    </div>
                    <div className="form-check form-check-inline">
                      <Radio
                        name="isPublic"
                        value="0"
                        onChange={(val) => {
                          setIsPublic(val);
                        }}
                      >
                        비공개
                      </Radio>
                    </div>
                  </RadioGroup>
                  {/* <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isPublic"
                      id="publicYes"
                      value="yes"
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
                      value="no"
                    />
                    <label className="form-check-label" htmlFor="publicNo">
                      비공개
                    </label>
                  </div> */}
                </div>
              </fieldset>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="submit"
                  className="btn btn-light btn-sm px-3"
                  onClick={handleValidChk}
                >
                  수정
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm px-3"
                  onClick={() => {
                    navigate("/myknits");
                  }}
                >
                  삭제
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyKnitsDetail;
