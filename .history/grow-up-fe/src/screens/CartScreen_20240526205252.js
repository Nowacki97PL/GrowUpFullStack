import React, { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen({ Location }) {
	location = useLocation()
	const navigate = useNavigate();
	const { id } = useParams();
	const qty = location.search ? Number(location.search.split("=")[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, id, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate("/shipping");
	};

	return (
		<Row>
			<Col md={8}>
				<h1><i className="fas fa-shopping-cart"></i> Koszyk</h1>
				{cartItems.length === 0 ? (
					<Message variant="info">
						Twój koszyk jest pusty <Link to="/shop">Powrót</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									<Col md={2}>
										<Image
											src={item.image}
											alt={item.name}
											fluid
											rounded
											className="border"
										/>
									</Col>

									<Col md={4}>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</Col>

									<Col md={2}>PLN {item.price}</Col>

									<Col md={3}>
										<Form.Control
											className="form-select"
											as="select"
											value={item.qty}
											onChange={(e) =>
												dispatch(
													addToCart(item.product, Number(e.target.value))
												)
											}
										>
											{[...Array(item.count_in_stock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={1}>
										<Button
											type="button"
											variant="light"
											onClick={() => removeFromCartHandler(item.product)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>

			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>
								Ilość przedmiotów (
								{cartItems.reduce((acc, item) => acc + item.qty, 0)})
							</h2>
							{cartItems
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
							&nbsp;PLN
						</ListGroup.Item>
					</ListGroup>
					<ListGroup.Item>
						<Button
							type="button"
							className="btn-block w-100"
							disabled={cartItems.length === 0}
							onClick={checkoutHandler}
						>
							Przejdź do podsumowania
						</Button>
					</ListGroup.Item>
				</Card>
			</Col>
		</Row>
	);
}

export default CartScreen;
