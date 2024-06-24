import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
	const navigate = useNavigate();

    const sumbmitHandler = (e) => {
        e.prevent
    }


	return (
    
    <Form onSubmit={sumbmitHandler}>

    </Form>
    )
}

export default SearchBox;
