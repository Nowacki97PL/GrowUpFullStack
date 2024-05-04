import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails, updateUser } from "../actions/userActions";
import {moduleName} from '../constants/userConstans'


function UserEditScreen() {
	const { userId } = useParams();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userDetails = useSelector((state) => state.userDetails);
	const { error, loading, user } = userDetails;

	const userUpdate = useSelector((state) => state.userUpdate);
	const {
		error: errorUpdate,
		loading: loadingUpdate,
		success: successUpdate,
	} = userUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET });
			navigate("/admin/user-list");
		} else {
			if (!user.name || user.id !== Number(userId)) {
				dispatch(getUserDetails(userId));
			} else {
				setName(user.name);
				setEmail(user.email);
				setIsAdmin(user.isAdmin);
			}
		}
	}, [user, userId, successUpdate, navigate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUser({ id: user.id, name, email, isAdmin }));
	};

	return (
		<div>
			<Link to="/admin/userlist">Cofnij</Link>

			<FormContainer>
				<h1>Edytuj użytkownika</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Imię</Form.Label>
							<Form.Control
								type="name"
								placeholder="Wprowadź imię"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Wprowadź Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="isadmin">
							<Form.Check
								type="checkbox"
								label="Is Admin"
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Button type="submit" variant="primary">
							Zapisz zmiany
						</Button>
					</Form>
				)}
			</FormContainer>
		</div>
	);
}

export default UserEditScreen;
