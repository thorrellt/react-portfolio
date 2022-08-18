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
            <Row className='container mx-5 '>
                <Col className='mx-2 gx-5'>
                    <Row className='gy-5 me-5'>
                        <p>
                            I have always excelled at, & enjoyed, being more of a logical problem solver & tinkerer. So, after 15+ years in public relations &amp customer service I decided to pursue a career in Software Development.
                        </p>
                    </Row>
                    <Row id='education' className='mt-2'>
                        <h3>Education</h3>
                        <Container>
                            <small id="degree-type">B.S.</small>
                            <Row xs="auto" className='mt-2'>
                                <Col id='degree' >
                                    <h5 id="degree-field" className='lh-1'>Computer Science</h5>

                                </Col>
                                <Col className='px-0 lh-1 py-1'>
                                    <small id="degree-year">2021</small>
                                </Col>
                            </Row>
                            <p id="college-name">Old Dominion University. Norfolk, Va.</p>
                        </Container>
                    </Row>
                </Col>
                <Col id='skills'>
                    <h3>Skills</h3>
                    <Row className='g-3'>
                        {skillElements}
                    </Row>



                </Col>
            </Row>

        </section>
    )

}

export default AboutMe