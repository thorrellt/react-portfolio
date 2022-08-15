import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Heading.css'

function Heading() {
    
    return (
        <Container fluid>
          <Row>
            <div id="heading--left" className="col-6 bg-secondary">1 of 2</div>
            <div id="heading--right" className="col-6 bg-primary">hello world</div>
          </Row>
        </Container>
      );
  }
  
  export default Heading