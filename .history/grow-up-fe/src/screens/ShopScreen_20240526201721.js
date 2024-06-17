import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from "../actions/productActions";


function ShopScreen() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;

	const addToCartHandler = () => {
		dispatch(addToCart(id, qty));
		alert("Produkt został dodany do koszyka!");
	};

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
							<Product product={product} /><Button
											onClick={addToCartHandler}
											className="btn-block"
											disabled={product.count_in_stock == 0}
											type="button"
										>
											Dodaj do koszyka
										</Button>

						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default ShopScreen;
