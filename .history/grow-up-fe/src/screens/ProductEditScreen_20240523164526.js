import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { listProductDetail, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

function ProductEditScreen({}) {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [count_in_stock, setCountInStock] = useState(0);
	const [description, setDescription] = useState("");
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { error, loading, product } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		error: errorUpdate,
		loading: loadingUpdate,
		success: successUpdate,
	} = productUpdate;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				id: id,
				name,
				price,
				image,
				brand,
				category,
				count_in_stock,
				description,
			})
		);
	};

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			navigate("/admin/product-list");
		} else {
			if (!product.name || product.id !== Number(id)) {
				dispatch(listProductDetail(id));
			} else {
				setName(product.name);
				setPrice(product.price);
				setImage(product.image);
				setBrand(product.brand);
				setCategory(product.category);
				setCountInStock(product.count_in_stock);
				setDescription(product.description);
			}
		}
	}, [dispatch, product, id, navigate, successUpdate]);

	const uploadFileHandler = async (e) => {
		console.log("File is uploading");
	};

	return (
		<div>
			<Link to="/admin/product-list">Powrót</Link>

			<FormContainer>
				<h1>Edytuj produkt</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group>
							<Form.Label>Nazwa</Form.Label>
							<Form.Control
								type="name"
								placeholder="Wprowadź nazwę"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Cena</Form.Label>
							<Form.Control
								type="number"
								placeholder="Wprowadź cenę"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Miniaturka</Form.Label>
							<Form.Control
								type="text"
								placeholder="Załaduj obraz"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></Form.Control>

							<Form.Control
								type="file"
								id="image-file"
								label="Wybierz obraz"
								custom
								onChange={uploadFileHandler}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Marka</Form.Label>
							<Form.Control
								type="text"
								placeholder="Wprowadź markę"
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Stan magazynowy</Form.Label>
							<Form.Control
								type="number"
								placeholder="Wprowadź stan magazynowy"
								value={count_in_stock}
								onChange={(e) => setCountInStock(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Kategoria</Form.Label>
							<Form.Control
								type="text"
								placeholder="Wprowadź kategorię"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="description">
							<Form.Label>Opis</Form.Label>
							<Form.Control
								type="text"
								placeholder="Wprowadź opis"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button className="mt-3" type="submit" variant="primary">
							Aktualizuj
						</Button>
					</Form>
				)}
			</FormContainer>
		</div>
	);
}

export default ProductEditScreen;
