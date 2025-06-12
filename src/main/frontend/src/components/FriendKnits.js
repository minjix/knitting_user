import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./../module/Pagination.js";

function FriendKnits() {
  let navigate = useNavigate();

  let [searchFilter, setSearchFilter] = useState("");
  let [searchKeyword, setSearchKeyword] = useState("");
  let [searchInfo, setSearchInfo] = useState({});

  const handleSearch = () => {
    searchInfo.filter = searchFilter;
    searchInfo.keyword = searchKeyword;

    console.log(searchInfo);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-20">
          <div className="d-flex align-items-center mb-3">
            <h6 className="fs-6 text-start mb-0" style={{ fontWeight: "bold" }}>
              친구의 뜨개 기록
            </h6>
          </div>
          <form className="mb-3">
            <div className="row justify-content-end g-2 align-items-end">
              {/* 검색조건 */}
              <div className="col-auto">
                <label
                  className="form-label visually-hidden"
                  htmlFor="statusSelect"
                >
                  검색조건건
                </label>
                <select
                  id="statusSelect"
                  className="form-select form-select-sm"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                >
                  <option value="">전체</option>
                  <option value="userName">이름</option>
                  <option value="knitName">뜨개명</option>
                </select>
              </div>

              {/* 검색창 */}
              <div className="col-auto">
                <label
                  className="form-label visually-hidden"
                  htmlFor="searchInput"
                >
                  검색어
                </label>
                <input
                  type="text"
                  id="searchInput"
                  className="form-control form-select-sm"
                  placeholder="뜨개명을 입력하세요"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>

              {/* 검색 버튼 */}
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-light btn-sm"
                  onClick={handleSearch}
                >
                  검색
                </button>
              </div>
            </div>
          </form>
          <table
            className="table table-bordered text-center small"
            style={{ width: "100%", marginTop: "25px" }}
          >
            <thead className="thead-bg">
              <tr>
                <th scope="col">No</th>
                <th scope="col">이름</th>
                <th scope="col">뜨개명</th>
                <th scope="col">진행중 단수</th>
                <th scope="col">총단수</th>
                <th scope="col" style={{ width: "25%" }}>
                  진행사항
                </th>
                <th scope="col">완료여부</th>
                <th scope="col">시작일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>민지</td>
                <td>
                  <Link
                    to={`/fredetail`}
                    className="text-decoration-none text-dark"
                  >
                    목도리
                  </Link>
                </td>
                <td>5</td>
                <td>10</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-warning">Complete</span>
                </td>
                <td>2025.05.30</td>
              </tr>
            </tbody>
          </table>
          <div
            className="position-relative mt-4"
            style={{ minHeight: "2.5rem" }}
          >
            <div className="d-flex justify-content-center">
              <Pagination
              //   currentPage={currentPage}
              //   totalPages={totalPages}
              //   onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendKnits;
