import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";


function ShopScreen() {
	
	useEffect(() => {
		async function fetchProducts() {
			const { data } = await axios.get("/api/products/");
			setProducts(data);
		}
    fetchProducts()
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
