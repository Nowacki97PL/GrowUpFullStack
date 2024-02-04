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
  const {cartItems} = cart

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
            <Message variant='info'>
              Twój koszyk jest pusty <Link to='/'>Powrót</Link>
            </Message>
          ) : 
          <ListGroup variant="flush">
            </ListGroup>}
      </Col>

      <Col md={4}>

      </Col>
    </Row>
  )
}

export default CartScreen;
