import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetail } from "../actions/productActions";

function ProductScreen() {
	const { id } = useParams();
	const [qty, setQty] = useState
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetail(id));
	}, [dispatch, id]);

	return (
		<div>
			<Link to="/shop" className="btn btn-primary my-3">
				Go back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">[error]</Message>
			) : (
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
											{product.count_in_stock > 0
												? "Dostępny"
												: "Brak na stanie"}
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
			)}
		</div>
	);
}

export default ProductScreen;
