import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/MainNav.css'

function MainNav() {
    
    //NAV BAR SCROLL CONTROLS
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("MainNav").style.top = "0";
        } else {
            document.getElementById("MainNav").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    const expand = "lg"
    return (

        <Navbar collapseOnSelect expand={expand} id="MainNav" fixed="top" bg="primary" className="py-2" variant="dark">
            <Container className="pe-3">

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
                                href="#AboutMe"
                                className="mx-2">About Me</Nav.Link>
                            <Nav.Link
                                href="#Projects"
                                className="mx-2">Projects</Nav.Link>
                            <Nav.Link
                                href="#ContactMe"
                                className="mx-2">Contact Me</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    )
}

export default MainNav