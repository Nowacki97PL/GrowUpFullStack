import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
function PlaceOrderScreen() {
	const cart = useSelector((state) => state.cart);

    cart.itemsPrice = cart

	const placeOrder = () => {
		console.log("Place Order");
	};

	return (
		<div>
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Adres dostawy</h2>

							<p>
								<strong>Adres: </strong>
								{cart.shippingAddress.address}, {cart.shippingAddress.city}
								{"  "}
								{cart.shippingAddress.postalCode},{cart.shippingAddress.country}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Sposób płatności</h2>

							<p>
								<strong>Płatność: </strong>
								{cart.paymentMethod}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Zamówienie:</h2>
							{cart.cartItems.length === 0 ? (
								<Message variant="info">Twój koszyk jest pusty</Message>
							) : (
								<ListGroup variant="flush">
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={3}>
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
													{item.qty} x {item.price} ={" "}
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
									<Col>{cart.cartItems.price} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Dostawa:</Col>
									<Col>{cart.shippingPrice} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Podatek:</Col>
									<Col>{cart.taxPrice} PLN</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Cena brutto:</Col>
									<Col>{cart.totalPrice} PLN</Col>
								</Row>
							</ListGroup.Item>

							 <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='custom-btn'
                                    id="btn-place"
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default PlaceOrderScreen;
