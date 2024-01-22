import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {use} from 'react-redux'
import Product from "../components/Product";
import listProducts from '../actions/productActions'


function ShopScreen() {
	
	useEffect(() => {
		
	}, []);

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
