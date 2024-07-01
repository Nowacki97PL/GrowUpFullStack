import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBox() {
	const navigate = useNavigate();
	const location = useLocation();

	const [keyword, setKeyword] = useState("");

	const sumbmitHandler = (e) => {
		e.preventDefault();
		if (keyword) {
			navigate(`shop/?keyword=${keyword}&page=1`);
		} else {
			navigate(navigate(navigate.location.pathname));
		}
	};

	return (
		<Form onSubmit={sumbmitHandler} className="d-flex">
			<Form.Control
				type="text"
				name="q"
				onChange={(e) => setKeyword(e.target.value)}
				className="mr-sm-2 ml-sm-5 rounded rounded-5"
				style={{ flex: 1 }}
			></Form.Control>

			<Button type="submit" variant="outline-success" className="mx-2">
				Szukaj
			</Button>
		</Form>
	);
}

export default SearchBox;
