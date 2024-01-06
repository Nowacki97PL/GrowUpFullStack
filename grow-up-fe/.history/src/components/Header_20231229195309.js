import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import
function Header() {
	return (
		<header>
			<Navbar expand="md" id="Navbar" collapseOnSelect>
        <Con
				<Navbar.Brand>GrowUp</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link>Sklep</Nav.Link>
						<Nav.Link>GrowUp-Academy</Nav.Link>
						<Nav.Link>
							<i></i>blog
						</Nav.Link>
						<Nav.Link>
							<i className="fas fa-shopping-cart"></i>Koszyk
						</Nav.Link>
						<Nav.Link>
							<i className="fas fa-user"></i>Profil
						</Nav.Link>
						<Nav.Link>
							<i></i>Zaloguj
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
