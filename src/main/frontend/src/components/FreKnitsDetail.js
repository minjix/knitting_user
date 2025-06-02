import { useNavigate } from "react-router-dom";

function MyKnitsDetail() {
  let navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="pt-4">
            <div className="mb-4">
              <label className="form-label fw-bold mb-3">
                친구의 뜨개 진행상황٩( 'ω' )و
              </label>
              <div className="mb-3">
                <label htmlFor="knitName" className="form-label fs-6">
                  뜨개명
                </label>
                <input
                  type="text"
                  id="knitName"
                  className="form-control"
                  readOnly
                  value="목도리"
                />
              </div>

              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label fs-6">코</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                    <span>/</span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label fs-6">단</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                    <span>/</span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* 진행률 */}
              <div className="mt-3">
                <label className="form-label fs-6 mb-2">진행률</label>
                <span className="badge bg-danger ms-2">progress</span>
                <div className="progress mt-2">
                  <div
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="pt-4">
              <label className="form-label fw-bold mb-3">
                응원을 합시다٩( 'ω' )و
              </label>

              {/* ─── 댓글 작성란 ─── */}
              <div className="mb-4">
                <label htmlFor="newComment" className="form-label fw-bold">
                  댓글 달기
                </label>
                <textarea
                  id="newComment"
                  className="form-control form-control-sm"
                  rows="3"
                  placeholder="댓글을 입력하세요…"
                ></textarea>
                <div className="d-flex justify-content-end mt-2">
                  <button className="btn btn-sm btn-light">등록</button>
                </div>
              </div>

              {/* 2) 기존 댓글 목록 */}
              <div className="comments">
                {/* {comments.map((c) => ( */}
                <div
                  // key={c.id}
                  className="d-flex align-items-start mb-3 comment-item"
                >
                  {/* 2.1) (선택) 프로필 이미지를 넣고 싶다면 */}
                  {/* <img
              src={c.avatarUrl}
              alt="avatar"
              className="rounded-circle me-2"
              width="40"
              height="40"
            /> */}

                  {/* 2.2) 댓글 텍스트 박스 */}
                  <div className="comment-box p-2 bg-light rounded w-100">
                    <div className="d-flex justify-content-between mb-1">
                      <h6 className="fs-6 fw-semibold mb-1">민지</h6>
                    </div>
                    <p className="mb-0 small">최고에요~</p>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
            {/* ─── 댓글 섹션 끝 ─── */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyKnitsDetail;
