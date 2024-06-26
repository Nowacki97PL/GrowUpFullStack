import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstans";
import { listMyOrders } from "../actions/orderActions";

function ProfileScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userDetails = useSelector((state) => state.userDetails);
	const { error, loading, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	const orderListMy = useSelector((state) => state.orderListMy);
	const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		} else {
			if (!user || !user.name || success || userInfo.id !== user.id) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails("profile"));
				dispatch(listMyOrders());
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, navigate, userInfo, user, success]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password != confirmPassword) {
			setMessage("Hasła nie pasują do siebie.");
		} else {
			dispatch(
				updateUserProfile({
					id: user._id,
					name: name,
					email: email,
					password: password,
				})
			);
			setMessage("");
		}
	};

	const sortedOrders = orders ? orders.sort((a, b) => a.id - b.id) : [];

	return (
		<Row>
			<Col md={3}>
				<h2>Profil użytkownika</h2>
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
							type="password"
							placeholder="Wprowadź hasło"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="passwordConfirm">
						<Form.Label>Potwierdź hasło</Form.Label>
						<Form.Control
							type="password"
							placeholder="Wprowadź hasło"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button className="my-3" type="submit" variant="primary">
						Zaktualizuj profil
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>Historia zamówień</h2>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<Message variant="danger">{errorOrders}</Message>
				) : (
					<Table striped responsive className="table-xl">
						<thead>
							<tr>
								<th>NR. Zamówienia</th>
								<th>Data</th>
								<th>Kwota</th>
								<th>Opłacone</th>
								<th>Szczegóły</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{sortedOrders.map((order) => (
								<tr key={order.id}>
									<td>{order.id}</td>
									<td>{order.created_at.substring(0, 10)}</td>
									<td>{order.total_price} PLN</td>
									<td>
										{order.is_paid ? (
											<i
												className="fas fa-check"
												style={{ color: "green" }}
											></i>
										) : (
											<i className="fas fa-times" style={{ color: "red" }}></i>
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order.id}`}>
											<Button className="btn-sm">Szczegóły</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
		</Row>
	);
}

export default ProfileScreen;
