import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <header>
    <Navbar expand="lg">
            <Navbar.Brand>GrowUp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        <NavDropdown title='Dropdown'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
  );
}

export default Header
