import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../styles/Heading.css'

import profilePicture from '../assets/img-profile-picture.png'
import githubIcon from '../assets/icon-gh.svg'
import linkedinIcon from '../assets/icon-li.svg'
import emailIcon from '../assets/icon-mail.svg'
import resume from '../assets/thorrellt_resume.pdf'

function Heading(props) {
  console.log(props.windowWidth)
  const contactsPosition = props.windowWidth <= 575 ? "top-0" : "bottom-0"

  return (
    <Container className=".Heading position-relative" id='Heading' fluid>
      <Row>
        <div id="heading--left" 
        className="mx-0 px-0 col-12 col-sm-6 bg-secondary position-relative">
          <Row id="main-contacts"
            className={`bg-primary position-absolute ${contactsPosition} start-0 px-2 py-3`}>
            
            <Col>
              <a href="https://github.com/thorrellt" className="contact mx-2" 
              id="gitHub" 
              target="_blank" 
              rel="noopener noreferrer">
                <Image
                  src={githubIcon} 
                  alt="github" 
                  title="github.com/thorrellt" />
              </a>
            </Col>

            <Col>
              <a href="https://www.linkedin.com/in/thorrellt/" className="contact mx-2" 
              id="linkedIn" 
              target="_blank" 
              rel="noopener noreferrer">
                <Image
                  src={linkedinIcon} 
                  alt="www.linkedin.com/in/thorrellt" title="linkedin.com/in/thorrellt" />
              </a>
            </Col>

            <Col>
              <a href="mailto:thorrellt@gmail.com" className="contact mx-2" 
              id="email" target="_blank"
              rel="noopener noreferrer">
                <Image className='py-auto'
                  src={emailIcon} 
                  alt="thorrellt@gmail.com" 
                  title="thorrellt@gmail.com" />
              </a>
            </Col>
          </Row>
        </div>
        <div id="heading--right" className="col-12 col-sm-6 bg-primary">
          <Image
            className="profile-pic ms-5 me-5"
            id='profile-pic'
            src={[profilePicture]}
            fluid
            alt="Thorrell T Profile Pic"
          />
        </div>
      </Row>
      <div className="intro position-absolute top-45 start-45 my-0 translate-middle">
        <p>hello world, I'm</p>
        <h1 className='display-4'>Thorrell <span className="text-danger">T</span>urner</h1>
        <p>a Software Developer based<br />
          out of the Washington<br />
          Metropolitan area</p>

        <Button variant="danger" size="lg"
          className='px-3 py-3'
          id="cv-btn"
          href={resume}
          download="ThorrellT_Resume">
          <strong>DOWNLOAD CV</strong>
        </Button>
      </div>


    </Container>
  );
}

export default Heading