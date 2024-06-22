import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	Card,
	Form,
	ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
	listProductDetail,
	createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

function ProductScreen() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const productReviewCreate = useSelector((state) => state.productReviewCreate);
	const {
		loading: loadingProductReview,
		error: errorProductReview,
		success: successProductReview,
	} = productReviewCreate;

	useEffect(() => {
		dispatch(listProductDetail(id));
	}, [dispatch, id]);

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Link to="/shop" className="btn btn-primary my-3">
				Powrót
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">[error]</Message>
			) : (
				<div>
					<Row>
						<Col md={6}>
							<Image src={product.image} alt={product.name} fluid></Image>
						</Col>
						<Col md={3}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>

								<ListGroup.Item>
									<Rating
										value={product.rating}
										text={`${product.num_reviews} oceny`}
										color={"#f8e825"}
									/>
								</ListGroup.Item>

								<ListGroup.Item>Cena: {product.price} PLN.</ListGroup.Item>

								<ListGroup.Item>{product.description}.</ListGroup.Item>
							</ListGroup>
						</Col>

						<Col md={3}>
							<Card>
								<ListGroup>
									<ListGroup.Item>
										<Row>
											<Col>Cena:</Col>
											<Col>
												<strong>PLN {product.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>

									<ListGroup.Item>
										<Row>
											{!product.is_digital && (
												<>
													<Col>Status:</Col>
													<Col>
														<strong>
															{product.count_in_stock > 0
																? "Dostępny"
																: "Brak na stanie"}
														</strong>
													</Col>
												</>
											)}
										</Row>
									</ListGroup.Item>

									{product.count_in_stock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Ilość</Col>
												<Col xs="auto" className="my-1">
													<Form.Control
														className="form-select"
														as="select"
														value={qty}
														onChange={(e) => setQty(e.target.value)}
													>
														{[...Array(product.count_in_stock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															)
														)}
													</Form.Control>
												</Col>
											</Row>
										</ListGroup.Item>
									)}

									<ListGroup.Item>
										<Row>
											<Button
												onClick={addToCartHandler}
												className="btn-block"
												disabled={product.count_in_stock == 0}
												type="button"
											>
												Dodaj do koszyka
											</Button>
										</Row>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<h4>Opinie</h4>
							{product.reviews.length === 0 && (
								<Message variant="info">Brak opini</Message>
							)}

							<ListGroup variant="flush">
								{product.reviews.map((review) => (
									<ListGroupItem key={review.id}>
										<strong>{review.name}</strong>
										<Rating value={review.rating} color="#f8e825" />
										<p>{review.created_at.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroupItem>
								))}

								<ListGroupItem>
									<h4>Zostaw opinię</h4>
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId="rating">
												<Form.Label>Ocena</Form.Label>
												<Form.Control
													as="select"
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option value="">Wybierz...</option>
													<option value="1">1</option>
													<option value="">Wybierz...</option>
													<option value="">Wybierz...</option>
													<option value="">Wybierz...</option>
													<option value="">Wybierz...</option>

												</Form.Control>
											</Form.Group>
										</Form>
									) : (
										<Message variant="info">
											Proszę <Link to="/login">zaloguj się</Link> by zostawić
											opinię{" "}
										</Message>
									)}
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
}

export default ProductScreen;
