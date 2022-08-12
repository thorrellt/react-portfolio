import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNav(){
    return (
        <Navbar bg="primary" variant="dark">
            <Container className='px-0'>
            <Nav className="ms-auto">
                <Nav.Link 
                href="#"
                className="mainNav--link me-1">About Me</Nav.Link>
                <Nav.Link 
                href="#" 
                className="mx-1">Projects</Nav.Link>
                <Nav.Link 
                href="#"
                className="ms-1 pe-0">Contact Me</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNav