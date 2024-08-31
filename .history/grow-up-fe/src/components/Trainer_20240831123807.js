import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Trainer({ trainer }) {
	return (
		<Card className="my-3 p-3 rounded" id="card-border-color">
			<Link to={`/trainer/${trainer.id}`}>
				<Card.Img className="rounded-3" src={trainer.image}></Card.Img>
			</Link>

			<Card.Body>
				<Link to={`/trainer/${trainer.id}`} id="card-title">
					<Card.Title as="div">
						<strong>{trainer.name}</strong>
					</Card.Title>
				</Link>


				<Card.Text as="h3">{product.price} PLN.</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Product;
