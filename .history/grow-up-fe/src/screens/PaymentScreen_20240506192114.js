import React, { useState} from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

function PaymentScreen() {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [paymentMethod, setPaymentMethod] = useState("PayPal");

	if (!shippingAddress.address) {
		navigate("/shipping");
	}

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate("/place-order");
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />

			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as="legend">Wybierz metodę płatności</Form.Label>
					<Col>
						<Form.Check
							type="radio"
							label="PayPal lub karta kredytowa"
							id="paypal"
							name="paymentMethod"
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>

				<Button type="submit" variant="primary">
					Przejdź dalej
				</Button>
			</Form>
		</FormContainer>
	);
}

export default PaymentScreen;
