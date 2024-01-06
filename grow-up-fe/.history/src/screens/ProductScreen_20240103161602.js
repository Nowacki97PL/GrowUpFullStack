import React from "react";
import { Link } from "react-router-dom";
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
	const product = products.find((p) => p._id == matchMedia.params.id)
	return (
		<div>
			<Link to="/home" className="btn btn-primary my-3">
				Go back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid ></Image>
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
              <Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
							color={"#f8e825"}
						/>
						</ListGroup.Item>

						<ListGroup.Item>
            <Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
							color={"#f8e825"}
						/>
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
