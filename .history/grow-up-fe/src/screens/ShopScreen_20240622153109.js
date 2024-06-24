import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from "../actions/productActions";

function ShopScreen(navigate) {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;

	let keyword = 

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<Loader/>
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products && products.map((product) => (
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
