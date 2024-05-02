import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUsers } from "../actions/userActions";

function UserListScreen() {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch(listUsers());
	}, [dispatch]);

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
                        <th>ID</th>
                        <th>IMIĘ</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        <th></th>
                    </thead>

                    <tbody>
                        {users.map(user => ())}
                    </tbody>

                </Table>
			)}
		</div>
	);
}

export default UserListScreen;
