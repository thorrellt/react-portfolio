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
  const windowWidth = props.windowWidth;

  /**
   * responsive design variables
   * that change Bootstrap classes that
   * arent responsive on small screens 
   */
  const contactsPosition = windowWidth <= 575 ? "top-0" : "bottom-0"
  const introPosition = windowWidth <= 575 ? "top-30 start-50" : "top-45 start-45"
  const profileImgPosition = windowWidth <= 575 ? "bottom-0 end-0" : "bottom-0 start-15"






  return (
    <section className="mx-0 container-fluid .Heading position-relative main-section" id='Heading' >
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
        <div id="heading--right" className="col-12 col-sm-6 bg-primary position-relative">
          <Image
            className={`profile-pic position-absolute ${profileImgPosition}`}
            id='profile-pic'
            src={[profilePicture]}
            fluid
            alt="Thorrell T Profile Pic"
          />
        </div>
      </Row>
      <div className={`intro position-absolute ${introPosition} my-0 translate-middle`} >
        <p className='mb-2 lh-base fw-bold fs-5'>
          hello world, I'm</p>
        <h1 className='display-4'>
          Thorrell <span className="text-danger">T</span>urner</h1>
        <p className='lh-base fw-bold fs-5'>
          a Software Developer based {windowWidth <= 575 ? "" : <br />}
          out of the Washington {windowWidth <= 575 ? "" : <br />}
          Metropolitan area</p>

        <Button variant="danger" size="lg"
          className='px-3 py-3'
          id="cv-btn"
          href={resume}
          download="ThorrellT_Resume">
          <strong>DOWNLOAD CV</strong>
        </Button>
      </div>

      <a href="#AboutMe" className='down-arrow-link position-absolute bottom-0 start-50 translate-middle-x'>
        <i className="down-arrow bi bi-chevron-compact-down"></i>
      </a>

    </section>
  );
}

export default Heading