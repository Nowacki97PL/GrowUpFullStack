import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container} from 'react-bootstrap'
function Header() {
	return (
		<header>
			<Navbar expand="md" id="Navbar" collapseOnSelect>
        <Container>
				<Navbar.Brand href="/">
					<img src="logo.png" alt="logo"></img>
					</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/shop">Sklep</Nav.Link>
						<Nav.Link href="/growup-academy">GrowUp-Academy</Nav.Link>
						<Nav.Link href="/blog">blog</Nav.Link>
						<Nav.Link href="/cart">
							<i className="fas fa-shopping-cart"></i>Koszyk
						</Nav.Link>
						<Nav.Link href="/profile">
							<i className="fas fa-user"></i>Profil
						</Nav.Link>
						<Nav.Link href="/login">
							<i></i>Zaloguj
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>	
			</Navbar>
		</header>
	);
}

export default Header;
