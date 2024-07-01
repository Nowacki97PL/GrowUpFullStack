import React from "react";
import { Pagination, PageItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, keyword = "", isAdmin = false }) => {
	return (
		pages > 1 && (
			<Pagination>
				{[...Array(pages).keys()].map((x) => (
					<LinkContainer
						key={x + 1}
						to={
							!isAdmin
								? `/shop/?keyword=${keyword}&page=${x + 1}`
								: `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
						}
					>
						<PageItem active={x + 1 === page}>{x + 1}</PageItem>
					</LinkContainer>
				))}
			</Pagination>
		)
	);
};

export default Paginate;
