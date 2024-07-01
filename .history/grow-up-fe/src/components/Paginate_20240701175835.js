import React, { useState } from "react";

function Pagination ({productsPerPage, totalProducts, paginate}){
    const pageNumbers = [];

    for (let i =1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    return <div>
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) =>(
                    <li key={number}>
                        <a
                        href="!#"
                        className="page-link"
                        onClick={() => {
                            handlePageClick(number);
                            paginate(number);
                        }}
                        >{number}</a>
                    </li>
                ))}

            </ul>
        </nav>
    </div>
}