import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails } from "../actions/orderActions";

function OrderScreen() {
	const { orderId } = useParams();
	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, error, loading } = orderDetails;

	useEffect(() => {
		if (!order || order.id !== Number(orderId)) {
			dispatch(getOrderDetails(orderId));
		}
	}, [dispatch, order, orderId]);

	if (loading) {
		return <Loader />;
	}

	if (error || !order || !order.orderItems) {
		return (
			<Message variant="danger">
				{error || "Nie udało się znaleźć zamówienia."}
			</Message>
		);
	}

	// Upewnij się, że order.orderItems są zdefiniowane przed próbą użycia reduce()
	const itemsPrice = order.orderItems
		.reduce((acc, item) => acc + item.price * item.qty, 0)
		.toFixed(2);

	return (
		<div>
			<h1>Order: {orderId}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Dane odbiorcy</h2>
							<p>
								<strong>Imię: </strong> {order.user && order.user.name}
							</p>
							<p>
								<strong>Email: </strong>
								<a href={`mailto:${order.user && order.user.email}`}>
									{order.user && order.user.email}
								</a>
							</p>
							{order.shippingAddress && (
								<p>
									<strong>Adres: </strong>
									{order.shippingAddress.address}, {order.shippingAddress.city}{" "}
									{order.shippingAddress.postalCode},{" "}
									{order.shippingAddress.country}
								</p>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Metoda płatności</h2>
							<p>
								<strong>Metoda: </strong>
								{order.paymentMethod}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Szczegóły zamówienia</h2>
							<ListGroup variant="flush">
								{order.orderItems.map((item, index) => (
									<ListGroup.Item key={index}>
										<Row>
											<Col md={1}>
												<Image src={item.image} alt={item.name} fluid rounded />
											</Col>

											<Col>
												<Link to={`/product/${item.product}`}>{item.name}</Link>
											</Col>

											<Col md={4}>
												{item.qty} X ${item.price} = $
												{(item.qty * item.price).toFixed(2)}
											</Col>
										</Row>
									</ListGroup.Item>
								))}
							</ListGroup>
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>Podsumwanie</h2>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Items:</Col>
									<Col>${itemsPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Shipping:</Col>
									<Col>${order.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Tax:</Col>
									<Col>${order.taxPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Total:</Col>
									<Col>${order.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default OrderScreen;
