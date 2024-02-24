import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
function PlaceOrderScreen() {
	const cart = useSelector((state) => state.cart);

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
                            {cart.cartItems.length === 0 ? <Message variant='info'>
                                Twój koszyk jest pusty
                            </Message> : (
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item, index) =>(
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}></Col>
			</Row>
		</div>
	);
}

export default PlaceOrderScreen;
