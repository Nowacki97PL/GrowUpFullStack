import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
	const navigate = useNavigate();

    const sumbmitHandler = (e) => {
        e.preventDefault()
    }


	return (
    
    <Form onSubmit={sumbmitHandler}>
        <Form.Control
            type>

        </Form.Control>
    </Form>
    )
}

export default SearchBox;
