import React, { useEffect } from "react";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
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

	if (!loading & !error) {
		order.itemsPrice = order.orderItems
			.reduce((acc, item) => acc + item.price * item.qty, 0)
			.toFixed(2);
	}

	const addPayPalScript = () => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://www.paypal.com/sdk/js?client"

	};

	useEffect(() => {
		if (!order || order.id !== Number(orderId)) {
			dispatch(getOrderDetails(orderId));
		}
	}, [dispatch, order, orderId]);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<div>
			<h1>Zamówienie: {order.Id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Adresat:</h2>
							<p>
								<strong>Imię i nazwisko: </strong> {order.user.name}
							</p>
							<p>
								<strong>Email: </strong>
								<a href={`mailto:${order.user.email}`}>{order.user.email}</a>
							</p>
							<p>
								<strong>Adres: </strong>
								{order.shippingAddress.address}, {order.shippingAddress.city}
								{"  "}, {order.shippingAddress.postal_code},{"  "}
								{order.shippingAddress.country}
							</p>

							{order.is_delivered ? (
								<Message variant="success">
									Dostarczono: {order.delivered_at}
								</Message>
							) : (
								<Message variant="warning">Zamówienie niedostarczone</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Metoda płatności</h2>
							<p>
								<strong>Sposób: </strong>
								{order.payment_method}
							</p>
							{order.is_paid ? (
								<Message variant="success">Zapłacono: {order.paid_at}</Message>
							) : (
								<Message variant="warning">Zamówienie nieopłacone</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Zamówienie:</h2>
							{order.orderItems.length === 0 ? (
								<Message variant="info">Zamówienie jest puste</Message>
							) : (
								<ListGroup variant="flush">
									{order.orderItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>

												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>

												<Col md={4}>
													{item.qty} X ${item.price} = $
													{(item.qty * item.price).toFixed(2)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>Podsumowanie</h2>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Zamówienie:</Col>
									<Col>{order.itemsPrice} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Dostawa:</Col>
									<Col>{order.shipping_price} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Podatek:</Col>
									<Col>{order.tax_price} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Cena:</Col>
									<Col>{order.total_price} PLN</Col>
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
