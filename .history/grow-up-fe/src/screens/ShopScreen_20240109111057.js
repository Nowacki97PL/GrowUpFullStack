import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from "../actions/productActions";

function ShopScreen() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<Loader/>
			) : error ? (
				<Message variant=''>{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default ShopScreen;
