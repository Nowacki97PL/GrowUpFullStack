import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import Rating from "../components/Rating";
import moduleName from '../actions/productActions'

function ProductScreen() {
	useEffect(() => {}, [])

	let product = []

	return (
		<div>
			<Link to="/shop" className="btn btn-primary my-3">
				Go back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.num_reviews} reviews`}
								color={"#f8e825"}
							/>
						</ListGroup.Item>

						<ListGroup.Item>Cena: {product.price} PLN.</ListGroup.Item>

						<ListGroup.Item>{product.description}.</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<ListGroup>
						<ListGroup.Item>
							<Row>
								<Col>Cena:</Col>
								<Col>
									<strong>PLN {product.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Row>
								<Col>Status:</Col>
								<Col>
									<strong>
										{product.count_in_stock > 0 ? "Dostępny" : "Brak na stanie"}
									</strong>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Row>
								<Button
									className="btn-block"
									disabled={product.count_in_stock == 0}
									type="button"
								>
									Dodaj do koszyka
								</Button>
							</Row>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductScreen;
