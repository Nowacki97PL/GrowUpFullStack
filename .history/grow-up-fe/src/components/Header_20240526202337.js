import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const dispatch = useDispatch();

	// Pobierz stan koszyka
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	// Oblicz całkowitą liczbę produktów w koszyku
	const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar expand="md" id="Navbar" collapseOnSelect>
				<LinkContainer to="/">
					<Navbar.Brand className="img-logo">
						<img src="/logo.png" alt="logo"></img>
					</Navbar.Brand>
				</LinkContainer>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-md-auto me-xl-5">
						<LinkContainer to="/shop">
							<Nav.Link>
								<i className="fa-solid fa-shop"></i>
								Sklep
							</Nav.Link>
						</LinkContainer>

						{/* Reszta linków */}

						<LinkContainer to="/cart">
							<Nav.Link>
								<i className="fas fa-shopping-cart"></i>Koszyk
								{cartItemsCount > 0 && (
									<span className="badge">{cartItemsCount}</span>
								)}
							</Nav.Link>
						</LinkContainer>

						{/* Reszta linków */}

					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
