import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	getOrderDetails,
	payOrder,
	deliverOrder,
} from "../actions/orderActions";
import {
	ORDER_PAY_RESET,
	ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

function OrderScreen() {
	const { orderId } = useParams();
	const dispatch = useDispatch();

	const [sdkReady, setSdkReady] = useState(false);

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, error, loading } = orderDetails;

	const orderPay = useSelector((state) => state.orderPay);
	const { loading: loadingPay, success: successPay } = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	if (!loading & !error) {
		order.itemsPrice = order.orderItems
			.reduce((acc, item) => acc + item.price * item.qty, 0)
			.toFixed(2);
	}

	const addPayPalScript = () => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src =
			"https://www.paypal.com/sdk/js?client-id=AZr6kHF-SkTtYsKzGOem_--rbTQRIgxy_NM-1NZrdeiZPQkYVpzEOsXB_opIb9ptUpXwP5Lt9f3i7oYn&currency=PLN";
		script.async = true;
		script.onload = () => {
			setSdkReady(true);
		};
		document.body.appendChild(script);
	};

	useEffect(() => {
		if (
			!order ||
			successPay ||
			order.id !== Number(orderId) ||
			successDeliver
		) {
			dispatch({ type: ORDER_PAY_RESET });
			dispatch({ type: ORDER_DELIVER_RESET });
			dispatch(getOrderDetails(orderId));
		} else if (!order.is_paid) {
			if (!window.paypal) {
				addPayPalScript();
			} else {
				setSdkReady(true);
			}
		}
	}, [dispatch, order, orderId, successPay, successDeliver]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(orderId, paymentResult));
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

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
													{item.qty} X {item.price} PLN =
													{(item.qty * item.price).toFixed(2)} PLN
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

							{!order.is_paid && (
								<ListGroup.Item>
									{loadingPay && <Loader />}

									{!sdkReady ? (
										<Loader />
									) : (
										<PayPalButton
											currency="PLN"
											amount={order.total_price}
											onSuccess={successPaymentHandler}
										/>
									)}
								</ListGroup.Item>
							)}
						</ListGroup>
						{userInfo && userInfo.isAdmin && order.is_paid && !order}
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default OrderScreen;
