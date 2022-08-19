import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from './Skill'
import SkillsData from '../data/skillsData'

import '../styles/AboutMe.css'
import skillsData from '../data/skillsData';

function AboutMe(props) {
    const skillElements = skillsData.map((skill, i) => {
        return (
            <Skill
                key={i}
                title={skill.title}
                className={skill.className}
            />
        )
    })

    return (
        <section className='container-fluid position-relative' id='AboutMe'>
            <h2 className='mt-5 mb-3 text-center'>
                About Me</h2>
            <Row className='container-lg mx-auto px-0'>
                <Col xs={12} md={{ span: 5, offset: 1 }} className=''>
                    <Row id='AboutMe--content' className='gy-5 mx-1 mb-3 pe-5'>
                        <p>
                            I have always excelled at, & enjoyed, being more of a logical problem solver & tinkerer. So, after 15+ years in public relations &amp customer service I decided to pursue a career in Software Development.
                        </p>
                    </Row>
                    <h3 className='fw-bold'>Education</h3>
                    <Row id='education' className='mx-1 mt-2'>

                        <Container className='mb-3'>

                            <Row xs="auto" className='mt-2'>
                                <Col xs={12}>
                                    <small id="degree-type">B.S.</small>
                                </Col>
                                <Col id='degree' className='pe-1'>
                                    <span id="degree-field" className='h5 fs-6'>Computer Science</span>

                                </Col>
                                <Col className='px-0 lh-1 py-1'>
                                    <small id="degree-year">2021</small>
                                </Col>
                            </Row>
                            <p id="college-name">Old Dominion University. Norfolk, Va.</p>
                        </Container>
                    </Row>
                </Col>
                <Col xs={12} md={5} id='skills'>
                    <h3 className='fw-bold pb-3'>Skills</h3>
                    <Row className='g-3'>
                        {skillElements}
                    </Row>



                </Col>
            </Row>

        </section>
    )

}

export default AboutMe