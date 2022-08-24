import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/MainNav.css'

function MainNav(props) {
    const { currentHash, setCurrentHash } = props;

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


    const expand = "xl"
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
                                href="#Heading"
                                className={`mx-2 
                                ${currentHash === "#Heading" ? 'active' : ''}`} >
                                Home</Nav.Link>
                            <Nav.Link
                                href="#AboutMe"
                                className={`mx-2 
                                ${currentHash === "#AboutMe" ? 'active' : ''}`} >
                                About Me</Nav.Link>
                            <Nav.Link
                                href="#Projects"
                                className={`mx-2 
                                ${currentHash === "#Projects" ? 'active' : ''}`} >Projects</Nav.Link>
                            <Nav.Link
                                href="#ContactMe"
                                className={`mx-2 
                                ${currentHash === "#ContactMe" ? 'active' : ''}`}>Contact Me</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    )
}

export default MainNav