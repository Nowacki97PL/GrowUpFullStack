import React from "react";
import { Link } from "react-router-dom";

function Paginate({ productsPerPage, totalProducts, paginate, keyword }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number}>
              <Link
                to={`/shop/?keyword=${keyword}&page=${number}`}
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;
