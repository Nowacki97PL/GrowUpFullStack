import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
	return (
		<header>
			<Navbar expand="sm" id="Navbar" collapseOnSelect>
				<Container>

					<LinkContainer to="/home">
						<Navbar.Brand className="img-logo">
							<img src="logo.png" alt="logo"></img>
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto" id="Nav-custom">

							<LinkContainer to="/shop">
								<Nav.Link>
									<i className="fa-solid fa-shop"></i>
									Sklep
								</Nav.Link>
							</LinkContainer>
							
							<LinkContainer to="/growup-academy">
								<Nav.Link>
									<i className="fa-solid fa-graduation-cap"></i>
									GrowUp-Academy
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/blog">
								<Nav.Link>
									<i className="fa-brands fa-microblog"></i>
									blog
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>Koszyk
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/profile">
								<Nav.Link>
									<i className="fas fa-user"></i>Profil
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>
									<i className="fa-solid fa-right-to-bracket"></i>
									Zaloguj
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
