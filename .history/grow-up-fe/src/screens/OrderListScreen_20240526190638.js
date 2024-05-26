import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";

function OrderListScreen() {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders } = orderList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listOrders());
		} else {
			navigate("/login");
		}
	}, [dispatch, userInfo]);

	return (
		<div>
			<h1>Zamówienia</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>Nr.Zam</th>
							<th>Użyt.</th>
							<th>DATA</th>
							<th>Wartość</th>
							<th>Opłacone</th>
							<th>DELIVERED</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{orders.map((order) => (
							<tr key={order.id}>
								<td>{order.id}</td>
								<td>{order.user && order.user.name}</td>
								<td>{order.created_at.substring(0, 10)}</td>
								<td>${order.total_price}</td>

								<td>
									{order.is_paid ? (
										<i className="fas fa-check" style={{ color: "green" }}></i>
									) : (
										<i className="fas fa-times" style={{ color: "red" }}></i>
									)}
								</td>

								<td>
									{order.is_delivered ? (
										order.delivered_at.substring(0, 10)
									) : (
										<i className="fas fa-check" style={{ color: "red" }}></i>
									)}
								</td>

								<td>
									<LinkContainer to={`/order/${order.id}`}>
										<Button variant="dark" className="btn-sm">
											Details
										</Button>
									</LinkContainer>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
}

export default OrderListScreen;
