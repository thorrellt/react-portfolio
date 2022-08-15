import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/MainNav.css'

function MainNav() {
    return (
        <Navbar collapseOnSelect expand="lg" id="MainNav" fixed="top" bg="primary-transparent" variant="dark">
            <Container className="pe-3">
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#"
                            className="mainNav--link me-1">About Me</Nav.Link>
                        <Nav.Link
                            href="#"
                            className="mx-4">Projects</Nav.Link>
                        <Nav.Link
                            href="#"
                            className="ms-1">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default MainNav