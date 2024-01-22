import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import Product from "../components/Product";
import {listProducts} from '../actions/productActions'


function ShopScreen() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(listProducts())
	}, []);
	const products = []
	return (
		<div>
			<h1>Produkty:</h1>
      <br></br>
			<Row>
				{products.map((product) => (
					<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default ShopScreen;
