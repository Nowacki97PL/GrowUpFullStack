import React from "react";
import { Link, useParams } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	Card,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
	const { id } = useParams();
	const product = products.find((p) => p._id === id);
	return (
		<div>
			<Link to="/home" className="btn btn-primary my-3">
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
								text={`${product.numReviews} reviews`}
								color={"#8fe825"}
							></Rating>
						</ListGroup.Item>

						<ListGroup.Item>Price: {product.price} PLN.</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}></Col>
			</Row>
		</div>
	);
}

export default ProductScreen;
