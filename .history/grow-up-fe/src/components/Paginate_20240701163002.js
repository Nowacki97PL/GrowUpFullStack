import React from 'react'
import {Pagination} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  return (
    pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer key={x+1}
                to={`/?keyword=${keyword}&page=`}
                ></LinkContainer>
            ))}
        </Pagination>
    )
  )
}

export default Paginate
