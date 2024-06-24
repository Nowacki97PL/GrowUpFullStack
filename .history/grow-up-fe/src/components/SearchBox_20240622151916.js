import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState("");

	const sumbmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<Form onSubmit={sumbmitHandler} inline>
			<Form.Control
				type="text"
				name="q"
				onChange={(e) => setKeyword(e.target.value)}
				className="mr-sm-2 ml-sm-5"
			></Form.Control>

			<Button inline type="submit" variant="outline-success" className="my-3">
				Szukaj
			</Button>
		</Form>
	);
}

export default SearchBox;
