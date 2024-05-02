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
					<Nav className="ms-md-auto">
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

						{userInfo ? (
							<NavDropdown title={userInfo.name} id="username">
								<LinkContainer to="/profile">
									<NavDropdown.Item>
										<i className="fas fa-user"></i>Profil
									</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item onClick={logoutHandler}>
									<i className="fa-solid fa-right-from-bracket"></i>
									Wyloguj
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<LinkContainer to="/login">
								<Nav.Link>
									<i className="fa-solid fa-right-to-bracket"></i>
									Zaloguj
								</Nav.Link>
							</LinkContainer>
						)}

						{userInfo && userInfo.isAdmin && (
							<NavDropdown title="Admin" id="admin-menu">
								<LinkContainer to="/admin/user-list">
									<NavDropdown.Item><i class="fa-solid fa-people-group"> Klienci</i></NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to="/admin/user-list">
									<NavDropdown.Item><i class="fa-brands fa-product-hunt"> Produkty</i></NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to="/admin/user-list">
									<NavDropdown.Item><i class="fa-solid fa-people-group"> Zamówienia</i></NavDropdown.Item>
								</LinkContainer>


							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
