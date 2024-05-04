import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, Button, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails } from "../actions/userActions";

function UserEditScreen() {

    const { userId } = useParams();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [isAdmin, setAdmin] = useState(false)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRegister = useSelector((state) => state.userRegister);
	const { error, loading, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password != confirmPassword) {
			setMessage("Hasła nie pasują do siebie.");
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<FormContainer>
			<h1>Dołącz do GrowUp</h1>
			{message && <Message variant="danger">{message}</Message>}
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>Nazwa użytkownika</Form.Label>
					<Form.Control
						required
						type="name"
						placeholder="Imię"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="email"
						placeholder="Wpisz Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Hasło</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Wprowadź hasło"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="passwordConfirm">
					<Form.Label>Potwierdź hasło</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Wprowadź hasło"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button className="my-3" type="submit" variant="primary">
					Rejestracja
				</Button>
			</Form>

			<Row className="py-3">
				<Col>
					Posiadasz konto?{" "}
					<Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
						Zaloguj się
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
}

export default RegisterScreen;
