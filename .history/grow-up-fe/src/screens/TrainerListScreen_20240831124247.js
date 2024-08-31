import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Trainer from '../components/Trainer'
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listTrainers } from "../actions/serviceActions";

function TrainerListScreen() {
	const location = useLocation();
	const dispatch = useDispatch();
	const trainerList = useSelector((state) => state.trainerList);
	const { error, loading, trainers} = trainerList;

	useEffect(() => {
		dispatch(listTrainers);
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<div>
					<Row>
						{trainers &&
							trainers.map((product) => (
								<Col key={trainer.id} sm={12} md={6} lg={4} xl={3}>
									<Trainer product={product} />
								</Col>
							))}
					</Row>
				</div>
			)}
		</div>
	);
}

export default TrainerListScreen;
