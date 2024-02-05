import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
import { addToCart } from "../actions/cartActions";

function CartScreen({ Location, history }) {
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

	return (
		<Row>
			<Col md={8}>
				<h1>Koszyk</h1>
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

									<Col md={3}>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</Col>

									<Col md={2}>
                    ${item.price}
                    </Col>

                    <Col md={5}>

                    <Form.Control
										className="form-select"
										  as="select"
										  value={item.qty}
										  onChange={(e) => dispatch(addToCart(item.product, e.target.value))}
										>
										  {[...Array(item.count_in_stock).keys()].map((x) => (
											<option key={x + 1} value={x + 1}>
											  {x + 1}
											</option>
										  ))}
										</Form.Control>
                    </Col>
                    <Col md{1}>
                    <Button>
                    type='button'
                    variant=
                    </Button>
                    </Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>

			<Col md={4}></Col>
		</Row>
	);
}

export default CartScreen;