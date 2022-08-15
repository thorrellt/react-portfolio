import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/MainNav.css'

function MainNav() {
    const expand = "lg"
    return (

        <Navbar collapseOnSelect expand="lg" id="MainNav" fixed="top" bg="primary-transparent" variant="dark">
            <Container className="pe-3">
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    className="bg-secondary"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            thorrellt.com
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#"
                                className="mx-2">About Me</Nav.Link>
                            <Nav.Link
                                href="#"
                                className="mx-2">Projects</Nav.Link>
                            <Nav.Link
                                href="#"
                                className="mx-2">Contact Me</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    )
}

export default MainNav