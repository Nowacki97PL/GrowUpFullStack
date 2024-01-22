import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetail } from "../actions/productActions";

function ProductScreen() {
	const {id} = useParams();
	console.log("Product ID:", id);
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetail(id));
	}, [dispatch, id]);



	return (
		<div>
			<Link to="/shop" className="btn btn-primary my-3">
				Go back
			</Link>
			{loading ?
				<Loader/>
				: error
					? <Message variant='danger'>[error]</Message>
				:}

			
		</div>
	);
}

export default ProductScreen;
