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
							
            </ListGroup.Item>
        </ListGroup>
        </Col>
			</Row>
		</div>
	);
}

export default ProductScreen;
