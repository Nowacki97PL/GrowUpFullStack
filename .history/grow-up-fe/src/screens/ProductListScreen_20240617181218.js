import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
	listProducts,
	deleteProduct,
	createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

function ProductListScreen() {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = productDelete;

	const productCreate = useSelector((state) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct,
	} = productCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const navigate = useNavigate();

	useEffect(() => {
		dispatch({ type: PRODUCT_CREATE_RESET });
		if (!userInfo.isAdmin) {
			navigate("/login");
		}

		if (successCreate) {
			navigate(`/admin/product/${createdProduct.id}/edit`);
		} else {
			dispatch(listProducts());
		}
	}, [dispatch, userInfo, navigate, successDelete, createdProduct]);

	const createProductHandler = (product) => {
		dispatch(createProduct())
	};

	const deleteHandler = (id) => {
		if (window.confirm("Jesteś pewny, że chcesz usunąć ten produkt?"))
			dispatch(deleteProduct(id));
	};

	const sortedUsers = rpd ? users.sort((a, b) => a.name.localeCompare(b.name)) : [];

	return (
		<div>
			<Row className="align-items-center">
				<Col>
					<h1>Produkty</h1>
				</Col>
				<Col className="text-end">
					<Button className="my-3" onClick={createProductHandler}>
						<i className="fas fa-plus"></i> Dodaj produkt
					</Button>
				</Col>
			</Row>

			{loadingDelete && <Loader />}
			{errorDelete && <Message variant="danger">{errorDelete}</Message>}


			{loadingCreate && <Loader />}
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>IMIĘ</th>
							<th>CENA</th>
							<th>KATEGORIA</th>
							<th>MARKA</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td>
									<LinkContainer to={`/admin/product/${product.id}/edit`}>
										<Button variant="light" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>

									<Button
										variant="danger"
										className="btn-sm"
										onClick={() => deleteHandler(product.id)}
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

export default ProductListScreen;
