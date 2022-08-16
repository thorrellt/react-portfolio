import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../scss/Heading.scss'
import profilePicture from '../assets/img-profile-picture.png'
import resume from '../assets/thorrellt_resume.pdf'

function Heading() {

  return (
    <Container className = ".Heading" fluid>
      <Row>
        <div id="heading--left" className="col-6 bg-secondary"></div>
        <div id="heading--right" className="col-6 bg-primary">
          <Image
            className="profile-pic ms-5 me-5"
            src={[profilePicture]}
            fluid
            alt="Thorrell T Profile Pic"
          />
        </div>
      </Row>
      <div className="intro position-absolute top-45 start-45 my-0 translate-middle">
        <p>hello world, I'm</p>
        <h1 className='display-4'>Thorrell <span class="text-danger">T</span>urner</h1>
        <p>a Software Developer based<br/>
          out of the Washington<br/>
          Metropolitan area</p>

        <Button variant="danger" size="lg" 
        className='px-3 py-3'
        href={resume}
        download="ThorrellT_Resume">
          <strong>DOWNLOAD CV</strong>
        </Button>

      </div>
    </Container>
  );
}

export default Heading