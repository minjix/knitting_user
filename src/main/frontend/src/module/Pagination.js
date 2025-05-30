function Pagination() {
  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              «
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              »
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
