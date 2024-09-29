import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listSessions, deleteSession } from "../actions/serviceActions";

function TrainingSessionListScreen() {
	const dispatch = useDispatch();

	const sessionList = useSelector((state) => state.sessionList);
	const { loading, error, session } = sessionList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const sessionDelete = useSelector((state) => state.sessionDelete);
	const { success: successDelete } = sessionDelete;

	const deleteHandler = (id) => {
		if (window.confirm("Jesteś pewny, że chcesz usunać tego użytkownika?"))
			dispatch(deleteSession(id)).then(() => {
				dispatch(listSessions());
			});
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listSessions());
		} else {
			navigate("/login");
		}
	}, [dispatch, userInfo, navigate, successDelete]);

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
						{sessionList.map((session) => (
							<tr key={session.id}>
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
