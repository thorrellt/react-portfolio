import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../styles/Footer.css'

function Footer(props) {
    return (
        <Container fluid className="footer bg-primary">
            <a href="#Heading">
                <i className="bi bi-arrow-up-square-fill fs-2 ms-1" alt="Home"
                  title="Home"></i>
            </a>
            <p className='mb-0 ms-3'>Written by Thorrell Turner. View the code <a
                href='https://github.com/thorrellt/react-portfolio'
                target="_blank"
                rel="noopener noreferrer">
                here at my GitHub.
            </a>
            </p>
        </Container >
    )
}

export default Footer