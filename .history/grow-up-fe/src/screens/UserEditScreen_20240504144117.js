import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstans";

function UserEditScreen() {
	const { userId } = useParams();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userDetails = useSelector((state) => state.userDetails);
	const { error, loading, user } = userDetails;

	const userUpdate = useSelector((state) => state.userUpdate);
	const {
		error: errorUpdate,
		loading: loadingUpdate,
		success: successUpdate,
	} = userUpdate || {};

	useEffect(() => {
		console.log(successUpdate);
		if (successUpdate) {
			setSuccessMessage("Dane użytkownika zostały pomyślnie zaktualizowane.");
			console.log("zaktualizowano");
			setTimeout(() => {
				setSuccessMessage(""); // Reset success message
				dispatch({ type: USER_UPDATE_RESET });
				navigate("/admin/user-list");
			}, 3000);
		} else {
			console.log("test");
			if (!user || !user.name || user.id !== Number(userId)) {
				dispatch(getUserDetails(userId));
			} else {
				setName(user.name);
				setEmail(user.email);
				setIsAdmin(user.isAdmin);
			}
		}
	}, [dispatch, user, userId, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: user.id, name, email, isAdmin })).then(() => {
            navigate("/admin/user-list");
        });
    };

	return (
		<div>
			<Link to="/admin/user-list">Cofnij</Link>

			<FormContainer>
				<h1>Edytuj użytkownika</h1>
				{successMessage && (
					<Message variant="success">{successMessage}</Message>
				)}
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
