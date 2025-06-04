import profileImg from "./../img/profile_sample.jpg";

function MyPage() {
  return (
    <div className="container" style={{ maxWidth: "500px", marginTop: "60px" }}>
      {/* 프로필 사진 */}
      <div className="text-center mb-4">
        <img
          src={profileImg}
          alt="프로필"
          className="rounded-circle"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            cursor: "pointer",
            border: "2px solid #dee2e6",
          }}
          //   onClick={handleImgClick}
        />
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            // onClick={handleImgClick}
          >
            사진 변경
          </button>
        </div>
        <input
          type="file"
          accept="img/*"
          //   ref={fileInputRef}
          style={{ display: "none" }}
          //   onChange={handleFileChange}
        />
      </div>

      {/* 입력 폼 */}
      <form>
        {/* 이름 */}
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label fw-bold">
            이름
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            value="망지"
            //onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 생년월일 */}
        <div className="mb-3">
          <label htmlFor="inputBirth" className="form-label fw-bold">
            생년월일
          </label>
          <input
            type="date"
            id="inputBirth"
            className="form-control"
            value="981014"
            // onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        {/* 아이디 (읽기 전용) */}
        <div className="mb-3">
          <label htmlFor="inputUserId" className="form-label fw-bold">
            아이디
          </label>
          <input
            type="text"
            id="inputUserId"
            className="form-control"
            value="test1234"
            readOnly
          />
        </div>

        {/* 비밀번호 */}
        <div className="mb-3">
          <label htmlFor="inputPwd" className="form-label fw-bold">
            비밀번호
          </label>
          <input
            type="password"
            id="inputPwd"
            className="form-control"
            placeholder="새 비밀번호"
            value="test"
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="mb-4">
          <label htmlFor="inputPwdConfirm" className="form-label fw-bold">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="inputPwdConfirm"
            className="form-control"
            placeholder="비밀번호 재입력"
            value="test"
            //onChange={(e) => setConfirmPwd(e.target.value)}
          />
        </div>

        {/* 버튼 영역 */}
        <div className="d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn btn-secondary"
            // onClick={handleCancel}
          >
            취소
          </button>
          <button type="submit" className="btn btn-primary">
            수정
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyPage;
