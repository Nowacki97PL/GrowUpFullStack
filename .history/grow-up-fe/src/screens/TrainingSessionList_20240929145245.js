import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUsers, deleteUser } from "../actions/userActions";

function TrainingSessionListScreen() {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const sessionDelete = useSelector((state) => state.sessionDelete);
	const { success: successDelete } = sessionDelete;

	const deleteHandler = (id) => {
		if (window.confirm("Jesteś pewny, że chcesz usunać tego użytkownika?"))
			dispatch(dUser(id)).then(() => {
				dispatch(listUsers());
			});
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers());
		} else {
			navigate("/login");
		}
	}, [dispatch, userInfo, navigate, successDelete]);

	const sortedUsers = users ? users.sort((a, b) => a.id - b.id) : [];

	return (
		<div>
			<h1>Użytkownicy</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>Trener</th>
							<th>Podopieczny</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{sortedUsers.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user.isAdmin ? (
										<i className="fas fa-check" style={{ color: "green" }}></i>
									) : (
										<i className="fas fa-times" style={{ color: "red" }}></i>
									)}
								</td>
								<td>
									<LinkContainer to={`/admin/user/${user.id}/edit`}>
										<Button variant="light" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>

									<Button
										variant="danger"
										className="btn-sm"
										onClick={() => deleteHandler(user.id)}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
}

export default TrainingSessionListScreen;
