import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import Paginate from '../components/Paginate'

function ShopScreen() {
	const location = useLocation();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products, page, pages } = productList;

	let keyword = location.search ? location.search.split("=")[1] : "";

	useEffect(() => {
		dispatch(listProducts(keyword));
	}, [dispatch, keyword]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products &&
						products.map((product) => (
							<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
				</Row>
			)}

			<Paginate/>
		</div>
	);
}

export default ShopScreen;
